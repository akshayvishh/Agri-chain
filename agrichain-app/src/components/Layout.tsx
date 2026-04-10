import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/browse', label: 'Market', icon: 'storefront' },
    { path: '/hub', label: 'Skill Hub', icon: 'school' },
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter">
            AgriChain
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:block text-sm font-bold text-primary hover:opacity-80 transition-opacity">
              Sign In
            </Link>
            <Link to="/list" className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add_circle</span>
              List Produce
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white p-2 rounded-2xl shadow-2xl flex gap-1 z-50 border border-white/10 backdrop-blur-md bg-opacity-90">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all ${
              location.pathname === item.path ? 'bg-white text-primary' : 'hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === item.path ? "'FILL' 1" : "'FILL' 0" }}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold mt-1 uppercase tracking-widest leading-none">
              {item.label.split(' ')[0]}
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant/10 py-12 px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black text-primary tracking-tighter">
            AgriChain
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-primary underline decoration-primary-fixed decoration-2">Verified Status</a>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">
            © 2024 AgriChain Digital Agronomist. Verified Secure.
          </p>
        </div>
      </footer>
    </div>
  );
}
