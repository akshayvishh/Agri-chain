import { motion } from 'framer-motion';

export default function SkillHub() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <section className="relative rounded-[2.5rem] overflow-hidden min-h-[450px] flex items-center bg-primary-container shadow-2xl">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            alt="Agri-worker learning" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCufLzFWl9csA09VISr_OKxCFRD1b4lte2SlMN1laprX2l1emqidqK93vNBql94ZXKofaByOSagHapaB7sRZHS2Wj39TgRUrARoFaqLQ3E0u9ZmEnLXe_TZ1MbXVSybyTVVTtdROSKWy8tFtXBmXJmw4KjOXuQALwof7t7pGUrL9Cz6CJ_pyutEbPRVy4Em9E3xDHWGaPeeKMXev4CpCv6hyrOWXd0_I9PUI4yRG-FewO_DIxu5vS7sG-HD7RYJgs3RLVaSTP-IXjaz" 
          />
          <div className="relative z-10 px-8 md:px-16 max-w-3xl space-y-8">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Empowering the Next Generation of <span className="text-primary-fixed">Agri-Experts</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 font-medium max-w-xl leading-relaxed"
            >
              Bridge the gap between traditional wisdom and modern precision. Find jobs, learn expert techniques, and trade services in our integrated hub.
            </motion.p>
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="flex flex-wrap gap-4"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-primary/90 transition-all flex items-center gap-2 shadow-xl">
                Start Learning <span className="material-symbols-outlined">school</span>
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-white/20 transition-all">
                Browse Jobs
              </button>
            </motion.div>
          </div>
        </section>

        {/* Skill Hub Grid */}
        <section className="space-y-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-primary">Skill Hub</h2>
              <p className="text-on-surface-variant font-medium text-lg">Master the field with expert-led masterclasses.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-1 hover:underline group">
              View All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuD0r72FLBTrA9h1E5Fku4DbNnjFvmnHa9dLeEBgBdfduohQkoK481iwADW5xtcLDtQLp7K6vkKsqBmPu4AifepCFE6OUG7EPD7SD7qX-kYX6R0k3z9wr_kRv8VBdphzoCnV0S_e3Sw_2s06P5dkGDWxN99_GRZvcStVT1O38I_-tZxucIFvRoUQZnaGl5imqXJNSkrLCSOMxP1Moanb7PzYR6qWCN9BMx9-WnqMF9zTWZ2DnTXzUy7bec1KuiBIaHhjHreIbH2glTBR"
              tag="Farming Techniques"
              title="Precision Irrigation & Water Conservation"
              desc="Learn how to implement IoT-based drip systems to reduce water waste by 40%."
              duration="12:45"
            />
             <SkillCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuA2cgYbXQGVhlgw4HwrNXjik4CagBfWdtSOpicYa1yGQB249NqZwpDvLwD8Jc40VWdOqzeV-b0CG4vYMd66dkhtAFOqsrhvAQLK5LUAsH8ru6wlH0R6H7q1J8sUMNgVqFYoPObYdx6dim5rys5BSPdcxzs3p5RlVN4TkOKym-EIIOwhGSmi4gbX_EDvTGfo79haUed9aFb2SNGDEWN_DPHz4LwDNI6jsa8ArEVUHHgCLRsrD7ymvjRKaorFkF2noeqy-6AeG-hQh5Nc"
              tag="Repair Skills"
              title="Tractor Maintenance: Tier 4 Engine Care"
              desc="A step-by-step guide to seasonal maintenance for heavy agricultural machinery."
              duration="08:20"
              color="text-secondary"
            />
             <SkillCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBqHIXm31NPzqnkc0kypYtmOy29QQS4JFmi38zxvTiet6RBQip2YHpSoBJLCVCZK8icM_zbZwFqRa21vwyTfUIvxRbbxRoY-Pjpn1qbw0I0_xSc-Et2I4fGR0ejsaE9RlcnKvSzjXx7EcBGc6FYIlztpke3pEeCYShf_wu9Sc9-ysWP03WelYDsTuT1K5yjlnsPAl0Xx5jzxpPWRihlU9UWY0dBgNxOTFlqdNtvL7DoreiFVdjfRbobXnkKpDTyXtCMNez5kXsohCi-"
              tag="Agri-Business"
              title="Supply Chain & Market Access"
              desc="Strategies for smallholders to negotiate better prices at regional logistics hubs."
              duration="15:10"
              color="text-tertiary"
            />
          </div>
        </section>

        {/* Jobs & Marketplace Bento */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Job Connection</h2>
              <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">12 New Matches</span>
            </div>
            <div className="space-y-4">
              <JobItem icon="compost" title="Seasonal Harvest Supervisor" company="Green Valley Estates" loc="5km away" type="Full-Time" pay="$25/hr" />
              <JobItem icon="precision_manufacturing" title="Drone Operator Apprentice" company="AgriTech Solutions" loc="12km away" type="Part-Time" pay="$18/hr" />
              <JobItem icon="science" title="Soil Quality Technician" company="Regional Lab" loc="20km away" type="Contract" pay="$30/hr" />
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-surface-container-high rounded-[2.5rem] p-10 space-y-8 shadow-inner">
            <div>
              <h2 className="text-2xl font-black text-primary mb-2">Service Market</h2>
              <p className="text-sm text-on-surface-variant font-medium">Post work or offer professional help.</p>
            </div>
            <div className="space-y-4">
              <ServiceItem tag="Repairs" title="Urgent: Pump Repair Needed" price="₹150 fixed" time="2h ago" />
              <ServiceItem tag="Transport" title="Grain Transport (5 Tons)" price="₹200 fixed" time="5h ago" color="bg-primary-fixed" />
            </div>
            <button className="w-full bg-secondary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-xl">
              <span className="material-symbols-outlined">add_circle</span> Post a Service
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillCard({ img, tag, title, desc, duration, color = 'text-primary' }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-surface-container-low rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-outline-variant/5"
    >
      <div className="aspect-video relative overflow-hidden">
        <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="material-symbols-outlined text-white text-7xl drop-shadow-2xl cursor-pointer" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_circle
          </motion.span>
        </div>
        <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-black">{duration}</span>
      </div>
      <div className="p-8 space-y-4">
        <div className={`flex items-center gap-2 ${color} font-black text-[10px] uppercase tracking-[0.2em]`}>
          <span className="material-symbols-outlined text-sm">school</span> {tag}
        </div>
        <h3 className="text-2xl font-black leading-tight text-primary truncate">{title}</h3>
        <p className="text-on-surface-variant font-medium leading-relaxed opacity-80">{desc}</p>
      </div>
    </motion.div>
  );
}

function JobItem({ icon, title, company, loc, type, pay }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-surface-container-lowest p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="flex gap-6 items-center">
        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
          <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        </div>
        <div>
          <h4 className="text-xl font-black text-primary">{title}</h4>
          <p className="text-on-surface-variant font-bold text-sm opacity-60 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span> {company} • {loc}
          </p>
          <div className="mt-3 flex gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{type}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-tertiary bg-tertiary-fixed px-3 py-1 rounded-full">{pay}</span>
          </div>
        </div>
      </div>
      <button className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all shadow-lg">Apply Now</button>
    </motion.div>
  );
}

function ServiceItem({ tag, title, price, time, color = "bg-secondary-container" }: any) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl space-y-4 border border-outline-variant/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className={`${color} text-on-surface px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest`}>{tag}</div>
        <span className="text-[10px] font-bold text-on-surface-variant opacity-60 uppercase">{time}</span>
      </div>
      <h4 className="font-black text-primary leading-tight">{title}</h4>
      <div className="flex justify-between items-center pt-2">
        <span className="text-primary font-black text-lg">{price}</span>
        <button className="text-primary text-xs font-black border-2 border-primary/10 px-4 py-2 rounded-xl hover:bg-primary/5 transition-colors">Bid Now</button>
      </div>
    </div>
  );
}
