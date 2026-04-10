import { motion } from 'framer-motion';

export default function TrackingPage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <main className="max-w-screen-xl mx-auto px-6 py-8 md:py-12">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="bg-primary-container text-on-primary-container text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm">Batch #AC-88921</span>
              <span className="flex items-center gap-1 text-primary font-black text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Blockchain Verified
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-primary">Organic Arabica Bulk</h1>
            <p className="text-on-surface-variant max-w-lg leading-relaxed font-medium opacity-80">Origin: Highlands Co-operative. Destination: Coastal Roastery HQ. Journey monitoring active via satellite telemetry.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <button className="bg-surface-container-low hover:bg-surface-container-high text-primary px-8 py-4 rounded-2xl font-black flex items-center gap-2 transition-all border border-outline-variant/10 active:scale-95">
              <span className="material-symbols-outlined">description</span>
              View Manifest
            </button>
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 transition-all shadow-xl shadow-primary/20 active:scale-95">
              <span className="material-symbols-outlined">share</span>
              Share Status
            </button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Map & Driver */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-surface-container shadow-2xl relative border-4 border-white/50"
            >
              <img className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD85Lo6hUCIA6Q13C5gzUabtIXOXKaHnabqgdrlE9M_77rf9BAtQVbF04IQT4eNeN02WF5ddKi-7FTA31UotneClsYY9A6WwqsbnqtvKTGwM1xoqxO29QdB3uoSiNr8Gn0wy4VwZr2jLqFOzC_o-HBMC3u1J1NWkxTWi6yzHnVd0sxsUpt59N2U252cBI4fOJJ6ugGmn1kLmjXNX9wuxKL1VE-AdTWTf2MjloBOPsGdOlA9eH2X8mJnRbxpO5ETtXBfPec9tfbcPm5o" alt="Map" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-1">Current Coordinates</p>
                  <p className="font-headline font-black text-xl text-primary tracking-tight">1.2921° S, 36.8219° E</p>
                </div>
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="material-symbols-outlined">navigation</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm space-y-8 border border-outline-variant/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 rounded-2xl bg-surface-variant overflow-hidden ring-4 ring-primary-fixed/30">
                    <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQIwWqM8LbqXBfM0BM6etZP2lF5nrnWFsci96O4uVUXplku6Xjor3Q_9tFeICcHOeCtsZqathYZO5rXPgaID7bIg8g36f6foxeGMPNJqkiO0gT66hilLXNt2wNKhDejwpZYUSjkhw7VriycSkb-wvGNK6kN1wFauOq7xwYfwvcseFYoR6o9n3ROwsDxFbX67xKCvTa6QrmBKtUAkWi-K6qlzOyIN3Bb67qE7Tod3XeChHaDUZUjBmihIv-bezJ_ZyfwoLhnWa7w_N8" alt="Driver" />
                  </div>
                  <div>
                    <h3 className="font-headline font-black text-xl text-primary">Samuel Mwangi</h3>
                    <p className="text-sm text-on-surface-variant font-bold opacity-60">Logistics Specialist · 12yr exp</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <IconBtn icon="call" />
                  <IconBtn icon="chat_bubble" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Vehicle" value="Volvo FH16 (Electric)" />
                <StatCard label="Plate" value="KCA 442X" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-[3rem] p-8 md:p-16 border border-outline-variant/5">
            <h2 className="text-3xl font-black text-primary mb-16 tracking-tight">Journey Logistics</h2>
            <div className="relative">
              <div className="absolute left-7 top-2 bottom-2 w-1 bg-gradient-to-b from-primary to-surface-container-high rounded-full opacity-20"></div>
              
              <TimelineItem 
                icon="check_circle" 
                title="Farmer Dispatched" 
                time="Oct 12 · 09:15 AM" 
                desc="Originating from Murang’a Highland Estate. Quality inspected and sealed by AgriChain field agent."
                verified="Identity & Quantity Verified"
                active
              />
              
              <TimelineItem 
                icon="warehouse" 
                title="At Local Storage Hub" 
                time="Current Status" 
                desc="Arrived at Nairobi Central Consolidation Point. Currently undergoing humidity stabilization."
                isCurrent
                stats={[
                  { icon: 'thermostat', label: '18.5°C' },
                  { icon: 'humidity_low', label: '12% Humidity' }
                ]}
                verified="Storage Conditions Verified"
              />

              <TimelineItem 
                icon="local_shipping" 
                title="In Transit" 
                time="Scheduled: Oct 14" 
                desc="Direct freight to Mombasa Port Terminal. Estimated travel time: 8 hours via expressway."
                disabled
              />

              <TimelineItem 
                icon="handshake" 
                title="Buyer Delivery" 
                time="Estimated: Oct 15" 
                desc="Final handover to Coastal Roastery HQ. Multi-sig blockchain confirmation required upon arrival."
                disabled
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function IconBtn({ icon }: any) {
  return (
    <button className="h-12 w-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center hover:opacity-80 transition-all shadow-sm active:scale-90">
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </button>
  );
}

function StatCard({ label, value }: any) {
  return (
    <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10">
      <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1">{label}</p>
      <p className="font-headline font-black text-sm text-primary">{value}</p>
    </div>
  );
}

function TimelineItem({ icon, title, time, desc, active, isCurrent, disabled, stats, verified }: any) {
  return (
    <div className={`relative pl-20 pb-16 ${disabled ? 'opacity-40' : 'opacity-100'}`}>
      <div className={`absolute left-0 top-0 h-14 w-14 rounded-full flex items-center justify-center z-10 shadow-2xl ${active ? 'bg-primary text-white border-4 border-surface' : isCurrent ? 'bg-primary-container text-white pulse-soft' : 'bg-surface-container-highest text-outline'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: active || isCurrent ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className={`text-2xl font-black ${active || isCurrent ? 'text-primary' : 'text-outline'} tracking-tight`}>{title}</h3>
          <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] ${isCurrent ? 'bg-primary text-white' : 'bg-surface-container text-outline'}`}>{time}</span>
        </div>
        <div className={`p-8 bg-white/80 rounded-[2rem] border border-outline-variant/10 ${isCurrent ? 'shadow-2xl ring-2 ring-primary/5 border-l-8 border-l-primary' : 'shadow-sm'}`}>
          <p className="text-on-surface font-medium leading-relaxed opacity-80">{desc}</p>
          {stats && (
            <div className="mt-6 flex gap-6">
              {stats.map((s: any, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-xl border border-outline-variant/5">
                  <span className="material-symbols-outlined text-primary text-lg">{s.icon}</span>
                  <span className="text-sm font-black text-primary">{s.label}</span>
                </div>
              ))}
            </div>
          )}
          {verified && (
            <div className="mt-6 pt-6 border-t border-surface-container-high flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              {verified}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
