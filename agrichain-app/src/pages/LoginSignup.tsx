import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';

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
    emailOrMobile: '',
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
        // Login Logic
        const res = await authService.login({
          emailOrMobile: formData.emailOrMobile,
          password: formData.password
        });
        
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          setSuccess('Login Successful! Redirecting...');
          setTimeout(() => {
            navigate(res.user.role === 'Farmer' ? '/dashboard' : '/browse');
          }, 1500);
        } else {
          setError(res.message || 'Login failed');
        }
      } else {
        // Signup Logic
        if (role === 'Buyer' && !validateGST(formData.gstNumber)) {
          setError('Invalid GST Number format');
          setLoading(false);
          return;
        }

        const res = await authService.signup({
          ...formData,
          role
        });

        if (res.token) {
          setSuccess('Account created successfully! Switching to Login...');
          setTimeout(() => {
            setIsLogin(true);
            setSuccess('');
          }, 2000);
        } else {
          setError(res.message || 'Signup failed');
        }
      }
    } catch (err) {
      setError('Connection failed. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-outline-variant/10"
      >
        <div className="p-8 md:p-12 space-y-10">
          {/* Toggle Switch */}
          <div className="flex justify-center">
            <div className="bg-surface-container-low p-1.5 rounded-full flex gap-1 shadow-inner">
              <button 
                onClick={() => setIsLogin(true)}
                className={`px-8 py-3 rounded-full font-black text-sm transition-all ${isLogin ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`px-8 py-3 rounded-full font-black text-sm transition-all ${!isLogin ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                Signup
              </button>
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-headline font-black text-primary tracking-tighter">
              {isLogin ? 'Welcome Back' : 'Join AgriChain'}
            </h1>
            <p className="text-on-surface-variant font-medium opacity-70">
              {isLogin ? 'Access your secure dashboard via email/password.' : 'Start your journey as a verified digital agronomist.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Identity Role Selection (Signup only or Login optional) */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Identity Role</label>
              <div className="grid grid-cols-3 gap-3">
                <RoleBtn active={role === 'Farmer'} onClick={() => setRole('Farmer')} icon="agriculture" label="Farmer" />
                <RoleBtn active={role === 'Buyer'} onClick={() => setRole('Buyer')} icon="shopping_basket" label="Buyer" />
                <RoleBtn active={role === 'General'} onClick={() => setRole('General')} icon="person" label="General" />
              </div>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div className="space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Full Name</label>
                   <input 
                    required 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low p-5 rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold placeholder:opacity-30" 
                    placeholder="John Doe" 
                  />
                </div>
              )}

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-2">Email or Mobile Number</label>
                <div className="flex gap-3">
                  <div className="bg-surface-container-low p-5 rounded-2xl font-black text-on-surface-variant opacity-60">+91</div>
                  <input 
                    required 
                    name="emailOrMobile"
                    value={formData.emailOrMobile}
                    onChange={handleChange}
                    className="flex-1 bg-surface-container-low p-5 rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold placeholder:opacity-30" 
                    placeholder="98765 43210" 
                  />
                </div>
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

              {!isLogin && role === 'Buyer' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
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
            </div>

            <AnimatePresence>
              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-error text-xs font-bold text-center">{error}</motion.p>
              )}
              {success && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs font-bold text-center">{success}</motion.p>
              )}
            </AnimatePresence>

            <button 
              disabled={loading}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20 text-lg disabled:opacity-50"
            >
              {loading ? 'Processing...' : isLogin ? 'Send Secure OTP' : 'Create Account'}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          <div className="flex justify-between">
             <Badge icon="security" label="Secure Entry" color="bg-orange-100 text-orange-900" />
             <Badge icon="verified" label="Verified" color="bg-green-100 text-green-900" />
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
      className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${active ? 'border-primary bg-primary/5 shadow-md scale-105' : 'border-transparent bg-surface-container-low opacity-60 hover:opacity-100'}`}
    >
      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </button>
  );
}

function Badge({ icon, label, color }: any) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${color}`}>
      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      {label}
    </div>
  );
}
