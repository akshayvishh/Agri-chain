import { useState } from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { name: "Premium Durum Wheat", location: "Heartland Estate, NE", price: "₹420", tons: "120", moisture: "11.4%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL49mAo3cFxz16ytucwx8diLNuWjRdgIRrCxH3jgcPC18tFPPPPRUxnYA2vPg_DCHs_nVYAFtjw-QLt4Xh1Tx82ib9eIF00yA0FBVjS6vKSEodgC1BxVzvAdXrBbxyRbeJA5i7JDRe8miFCKUnyTgWEmwLTn9GK7ZISAyggcAl9cN1ViThpoblLU7Yrb3ZEj79IHoPVnFAWzQ3dDB1nE8o64IRo98xMOp9QxIbk5GLFju2B_jbdhx_l9ABc8tAqDGgHTV_1pUYw6x1" },
  { name: "Organic Soybeans", location: "Riverview Collective, IA", price: "₹610", tons: "45", moisture: "N/A", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWI5uv4Cr-5_4Ji-5HMWFEUCb1L7kZKQ7aoESJcOx4CLBbRV9T3JZKEc_W7RuPu_aFa4RgchRJM3vaASTfVhxlKwZkaZRrideej6SSRkZTZt7r7ZN1PbVS5hewwUS9hN4wGziJrHkERXukN7ZesNhtmicF2PyvBpz1edN7RtUNjPJvelLpLcANZWL49weZaDGBPI-yRdUXUnIY-peYqvYtRXLm66p-MPTM-J-uDm7Ax2BiOFA3_ARZUsti5IqZRxlxMj6YpoYUK3uZ" },
  { name: "Yellow Dent Corn", location: "Prairie Sun Farms, KS", price: "₹385", tons: "210", moisture: "14.2%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGSqqvgnzx9GwPKiKMzjU6OXkSIFuhXVG6BjkwLixdiq9L_N6cZHHzh2eYeqZcTJ470DnmSFeFk2MHMgVoNrWas6hK2-r8uXEChRk_avo-KADK0ceEfjBUV1JQuYn9Z8yLF-vjIVPN6yvsOrclqgv9CGqFltMeoczv7SHp8Nio4AaRS1y-_v9DqcwwAfHptLoT2gf9bSihsA1kkuOIF-aUHUModmpIcpvSAzXbVmvadg7Zx823b4QcnQQPZQDoAiNwlRUXU6VolBAM" }
];

export default function BuyerDashboard() {
  const [search, setSearch] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-6 py-10 space-y-12">
        {/* Active Orders Track */}
        <section className="bg-surface-container-low rounded-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-primary">Active Orders</h2>
              <p className="text-on-surface-variant font-medium">Real-time supply chain transparency.</p>
            </div>
            <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all">
              View Logistics Map <span className="material-symbols-outlined text-sm">map</span>
            </button>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 space-y-8">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-bold text-primary mb-2">
                <span>ORDER #AC-9842 (Bulk Wheat)</span>
                <span className="text-on-primary-container">In Transit • Expected Friday</span>
              </div>
              {/* Tracking Visualizer */}
              <div className="relative flex justify-between items-center w-full px-4">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-primary-container -translate-y-1/2 transition-all duration-1000"></div>
                
                <TrackingStep icon="agriculture" label="Farm" completed />
                <TrackingStep icon="inventory_2" label="Storage" completed />
                <TrackingStep icon="local_shipping" label="Transit" active />
                <TrackingStep icon="person" label="Buyer" />
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tighter text-primary">Browse Marketplace</h2>
              <p className="text-on-surface-variant mt-2 text-lg">Secure bulk procurement directly from verified regional producers.</p>
            </div>
            <div className="bg-surface-container-high px-4 py-3 rounded-xl flex items-center gap-3 w-full md:w-80 border border-outline-variant/10">
              <span className="material-symbols-outlined text-outline">search</span>
              <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-on-surface w-full outline-none" 
                placeholder="Search crops, farms..." 
                type="text"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <FilterButton icon="location_on" label="Midwest" />
            <FilterButton icon="potted_plant" label="Grains" />
            <FilterButton icon="payments" label="₹2k - ₹10k" />
            <button 
              onClick={() => setSearch('')}
              className="text-primary-container font-bold text-sm underline hover:text-primary transition-colors"
            >
              Clear all filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p, i) => (
              <MarketCard key={i} {...p} />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center text-on-surface-variant font-medium">
                No products found matching your search.
              </div>
            )}
          </div>
        </section>

        {/* Recommended Sellers */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight text-primary">Recommended Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold uppercase tracking-widest">Top Rated Supplier</span>
                </div>
                <h3 className="text-3xl font-bold leading-tight">Anderson & Sons Grain Logistics</h3>
                <p className="mt-4 opacity-80 max-w-sm">Consistent 99.8% reliability score based on 150+ bulk transactions this year. Specialized in cold-chain grain storage.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img className="w-14 h-14 rounded-full object-cover border-2 border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhKCbKGOvEmH-xTEjE7nKadPuDvr9wP-fCxaRmwrlfFidlfR3wg5-6cXJm9AyYnRbJMM_OOKK9MNogQJcOoOU80kGhiBx3Uv0eTijiCGc7aCwnWD16GafT2kQoeQq2hBfW8il3IYYaotYfoEohJXIJTOn-7O6kNkibmbKWXlTw1RhMtFsIb2hxd7GMiOYAP21HODKmftv4OOgw4cL7-F__81ZHO9kmzWDLUXBLNEMtcxXS9mO7SaljHRwGa4-IrDqafcri0lAFiAuJ" alt="Elias Anderson" />
                <div>
                  <p className="font-bold">Elias Anderson</p>
                  <p className="text-sm opacity-60">Verified Producer Since 2018</p>
                </div>
              </div>
            </motion.div>
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center text-center md:text-left">
              <p className="text-primary font-black text-6xl mb-2">4.9</p>
              <div className="flex justify-center md:justify-start text-yellow-600 mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="font-bold text-primary uppercase text-[10px] tracking-widest opacity-60">Avg Supplier Reliability</p>
            </div>
            <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <h4 className="text-on-secondary-container font-black text-xl">Rapid Delivery</h4>
                <p className="text-on-secondary-container/80 text-sm mt-2">Next-day logistics available for Midwest regional hubs.</p>
              </div>
              <motion.span 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="material-symbols-outlined text-9xl absolute -bottom-6 -right-6 text-primary opacity-10 group-hover:opacity-20 transition-opacity"
              >
                bolt
              </motion.span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function TrackingStep({ icon, label, completed = false, active = false }: any) {
  return (
    <div className="z-10 flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${completed ? 'bg-primary text-white' : active ? 'bg-primary-container text-white border-4 border-surface-container-lowest scale-110 shadow-lg' : 'bg-surface-container-high text-on-surface-variant'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: completed || active ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${completed || active ? 'text-primary' : 'text-on-surface-variant'}`}>{label}</span>
    </div>
  );
}

function FilterButton({ icon, label }: any) {
  return (
    <button className="bg-surface-container-low px-5 py-2.5 rounded-full font-semibold text-primary flex items-center gap-2 hover:bg-surface-container-high transition-colors border border-outline-variant/10">
      <span className="material-symbols-outlined text-sm">{icon}</span> {label}
    </button>
  );
}

function MarketCard({ name, location, price, tons, moisture, img }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/10"
    >
      <div className="h-48 overflow-hidden relative">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} alt={name} />
        <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 backdrop-blur-sm">
          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Farmer
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-primary truncate max-w-[180px]">{name}</h3>
            <p className="text-on-surface-variant text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span> {location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-primary">{price}<span className="text-sm font-medium">/ton</span></p>
          </div>
        </div>
        <div className="bg-surface-container-low p-3 rounded-lg flex justify-around text-center">
          <div>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Available</p>
            <p className="font-bold text-primary">{tons} Tons</p>
          </div>
          <div className="w-[1px] bg-outline-variant/30"></div>
          <div>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">{moisture !== 'N/A' ? 'Moisture' : 'Grade'}</p>
            <p className="font-bold text-primary">{moisture !== 'N/A' ? moisture : 'A-1'}</p>
          </div>
        </div>
        <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">Negotiate Batch</button>
      </div>
    </motion.div>
  );
}
