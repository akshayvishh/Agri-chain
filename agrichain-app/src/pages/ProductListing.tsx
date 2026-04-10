import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductListing() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-surface-container-lowest p-12 rounded-[3rem] shadow-2xl text-center max-w-lg border border-outline-variant/10"
        >
          <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="material-symbols-outlined text-5xl"
            >
              check_circle
            </motion.span>
          </div>
          <h2 className="text-4xl font-black text-primary tracking-tighter mb-4">Listing Successful!</h2>
          <p className="text-on-surface-variant font-medium mb-8 leading-relaxed">
            Your Premium Harvest is now live on the global marketplace. Digital agronomists and bulk buyers can now view and negotiate for your batch.
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={() => setSubmitted(false)} className="w-full bg-primary text-white py-4 rounded-2xl font-black hover:opacity-90 transition-all">
              List Another Crop
            </button>
            <button className="w-full bg-surface-container-high text-primary py-4 rounded-2xl font-black hover:bg-surface-container-highest transition-all">
              View My Inventory
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <main className="max-w-3xl mx-auto px-6 py-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary mb-4">List Your Harvest</h1>
          <p className="text-lg text-on-surface-variant font-medium">Follow the simple steps to reach buyers globally.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-16">
          <Section step={1} title="Snap a Photo">
            <div className="group relative aspect-[16/9] w-full bg-surface-container-low rounded-[2rem] border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-high transition-all overflow-hidden">
              <div className="bg-primary-container p-6 rounded-full mb-4 group-active:scale-90 transition-transform shadow-lg">
                <span className="material-symbols-outlined text-5xl text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>add_a_photo</span>
              </div>
              <span className="font-headline font-bold text-xl text-primary">Tap to take photo</span>
              <span className="text-sm text-on-surface-variant mt-2">Show the freshness of your crop</span>
            </div>
          </Section>

          <Section step={2} title="What are you selling?">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Crop Name" placeholder="e.g. Organic Wheat" hasVoice />
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1 opacity-60">Category</label>
                <select className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:border-primary rounded-t-xl p-5 text-xl font-headline font-semibold transition-all outline-none appearance-none">
                  <option>Grains</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Legumes</option>
                </select>
              </div>
            </div>
          </Section>

          <Section step={3} title="Price & Quantity">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BentoInput icon="payments" label="Price per kg" placeholder="₹ 0.00" color="text-tertiary" />
              <BentoInput icon="inventory_2" label="Min. Order (MOQ)" placeholder="50" color="text-primary-container" />
            </div>
          </Section>

          <Section step={4} title="Your Location">
            <div className="bg-surface-container-low rounded-[2rem] overflow-hidden p-2 border border-outline-variant/10 shadow-sm">
              <div className="aspect-[21/9] w-full rounded-[1.5rem] bg-surface-variant relative overflow-hidden">
                <img className="w-full h-full object-cover opacity-60 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJGnLIA6mAauIk6fX-MHH4NKjIip_OS-phAiOeqAk5hAInmblgghrpYpOdcXFDrH161OINVc8rOan-wjNpyb6Gt6k58pGHj2hZV51eCkRjZ5I2TEsfYIgOQHCjm9UbAD8y_YACdCtLZe12juPcBXAlQuxF_C6faam3ezk6_a1E200q5mr7p2tpP10Xzo0PuHvilIzYrvl0TY4JRhk3wxtQd1525CQbCqNiJywUbQQvC5Ca_5OEuPF9NoFYrDVYhwb1HJ4z6JhEBJC" alt="Map" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 text-primary font-black"
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                    Auto-Detect My Farm
                  </motion.button>
                </div>
              </div>
              <div className="p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant opacity-60">location_on</span>
                <input className="bg-transparent border-none w-full font-bold text-primary focus:ring-0 outline-none" placeholder="Or enter village/district name..." type="text"/>
              </div>
            </div>
          </Section>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-8"
          >
            <button className="w-full bg-primary text-white py-8 rounded-[2rem] text-3xl font-black font-headline tracking-tighter shadow-2xl flex items-center justify-center gap-4 transition-all" type="submit">
              List Product Now
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </button>
          </motion.div>
        </form>
      </main>
    </div>
  );
}

function Section({ step, title, children }: any) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <span className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">{step}</span>
        <h2 className="font-headline text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function InputGroup({ label, placeholder, hasVoice = false }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1 opacity-60">{label}</label>
      <div className="relative flex items-center">
        <input 
          className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:border-primary rounded-t-xl p-5 text-xl font-headline font-semibold transition-all outline-none" 
          placeholder={placeholder} 
          type="text"
        />
        {hasVoice && (
          <button className="absolute right-4 p-2 bg-primary-container text-white rounded-full shadow-lg active:scale-90 transition-all">
            <span className="material-symbols-outlined text-2xl">mic</span>
          </button>
        )}
      </div>
    </div>
  );
}

function BentoInput({ icon, label, placeholder, color }: any) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 space-y-4">
      <div className="flex justify-between items-center">
        <span className={`material-symbols-outlined ${color} text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">{label}</span>
      </div>
      <input className="w-full text-5xl font-black font-headline bg-transparent border-none focus:ring-0 p-0 outline-none text-primary" placeholder={placeholder} type="number"/>
    </div>
  );
}
