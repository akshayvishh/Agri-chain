import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FarmerDashboard() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-6 py-8 pb-32">
        {/* Dashboard Header */}
        <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-2"
            >
              Farmer Dashboard
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant font-medium"
            >
              Monitoring your harvest and market trends in real-time.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <Link to="/list" className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg active:scale-95">
              <span className="material-symbols-outlined text-sm">add</span> New Listing
            </Link>
          </motion.div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Quick Stats - Left Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-low rounded-3xl p-6 flex flex-col justify-between h-full border border-outline-variant/10">
              <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Quick Stats
              </h2>
              <div className="space-y-4">
                <StatCard label="Total Sales" value="₹42,850" icon="payments" iconBg="bg-primary-fixed" />
                <StatCard label="Active Orders" value="12" icon="inventory_2" iconBg="bg-secondary-container" />
                <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-1">Market Trends</p>
                      <p className="text-xl font-bold text-primary">+8.4%</p>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      <Bar h={16} />
                      <Bar h={24} />
                      <Bar h={12} />
                      <Bar h={32} />
                      <Bar h={40} />
                      <Bar h={48} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Insights - Middle Column (Span 8) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-8 bg-primary rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-2">Market Insights</h2>
                  <p className="text-on-primary-container font-medium opacity-80">Real-time local price fluctuations</p>
                </div>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm pulse" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Live Updates
                </span>
              </div>
              <div className="h-64 flex items-end gap-4 md:gap-8 px-4 overflow-hidden">
                <ChartBar height="60%" label="Wheat" />
                <ChartBar height="85%" label="Corn" delay={0.1} />
                <ChartBar height="45%" label="Soy" delay={0.2} />
                <ChartBar height="95%" label="Barley" delay={0.3} />
                <ChartBar height="55%" label="Oats" delay={0.4} />
              </div>
            </div>
          </motion.div>

          {/* My Products */}
          <div className="lg:col-span-12 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-primary">My Products</h2>
              <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                View All <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="flex overflow-x-auto gap-6 no-scrollbar pb-6 -mx-2 px-2">
              <ProductCard 
                name="Golden Wheat" 
                price="₹280/t" 
                moq="5t" 
                grade="Grade A" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDGO8Xge_6KcSSHH8rGGLtGYbH1hJpgND2w21uJgMOOBiCWUSr3zWRFz3gg3AuGXMJn89tbHUCV0XKuJKD1IYfQ88sX3Gqa0ZceCDAV8pomeCmIwZovURC6C4TZiNRzxMn_mQgHK_iilV5-sMyxphV8g2yPOy7CO0Kt18PjmtMbjQ1wen-0MR5MoJdxe-rGjwlkA7YwFkvLOVW_b9qSoMZFcKjIeYOdtuMRHMV3voFjcxY6sJF7nsP_H-ConhFOO26UpoCIXgyEfyZA" 
              />
              <ProductCard 
                name="Sweet Yellow Corn" 
                price="₹195/t" 
                moq="10t" 
                grade="Premium" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuAJfRAJ6DwiqCqaUEEf0CJizsVmWuGcm6AwL-JP2ahZQGQMzRPyehh2YeByJZCFGI7FUn3tnjMt0kofSo5zWDO4QmC1BVZOPVX-T2-8PDj8cSiFHLSgPgIEU7GjSOJrf9OeGv_kLhEwtzc702xuXMRxJPWZwIVZ-vH7DnA6GJgPriGWmvF9ujAg4YT8jtu15m1jFNpNQMvXSphwADkWyF1z852lIGEezIA4e0v-l5A5NLZM4VM34SHeifOueSyXw7LSnwypowLx8K3Z" 
              />
              <ProductCard 
                name="Organic Soybeans" 
                price="₹410/t" 
                moq="2t" 
                grade="Export" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcy9KO0seY-pf12upjapJkClru_-NLFWC5-GyiCwFXNaB1F4MitU12wKGBNTU-WPd-S8e8dzseO9oQgRrisDUUrdlmKWKPi1uZXpQ25fek7rYb6ft21bhYJYLq2EIM9RILtKb5NuwD1U20RXejw45dWL_l7ZAIU9VcOgAwN2MUsBGi7y_S1tsQA1E--trWO703BwV-UBzUligKEUCQJzu2XPDMeN3yQX5iDUxwE4HvapitmcdxwwvpPtqrpmSlF_GO71U3i-G5qi7" 
              />
              <Link to="/list" className="flex-shrink-0 w-72 border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center p-6 text-on-surface-variant/40 group hover:border-primary hover:text-primary transition-all cursor-pointer bg-surface-container-low/30 hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-4xl mb-2">add_circle</span>
                <p className="font-bold">Add New Product</p>
              </Link>
            </div>
          </div>

          {/* Order Requests */}
          <div className="lg:col-span-12 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-primary">Pending Requests</h2>
              <Link to="/negotiate" className="text-primary font-bold text-sm underline decoration-primary-fixed decoration-2 hover:opacity-80 transition-opacity">Manage All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OrderRequest 
                buyer="Global Wholesalers Ltd." 
                request="50t Wheat" 
                amount="₹14,000" 
                initials="GW" 
                initialsBg="bg-primary/5" 
              />
              <OrderRequest 
                buyer="Nature's Market Inc." 
                request="12t Corn" 
                amount="₹2,340" 
                initials="NM" 
                initialsBg="bg-secondary-container/30" 
              />
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <Link to="/list" className="fixed right-6 bottom-24 md:bottom-12 z-40 bg-primary text-white w-16 h-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all group">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
      </Link>
    </div>
  );
}

function StatCard({ label, value, icon, iconBg }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 flex items-center justify-between shadow-sm border border-outline-variant/10">
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 opacity-60">{label}</p>
        <p className="text-2xl font-black text-primary">{value}</p>
      </div>
      <div className={`${iconBg} p-3 rounded-xl shadow-sm text-primary`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
  );
}

function Bar({ h }: any) {
  return <div className="w-1 bg-primary rounded-full transition-all duration-500" style={{ height: h }}></div>;
}

function ChartBar({ height, label, delay = 0 }: any) {
  return (
    <div className="flex-1 flex flex-col items-center justify-end h-full group">
       <motion.div 
        initial={{ height: 0 }}
        animate={{ height }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="w-full bg-white/20 rounded-t-2xl relative hover:bg-white/40 transition-colors"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest shadow-xl">
          {label}
        </div>
      </motion.div>
    </div>
  );
}

function ProductCard({ name, price, moq, grade, img }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex-shrink-0 w-80 bg-surface-container-lowest rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all border border-outline-variant/10"
    >
      <div className="h-48 w-full overflow-hidden relative">
        <img alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={img} />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-md">
          {grade}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-primary mb-4">{name}</h3>
        <div className="flex justify-between items-center text-on-surface-variant font-bold text-sm bg-surface-container-low p-4 rounded-xl">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-black">Price</span>
            <span className="text-primary font-black">{price}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-black">MOQ</span>
            <span className="text-primary font-black">{moq}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OrderRequest({ buyer, request, amount, initials, initialsBg }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm flex flex-col justify-between border border-outline-variant/10 hover:shadow-xl transition-all group">
      <div className="flex justify-between mb-8">
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 ${initialsBg} rounded-2xl flex items-center justify-center font-black text-primary text-xl border border-primary/10`}>{initials}</div>
          <div>
            <h4 className="font-black text-primary text-lg leading-tight">{buyer}</h4>
            <p className="text-sm font-bold text-on-surface-variant opacity-60 mt-1">{request}</p>
          </div>
        </div>
        <p className="text-2xl font-black text-primary">{amount}</p>
      </div>
      <div className="flex gap-3">
        <button className="flex-[2] bg-primary text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Reach Decision
        </button>
        <button className="flex-1 bg-surface-container-high text-on-surface-variant py-4 rounded-xl font-black flex items-center justify-center hover:bg-error/10 hover:text-error transition-all active:scale-95">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
}
