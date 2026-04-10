import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { insforge } from '../lib/insforge';

type Role = 'Farmer' | 'Buyer' | 'General';

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<Role>('Farmer');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gstNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateGST = (gst: string) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gst);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // InsForge Login Logic
        const { data, error: loginError } = await insforge.auth.signInWithPassword({
          email: formData.email,
          password: formData.password
        });
        
        if (data?.session) {
          setSuccess('Login Successful! Redirecting...');
          const userMetadata = data.user.user_metadata;
          setTimeout(() => {
            navigate(userMetadata?.role === 'Farmer' ? '/dashboard' : '/browse');
          }, 1500);
        } else {
          setError(loginError?.message || 'Login failed. Please check your credentials.');
        }
      } else {
        // InsForge Signup Logic
        if (role === 'Buyer' && !validateGST(formData.gstNumber)) {
          setError('Invalid GST Number format (e.g., 22AAAAA0000A1Z5)');
          setLoading(false);
          return;
        }

        const { data, error: signupError } = await insforge.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              fullName: formData.fullName,
              role: role,
              gstNumber: role === 'Buyer' ? formData.gstNumber : null
            }
          }
        });

        if (data?.user) {
          if (data.session) {
             setSuccess('Account created! Redirecting...');
             setTimeout(() => navigate('/dashboard'), 1500);
          } else {
             setSuccess('Signup successful! Please check your email for verification.');
             setTimeout(() => setIsLogin(true), 3000);
          }
        } else {
          setError(signupError?.message || 'Signup failed. Please try again.');
        }
      }
    } catch (err: any) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 font-body">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-outline-variant/10"
      >
        <div className="p-8 md:p-12 space-y-10">
          {/* Toggle Switch */}
          <div className="flex justify-center">
            <div className="bg-surface-container-low p-1.5 rounded-full flex gap-1 shadow-inner relative">
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-y-1.5 w-[calc(50%-0.375rem)] bg-primary rounded-full shadow-lg"
                animate={{ x: isLogin ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button 
                onClick={() => setIsLogin(true)}
                className={`relative z-10 px-10 py-3 rounded-full font-black text-sm transition-colors ${isLogin ? 'text-white' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`relative z-10 px-10 py-3 rounded-full font-black text-sm transition-colors ${!isLogin ? 'text-white' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Signup
              </button>
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center space-y-2">
            <motion.h1 
              key={isLogin ? 'h-login' : 'h-signup'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-headline font-black text-primary tracking-tighter"
            >
              {isLogin ? 'Welcome Back' : 'Join AgriChain'}
            </motion.h1>
            <p className="text-on-surface-variant font-medium opacity-70">
              {isLogin ? 'Access your secure dashboard via email.' : 'Start your journey as a verified digital agronomist.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Identity Role Selection */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Identity Role</label>
              <div className="grid grid-cols-3 gap-3">
                <RoleBtn active={role === 'Farmer'} onClick={() => setRole('Farmer')} icon="agriculture" label="Farmer" />
                <RoleBtn active={role === 'Buyer'} onClick={() => setRole('Buyer')} icon="shopping_basket" label="Buyer" />
                <RoleBtn active={role === 'General'} onClick={() => setRole('General')} icon="person" label="General" />
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode='wait'>
                {!isLogin && (
                  <motion.div 
                    key="name-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                     <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Full Name</label>
                     <input 
                      required 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low p-5 rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold placeholder:opacity-30" 
                      placeholder="John Doe" 
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Email Address</label>
                <input 
                  required 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low p-5 rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold placeholder:opacity-30" 
                  placeholder="name@example.com" 
                />
              </div>

              <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Password</label>
                  <input 
                    required 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low p-5 rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold placeholder:opacity-30" 
                    placeholder="••••••••" 
                  />
              </div>

              <AnimatePresence>
                {!isLogin && role === 'Buyer' && (
                  <motion.div 
                    key="gst-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">GST Number</label>
                    <input 
                      required 
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low p-5 rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold placeholder:opacity-30 uppercase" 
                      placeholder="22AAAAA0000A1Z5" 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-error-container/10 p-4 rounded-xl border border-error/10"
              >
                <p className="text-error text-xs font-bold text-center">{error}</p>
              </motion.div>
            )}
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 p-4 rounded-xl border border-primary/10"
              >
                <p className="text-primary text-xs font-black text-center">{success}</p>
              </motion.div>
            )}

            <button 
              disabled={loading}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20 text-lg disabled:opacity-50 group"
            >
              {loading ? 'Processing...' : isLogin ? 'Sign In Securely' : 'Create Account'}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          <div className="flex justify-between pt-4">
             <Badge icon="security" label="Secure" color="bg-orange-50 text-orange-900" />
             <Badge icon="verified" label="Identity Verified" color="bg-green-50 text-green-900" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function RoleBtn({ active, onClick, icon, label }: any) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all relative ${active ? 'border-primary bg-primary/5 shadow-md scale-105' : 'border-transparent bg-surface-container-low opacity-60 hover:opacity-100 hover:scale-105'}`}
    >
      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div layoutId="roleDot" className="w-1.5 h-1.5 bg-primary rounded-full absolute bottom-2" />
      )}
    </button>
  );
}

function Badge({ icon, label, color }: any) {
  return (
    <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest ${color} shadow-sm border border-black/5`}>
      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      {label}
    </div>
  );
}
