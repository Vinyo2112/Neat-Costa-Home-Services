import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  Home, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Star,
  ArrowRight,
  Menu,
  X,
  Info,
  Facebook,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const whatsappNumber = "34604492386";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Gizella, I'm interested in your property care services!`;
  const logoUrl = "https://drive.google.com/thumbnail?id=1Pq3x-n_X_Hy8J6aOK7nVCK5TksdoOBKf&sz=w1000";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Map", href: "#map" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/30 scroll-smooth">
      {/* Sticky Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left" style={{ scaleX }} />

      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="Neat Costa Logo" 
              className={`h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-multiply ${!scrolled ? "brightness-110 contrast-110" : ""}`}
              referrerPolicy="no-referrer"
            />
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
              Neat Costa
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-semibold transition-colors hover:text-accent ${scrolled ? "text-slate-600" : "text-white/90"}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta hover:bg-accent text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-cta/20"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-slate-600 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              className="bg-cta text-white px-6 py-3 rounded-xl font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Gizella
            </a>
          </motion.div>
        )}
      </nav>

      {/* Section 1: The Hero Header (Top 20%) */}
      <header className="relative h-[85vh] min-h-[750px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Vibrant Sunny Beach Costa del Sol" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-background/95"></div>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-8 md:px-12 max-w-5xl pt-32 md:pt-48 pb-32 md:pb-48"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-2xl border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.5em] rounded-full mb-10 shadow-2xl"
          >
            <Sparkles className="w-3 h-3 text-accent" />
            Premium Property Care
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.65] drop-shadow-2xl">
            Neat Costa <br /> <span className="text-3xl md:text-6xl text-white">Home Services</span>
          </h1>
          <p className="text-lg md:text-2xl text-white font-light mb-14 max-w-3xl mx-auto leading-tight drop-shadow-lg">
            Personalized cleaning and property staging <br className="hidden md:block" /> for your dream Costa del Sol retreat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-14 py-6 bg-cta hover:bg-accent text-white rounded-full font-bold transition-all shadow-2xl shadow-cta/50 text-xl"
            >
              Our Services
              <ArrowRight className="ml-3 w-7 h-7" />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </header>

      {/* Section 2: The Split Intro (Middle-Top 25%) */}
      <section id="about" className="py-28 md:py-48 px-8 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Cleaning and Staging" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 glass p-6 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Personal Service</p>
              </div>
              <p className="text-2xl font-bold">Handled by Gizella</p>
              <p className="text-sm opacity-70 mt-1">Consistency you can depend on.</p>
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">About Neat Costa</h2>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                My name is <span className="font-bold text-primary">Gizella</span>, and I am the professional behind Neat Costa Home Services. I provide detail-oriented, reliable cleaning and property care for private residences and short-term rentals along the Costa del Sol.
              </p>
              <p>
                I work independently, which means your property is always handled personally by me. No rotating teams, no confusion—just consistent, 5-star quality you can depend on.
              </p>
              <p>
                I specialize in physical cleaning and property staging, ensuring your home or rental is always guest-ready and impeccably maintained.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-background rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="p-2 bg-cta/10 rounded-lg">
                  <ShieldCheck className="text-cta w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Fully Insured</p>
                  <p className="text-xs text-slate-500">Total peace of mind</p>
                </div>
              </div>
              <div className="p-4 bg-background rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Star className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">5-Star Quality</p>
                  <p className="text-xs text-slate-500">Guest-ready results</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Dual-Card Comparison (Middle 30%) */}
      <section id="services" className="py-28 md:py-48 px-8 md:px-12 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Designed for long-term partnerships and guest-ready presentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1: STR Turnovers */}
            <motion.div 
              whileHover={{ y: -12 }}
              className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl shadow-primary/5 border border-slate-100 premium-card flex flex-col"
            >
              <div className="w-16 h-16 bg-cta/10 rounded-3xl flex items-center justify-center mb-8">
                <Calendar className="text-cta w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-3">Short-Term Rental (STR) Turnovers</h3>
              <p className="text-slate-500 mb-10 text-base italic">Designed for long-term partnerships and guest-ready presentation.</p>
              
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-sm font-bold text-cta uppercase tracking-widest">The Core Package</p>
                  <div className="flex-1 h-px bg-slate-100"></div>
                </div>
                <p className="text-xs text-slate-400 mb-6 font-medium">(Full Cleaning + Key Holding for Self Check-in)</p>
                <ul className="space-y-5">
                  <li className="flex justify-between items-center pb-4 border-b border-slate-50">
                    <span className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> 1 Bedroom</span>
                    <span className="font-mono font-bold text-primary text-lg">90 €</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-slate-50">
                    <span className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> 2 Bedrooms</span>
                    <span className="font-mono font-bold text-primary text-lg">110 €</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-slate-50">
                    <span className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-accent" /> 3 Bedrooms</span>
                    <span className="font-mono font-bold text-primary text-lg">130 €</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-10 border-t border-slate-100 space-y-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Premium Add-ons</p>
                <div className="space-y-6">
                  <div className="flex justify-between items-start gap-6">
                    <div>
                      <p className="font-bold text-base text-primary">Welcome Packet Setup</p>
                      <p className="text-sm text-slate-500 mt-1">Professional arrangement of guest essentials.</p>
                    </div>
                    <span className="font-mono font-bold text-cta shrink-0">15–25 €</span>
                  </div>
                  <div className="flex justify-between items-start gap-6">
                    <div>
                      <p className="font-bold text-base text-primary">Weekly Property Check</p>
                      <p className="text-sm text-slate-500 mt-1">Photo report and airing out to prevent humidity.</p>
                    </div>
                    <span className="font-mono font-bold text-cta shrink-0">25–35 €</span>
                  </div>
                  <div className="flex justify-between items-start gap-6">
                    <div>
                      <p className="font-bold text-base text-primary">Monthly Property Check</p>
                      <p className="text-sm text-slate-500 mt-1">Full inspection and maintenance suggestions.</p>
                    </div>
                    <span className="font-mono font-bold text-cta shrink-0">40–60 €</span>
                  </div>
                  <div className="flex justify-between items-start gap-6">
                    <div>
                      <p className="font-bold text-base text-primary">Restocking</p>
                      <p className="text-sm text-slate-500 mt-1">Personal shopping for guest essentials.</p>
                    </div>
                    <span className="font-mono font-bold text-cta shrink-0">10–15 €*</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic font-medium">* Plus product cost</p>
              </div>
            </motion.div>

            {/* Card 2: Residential Cleaning */}
            <motion.div 
              whileHover={{ y: -12 }}
              className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl shadow-primary/5 border border-slate-100 premium-card flex flex-col"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-3xl flex items-center justify-center mb-8">
                <Sparkles className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-3">Residential Cleaning Options</h3>
              <p className="text-slate-500 mb-10 text-base italic">Professional care for your private residence.</p>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { size: "1 Bedroom", standard: "60 €", deep: "90 €" },
                    { size: "2 Bedrooms", standard: "85 €", deep: "120 €" },
                    { size: "3 Bedrooms", standard: "110 €", deep: "150 €" }
                  ].map((item) => (
                    <div key={item.size} className="bg-slate-50/50 rounded-2xl border border-slate-100 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">{item.size}</p>
                      <div className="flex gap-4">
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Standard</p>
                          <p className="font-mono font-bold text-cta">{item.standard}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Deep</p>
                          <p className="font-mono font-bold text-accent">{item.deep}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-sm font-bold text-cta uppercase tracking-widest mb-3">Standard Clean</p>
                    <div className="flex flex-wrap gap-2">
                      {["General cleaning", "Dusting", "Vacuuming", "Surfaces"].map(tag => (
                        <span key={tag} className="text-[10px] bg-white px-2 py-1 rounded border border-slate-200 text-slate-600 font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10">
                    <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Deep Clean</p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {["Degreasing", "Descaling", "Hard-to-reach"].map(tag => (
                          <span key={tag} className="text-[10px] bg-white px-2 py-1 rounded border border-accent/20 text-accent font-bold">{tag}</span>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-600 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-accent" /> Ideal for seasonal or move-in cleans.
                        </p>
                        <p className="text-[10px] text-slate-600 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-accent" /> Extra attention to buildup and corners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10">
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <p className="text-sm text-primary font-bold flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5" /> All cleaning products provided by Neat Costa.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Why Choose Neat Costa? */}
      <section className="py-28 md:py-48 px-8 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">Why Choose <br /> Neat Costa?</h2>
                <p className="text-xl text-slate-500">The advantages of a personal, professional partnership.</p>
              </div>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 bg-cta/10 rounded-2xl flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="text-cta w-7 h-7" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">Reliable & Punctual</h3>
                    <p className="text-slate-600 leading-relaxed">Time is your most valuable asset. I pride myself on being exactly where I need to be, when I need to be there, ensuring your property is ready without delay.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ShieldCheck className="text-accent w-7 h-7" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">No Rotating Staff</h3>
                    <p className="text-slate-600 leading-relaxed">Unlike large agencies, you will never have a stranger in your home. I personally handle every clean, ensuring total security and consistency.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Home className="text-primary w-7 h-7" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">Personal Care & Staging</h3>
                    <p className="text-slate-600 leading-relaxed">I don't just clean; I care. From perfect pillow placement to guest-ready staging, I treat your property as if it were my own.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] blur-2xl"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Airbnb Keyholding and Handover Service" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute top-10 right-10 glass p-6 rounded-2xl text-white max-w-[200px]">
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Personal Commitment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section - Redesigned for Professionalism */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-primary/5 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full text-accent text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                Limited Availability
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
                Ready to elevate your <br className="hidden md:block" /> property's potential?
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Message me directly on WhatsApp to discuss your specific needs and get a personalized quote for your Costa del Sol retreat.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Direct Response
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Personal Care
                </div>
              </div>
            </div>
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl shadow-cta/20 flex items-center gap-4 transition-all hover:bg-accent group shrink-0"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>
      </section>

      {/* Section 4: The Icon Ribbon (Lower 10%) */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center">
            <div className="flex flex-col items-center gap-5">
              <div className="p-5 bg-white/10 rounded-3xl backdrop-blur-md">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <span className="font-bold tracking-widest text-xl uppercase">La Cala de Mijas Hub</span>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="p-5 bg-white/10 rounded-3xl backdrop-blur-md">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <span className="font-bold tracking-widest text-xl uppercase">Reliable Scheduling</span>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="p-5 bg-white/10 rounded-3xl backdrop-blur-md">
                <Home className="w-8 h-8 text-accent" />
              </div>
              <span className="font-bold tracking-widest text-xl uppercase">Property Staging Expert</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Friendly Artistic Map Section */}
      <section id="map" className="py-20 md:py-48 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6 tracking-tight">Our Service Area</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl italic">Based in Mijas, covering the heart of the Costa del Sol.</p>
          </div>

          <div className="relative bg-white rounded-[2rem] md:rounded-[4rem] p-2 md:p-12 border border-slate-100 shadow-2xl overflow-hidden">
            <div className="max-w-5xl mx-auto">
              {/* Stylized Watercolor Map */}
              <div className="relative rounded-[3rem] overflow-hidden group border border-slate-100 shadow-inner bg-[#FFFDF5]">
                <svg className="w-full h-auto aspect-[16/9]" viewBox="0 0 1000 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Watercolor Filter */}
                    <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
                    </filter>
                    
                    {/* Paper Texture Pattern */}
                    <pattern id="paper" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <rect width="100" height="100" fill="#FFFDF5" />
                      <path d="M0 0L100 100M100 0L0 100" stroke="#F5F5DC" strokeWidth="0.5" opacity="0.3" />
                    </pattern>

                    <radialGradient id="zoneGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>

                  {/* Sea (Seafoam Blue) */}
                  <rect width="1000" height="562" fill="#B2DFDB" filter="url(#watercolor)" />
                  
                  {/* Land (Cream) */}
                  <path 
                    d="M0 0H1000V350C900 360 800 340 700 355C600 370 500 345 400 365C300 385 200 360 100 375C50 382 0 370 0 370V0Z" 
                    fill="#FFFDF5" 
                    filter="url(#watercolor)"
                  />

                  {/* Mountains (Subtle Detail) */}
                  <g opacity="0.1" fill="#475569">
                    <path d="M50 150L150 50L250 150Z" />
                    <path d="M200 180L350 30L500 180Z" />
                    <path d="M450 160L600 60L750 160Z" />
                    <path d="M700 190L850 40L1000 190Z" />
                  </g>

                  {/* Sea Waves (Subtle Detail) */}
                  <g opacity="0.2" stroke="#0D9488" strokeWidth="1" fill="none">
                    <path d="M100 450 Q 150 430 200 450 T 300 450 T 400 450" />
                    <path d="M500 480 Q 550 460 600 480 T 700 480 T 800 480" />
                    <path d="M250 520 Q 300 500 350 520 T 450 520 T 550 520" />
                  </g>

                  {/* Highway A-7 (Yellow Line) */}
                  <path 
                    d="M0 320C100 315 200 325 300 318C400 310 500 322 600 315C700 308 800 318 900 312C950 310 1000 315 1000 315" 
                    stroke="#F4D03F" 
                    strokeWidth="4" 
                    strokeDasharray="8 4"
                    opacity="0.6"
                  />

                  {/* Town Labels & Points */}
                  <g className="font-serif italic text-[14px]">
                    {/* Estepona & San Pedro (Far West) */}
                    <text x="80" y="280" fill="#94A3B8" textAnchor="middle" className="text-[10px] not-italic font-sans uppercase tracking-widest">Estepona</text>
                    
                    {/* Marbella */}
                    <text x="220" y="280" fill="#64748B" textAnchor="middle">Marbella</text>
                    <circle cx="220" cy="315" r="3" fill="#94A3B8" />
                    
                    {/* Calahonda & Elviria */}
                    <text x="380" y="280" fill="#334155" textAnchor="middle">Calahonda</text>
                    <circle cx="380" cy="315" r="3" fill="#475569" />
                    
                    {/* La Cala de Mijas (Base) */}
                    <g id="base-point">
                      <text x="500" y="260" fill="#0D9488" textAnchor="middle" className="font-black text-[18px]">La Cala de Mijas</text>
                      <text x="500" y="292" fill="#fb923c" textAnchor="middle" className="text-[9px] not-italic font-sans uppercase tracking-[0.1em] font-black">10-15km Service Radius</text>
                      <path d="M500 318L495 305H505L500 318Z" fill="#EF4444" />
                    </g>

                    {/* Fuengirola */}
                    <text x="620" y="280" fill="#334155" textAnchor="middle">Fuengirola</text>
                    <circle cx="620" cy="315" r="3" fill="#475569" />

                    {/* Benalmádena */}
                    <text x="780" y="280" fill="#334155" textAnchor="middle">Benalmádena</text>
                    <circle cx="780" cy="318" r="3" fill="#475569" />

                    {/* Málaga */}
                    <text x="920" y="280" fill="#64748B" textAnchor="middle">Málaga</text>
                    <text x="920" y="300" fill="#94A3B8" textAnchor="middle" className="text-[10px] not-italic font-sans uppercase tracking-widest">East Limit</text>
                  </g>

                  {/* Service Zone Ellipse */}
                  <motion.ellipse
                    cx="510"
                    cy="318"
                    rx="275"
                    ry="100"
                    fill="url(#zoneGradient)"
                    stroke="#2dd4bf"
                    strokeWidth="4"
                    strokeDasharray="12 6"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </div>

              {/* Minimal Note Section */}
              <div className="mt-8 md:mt-12 max-w-2xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 text-center"
                >
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-medium">
                    I specialize in <span className="text-primary font-bold">physical cleaning, property staging, and key holding</span>. 
                    I do not provide emergency call-outs, laundry, or linen services.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Professional Cleaning</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Expert Staging</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Key Holding</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 md:px-12 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <a href="#" className="flex flex-col items-center gap-4 group">
              <img 
                src={logoUrl} 
                alt="Neat Costa Logo" 
                className="h-28 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-multiply brightness-105 contrast-105"
                referrerPolicy="no-referrer"
              />
              <span className="text-3xl font-bold text-primary tracking-tight">Neat Costa</span>
            </a>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:text-accent transition-all border border-slate-100">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:text-accent transition-all border border-slate-100">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            <a href="#" className="text-slate-400 hover:text-cta transition-colors"><ShieldCheck /></a>
            <a href="#" className="text-slate-400 hover:text-cta transition-colors"><Star /></a>
            <a href="#" className="text-slate-400 hover:text-cta transition-colors"><MapPin /></a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Neat Costa Home Services. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky WhatsApp CTA */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/20 transition-all group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-bold tracking-wide">Let's Connect</span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      </motion.a>
    </div>
  );
}
