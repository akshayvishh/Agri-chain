import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary px-4 md:px-6 pt-24 pb-48 md:pb-60">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 mix-blend-overlay"
          >
            <img 
              alt="Sustainable farm" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1KvoICcwZq2J84K4N3oo97uTr4RDDe4BRW5-cfejgfuRxmtm0re62HskcNSPPOKmMy9S7C4cvUigZYYehGDCHs2UufyP8PnsoR7cXVbWyvfVuJql9w9VSLCcB9Tun2b7sudexG8FMG__X9ic53gn2TaLYKMsXcmbF2Z-nbMsLrsOFGkie1lcWmxo4Gxu7yxd2NWqtLVS5_jsCCEyn2Nks_bpBZwP9Vyc9FvM_d3CMzEvrWS6Rxq8OT_E-PHc4JNGrna5Lzgs6CI2" 
            />
          </motion.div>
          <div className="relative z-10 max-w-screen-xl mx-auto w-full">
            <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-surface leading-[1.05] tracking-tighter"
              >
                Empowering Rural <span className="text-primary-fixed-dim">Prosperity</span> through Tech.
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-2xl text-surface/80 max-w-2xl mx-auto leading-relaxed font-medium px-4"
              >
                AgriChain connects farmers directly to global markets with blockchain transparency, ensuring fair value and sustainable growth.
              </motion.p>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center px-6"
              >
                <Link to="/login" className="w-full sm:w-auto px-10 py-5 bg-surface text-primary font-black rounded-full text-lg hover:scale-105 transition-all active:scale-95 text-center shadow-2xl">
                  Get Started
                </Link>
                <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-surface border-2 border-surface font-black rounded-full text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined fill-1">play_circle</span>
                  Watch Our Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Role Selectors */}
        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 -mt-32 md:-mt-40 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <RoleCard 
              icon="agriculture"
              title="I am a Farmer"
              description="Direct access to buyers, smart weather alerts, and instant blockchain-secured payments for your crops."
              linkText="Join the Cooperative"
              className="bg-surface-container-lowest"
              iconBg="bg-primary/5"
              iconColor="text-primary"
            />
            <RoleCard 
              icon="shopping_basket"
              title="I am a Buyer"
              description="Source high-quality produce with full traceability. No middlemen, no hidden costs, just pure quality."
              linkText="Browse Marketplace"
              className="bg-surface-container-low"
              iconBg="bg-secondary-container/30"
              iconColor="text-secondary-fixed-dim"
            />
            <RoleCard 
              icon="school"
              title="I want to Learn"
              description="Master modern sustainable farming techniques and digital commerce through our verified agronomy courses."
              linkText="Explore Hub"
              className="bg-tertiary text-white shadow-tertiary/20"
              iconBg="bg-white/10"
              iconColor="text-white"
              isDark
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-screen-2xl mx-auto px-6 py-24 md:py-40">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-10">
            <div className="max-w-3xl">
              <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 block bg-primary-container/20 w-fit px-4 py-1.5 rounded-full">The AgriChain Difference</span>
              <h2 className="text-4xl md:text-7xl font-black text-primary leading-[1.1] tracking-tighter">Radical Transparency. <br className="hidden md:block" />Community Driven.</h2>
            </div>
            <div className="max-w-sm">
              <p className="text-on-surface-variant text-lg md:text-xl font-medium leading-relaxed opacity-80">We use technology to shorten the distance between the soil and the table, returning power to the producers.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard icon="verified_user" title="Fair Pricing" description="Our blockchain ledger ensures that farmers receive the full market value without exploitative middleman fees." />
            <BenefitCard icon="hub" title="Traceability" description="Every crop batch is tagged and tracked. Buyers know exactly where their food was grown and by whom." className="lg:mt-12" />
            <BenefitCard icon="groups" title="Community" description="Access local cooperatives to share resources, machinery, and logistical support through our digital hub." />
            <BenefitCard icon="eco" title="Sustainability" description="Promoting regenerative agriculture methods that preserve the soil for the next generation of rural livelihoods." className="lg:mt-12" />
          </div>
        </section>

        {/* Callout Section */}
        <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pb-32">
          <div className="rounded-[3rem] overflow-hidden relative h-[500px] md:h-[600px] shadow-2xl group">
            <img alt="Farmers" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDimqV70uEeB9w74Ne8lRA0MlD1tmTm87GpCe8j9UdsI82WbKs0u069H9XXTiKSRz7BT3u_7hxXAPel8r7g8p23H_xhsdm7lRtJvuGEIBq1bAF4pYC5I0on3RENahS2vZo54l0ESEFusuXoSNN23zbk5R8Y4LnRqRhTmV_dbiBcmuQn6KRmZp9aqg0TANBaWlFwZp-Z01ej5jJyPl9sNl-Dkkmk76koVt_86XPn_Suazw-lijaGyokHC6Q2VJ3LkKiY9mw1OfX-oGZ3" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8 md:p-16">
              <div className="max-w-2xl space-y-6">
                <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">Cultivating the Future of Food</h3>
                <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed">Join over 50,000 farmers who have already transitioned to a more profitable, digital future with AgriChain.</p>
                <div className="pt-4">
                  <Link to="/login" className="inline-block text-center w-full sm:w-auto px-12 py-5 bg-primary-fixed text-primary font-black rounded-full text-xl hover:scale-110 active:scale-95 transition-all shadow-2xl">
                    Register Your Farm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function RoleCard({ icon, title, description, linkText, className, iconBg, iconColor, isDark = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className={`${className} p-8 md:p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group border border-outline-variant/5 flex flex-col justify-between min-h-[400px]`}
    >
      <div>
        <div className={`w-20 h-20 ${iconBg} ${iconColor} rounded-[2rem] flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform shadow-sm`}>
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
        <h3 className={`text-3xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-primary'} mb-6 tracking-tight`}>{title}</h3>
        <p className={`text-lg ${isDark ? 'text-white/70' : 'text-on-surface-variant'} mb-8 leading-relaxed font-medium opacity-80`}>{description}</p>
      </div>
      <a className={`inline-flex items-center gap-2 ${isDark ? 'text-tertiary-fixed' : 'text-primary'} font-black text-lg hover:gap-4 transition-all w-fit`} href="#">
        {linkText} <span className="material-symbols-outlined font-black">arrow_forward</span>
      </a>
    </motion.div>
  );
}

function BenefitCard({ icon, title, description, className = "" }: any) {
  return (
    <div className={`bg-surface-container-low p-10 rounded-[2.5rem] space-y-8 flex flex-col border border-outline-variant/5 shadow-sm hover:shadow-xl transition-all group ${className}`}>
      <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform w-fit">{icon}</span>
      <div className="space-y-4">
        <h4 className="text-2xl font-black text-primary tracking-tight">{title}</h4>
        <p className="text-on-surface-variant font-medium leading-relaxed opacity-70 italic">{description}</p>
      </div>
    </div>
  );
}
