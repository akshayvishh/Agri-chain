import { motion } from 'framer-motion';

export default function NegotiationPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <main className="pt-8 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Order ID: AC-7742-BW</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Bulk Premium Wheat Purchase</h1>
              <p className="text-on-surface-variant mt-2 text-lg">Negotiating with <span className="font-bold text-primary underline underline-offset-4 decoration-secondary-fixed-dim">Sukhdev Singh Farms</span></p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary-fixed">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7_qR_bfhXL30LteGVUy7F2nWWNYiD3lMqGwu0pyePCX76GkjZzTYfxTdNO7BPwVoPiA4qwO4Wd4HDw4fX925_dG1Zc80IHZx4iP9jbtkDmKKkT3GfQN7_ZAnSxAFPc6FupSzn5xU9c8TgI4cgE4RYciauthPb4XvX9WpCXpe3sdkZXtXxD5RkaRXPQYW9oUWuK9gIVKMTLisBpjC6H0tEIXvFvFTUQGKsuFzHNgFQ5ZGfsE9fJh0OH7Z7UD78fqvR9jrwiCz1HdP_" alt="Farmer" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-primary">Sukhdev Singh</span>
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">Premium Producer • 4.98 Rating</span>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Negotiation Hub */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bento Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Indicator icon="calendar_today" label="Harvest Date" value="Oct 12, 2023" />
              <Indicator icon="workspace_premium" label="Quality Grade" value="Grade A-1" />
              <Indicator icon="humidity_low" label="Moisture" value="9.2% Level" />
            </div>

            {/* Chat History */}
            <section className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10">
              <h3 className="text-xl font-extrabold text-primary mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">forum</span>
                Negotiation History
              </h3>
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 mb-8 custom-scrollbar">
                <Message 
                  text="Greetings. For 120 Tons of my Sharbati wheat, I can offer ₹440/ton given the current market surge." 
                  author="Farmer Sukhdev" 
                  time="10:15 AM"
                />
                <Message 
                  text="Hello Sukhdev. We appreciate the quality. However, our volume is substantial. Could you consider ₹410/ton?" 
                  author="You" 
                  time="10:42 AM" 
                  isMe 
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-secondary-container text-on-secondary-container p-6 rounded-2xl rounded-tl-none shadow-sm relative overflow-hidden"
                >
                  <span className="text-[10px] uppercase font-black mb-2 block tracking-widest opacity-60">New Offer Received</span>
                  <p className="text-2xl font-black">₹420 <span className="text-sm font-medium opacity-60">per ton</span></p>
                  <p className="text-sm mt-3 font-medium italic opacity-80">"This is my final best price for A-1 grade. This includes storage at the hub for 5 days."</p>
                </motion.div>
              </div>

              {/* Counter Input */}
              <div className="bg-surface-container-high rounded-2xl p-6 border border-outline-variant/10">
                <label className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Your Counter Offer (₹)</label>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">₹</span>
                    <input 
                      className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary rounded-xl pl-8 py-4 font-headline font-bold text-lg text-primary outline-none" 
                      placeholder="415" 
                      type="number"
                    />
                  </div>
                  <button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg active:scale-95">
                    <span className="material-symbols-outlined text-sm">send</span>
                    Propose
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <section className="bg-primary text-white rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="p-8 pb-4">
                  <h3 className="text-2xl font-black font-headline tracking-tight mb-6">Order Summary</h3>
                  <div className="flex justify-between items-center mb-8 bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-widest opacity-60">Quantity</p>
                      <p className="text-3xl font-black">120 <span className="text-sm font-medium opacity-60">Tons</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase font-bold tracking-widest opacity-60">Offer Rate</p>
                      <p className="text-3xl font-black">₹420 <span className="text-sm font-medium opacity-60">/Ton</span></p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <SummaryRow label="Base Commodity Price" value="₹50,400" />
                    <SummaryRow label="Logistics & Handling" value="₹4,200" />
                    <SummaryRow label="Platform Fee (1.5%)" value="₹756" />
                    <SummaryRow label="Taxes (GST 5%)" value="₹2,520" />
                  </div>
                </div>
                <div className="bg-primary-container p-8">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-lg font-bold">Total Amount Payable</span>
                    <div className="text-right">
                      <span className="text-3xl font-black">₹57,876</span>
                      <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Inclusive of Taxes</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim transition-all py-5 rounded-2xl font-black font-headline text-xl shadow-lg flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Confirm Order
                    </button>
                  </div>
                </div>
              </section>

              <div className="bg-surface-container-low p-6 rounded-2xl relative overflow-hidden group border border-outline-variant/10">
                <div className="relative z-10">
                  <h4 className="text-primary font-bold flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Dispatch Location
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">
                    Agri-Hub Terminal 4, Hoshiarpur District, Punjab.<br/>
                    <span className="font-bold text-primary">Est. Arrival: 4-6 Business Days</span>
                  </p>
                </div>
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-9xl">local_shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Indicator({ icon, label, value }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center text-center border border-outline-variant/10 shadow-sm"
    >
      <span className="material-symbols-outlined text-primary mb-3 text-3xl">{icon}</span>
      <span className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1 opacity-60">{label}</span>
      <span className="text-primary font-black">{value}</span>
    </motion.div>
  );
}

function Message({ text, author, time, isMe = false }: any) {
  return (
    <div className={`flex flex-col ${isMe ? 'items-end ml-auto' : 'items-start'} max-w-[85%]`}>
      <div className={`${isMe ? 'bg-primary text-white' : 'bg-surface-container-highest text-on-surface'} p-4 rounded-2xl ${isMe ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm`}>
        <p className="text-sm font-medium leading-relaxed">{text}</p>
      </div>
      <span className="text-[9px] text-on-surface-variant mt-1 px-1 uppercase font-bold tracking-widest opacity-60">
        {author} • {time}
      </span>
    </div>
  );
}

function SummaryRow({ label, value }: any) {
  return (
    <div className="flex justify-between text-sm">
      <span className="opacity-60 font-medium">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
