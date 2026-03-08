import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import aboutImg from "./assets/coastal-villas.jpg";
import heroImg from "./assets/hero-bg.jpg";
import {
  MessageCircle, MapPin, Sparkles, Home, Calendar,
  CheckCircle2, Clock, ShieldCheck, Star, ArrowRight,
  Menu, X, Quote,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "34604492386";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gizella%2C%20I%27m%20interested%20in%20your%20property%20care%20services!`;
const LOGO_URL = "https://drive.google.com/thumbnail?id=1Pq3x-n_X_Hy8J6aOK7nVCK5TksdoOBKf&sz=w1000";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Area", href: "#map" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Airbnb Superhost · Marbella",
    text: "Gizella is the most reliable cleaner I have ever worked with. My guests consistently rate cleanliness 5 stars — that's entirely down to her. Absolutely indispensable.",
    stars: 5,
  },
  {
    name: "James & Yvonne K.",
    role: "Property Owners · La Cala de Mijas",
    text: "We live abroad and Gizella gives us complete peace of mind. The photo reports after each visit are so reassuring. Our property has never been better maintained.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "STR Manager · Fuengirola",
    text: "Gizella is professional, punctual and really meticulous. She doesn't just clean — she makes sure everything is perfectly staged and ready for our guests. Highly recommended.",
    stars: 5,
  },
];

const TRUST_STATS = [
  { value: "100%", label: "Personal Commitment" },
  { value: "5★", label: "Guest Ratings" },
  { value: "0", label: "Rotating Staff" },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-cta text-cta" aria-hidden="true" />
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on nav click
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/20">

      {/* ── Read progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-cta z-[100] origin-left"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════
          NAV
      ══════════════════════════════════════════════ */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md shadow-primary/5 py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer" aria-label="Neat Costa — back to top">
            <img
              src={LOGO_URL}
              alt="Neat Costa logo"
              className={`h-12 w-auto object-contain transition-all duration-300 mix-blend-multiply ${!scrolled ? "brightness-110" : ""}`}
              referrerPolicy="no-referrer"
            />
            <span className={`text-xl font-bold tracking-wide transition-colors font-sans ${scrolled ? "text-primary" : "text-white"}`}>
              Neat Costa
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-cta cursor-pointer ${scrolled ? "text-muted" : "text-white/90"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta hover:brightness-110 active:scale-95 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shadow-lg shadow-cta/20 cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border p-6 md:hidden flex flex-col gap-5"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base font-semibold text-primary hover:text-cta transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="bg-cta text-white px-6 py-3 rounded-xl font-bold text-center transition-all hover:brightness-110 cursor-pointer"
              >
                Book Now via WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <header className="relative h-[90vh] min-h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Beautiful Costa del Sol coastline and beach"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-background/95" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 md:px-12 max-w-5xl pt-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-xl border border-white/25 text-white text-[10px] font-bold uppercase tracking-[0.45em] rounded-full mb-8">
            <Sparkles className="w-3 h-3 text-cta" aria-hidden="true" />
            Professional Property Care · Costa del Sol
          </div>

          <h1 className="flex flex-col gap-1 text-white mb-8 drop-shadow-lg font-sans">
            <span className="text-5xl md:text-7xl font-bold uppercase tracking-tight">Neat Costa</span>
            <span className="text-3xl md:text-5xl font-normal text-white/90">Home Services</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Reliable Home & Airbnb Services on the Costa del Sol<br />
            Personal, detail-focused care for your private home or holiday rental
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#services"
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-cta hover:brightness-110 active:scale-[0.98] text-white rounded-full font-bold text-lg transition-all duration-200 shadow-xl shadow-cta/30 cursor-pointer"
            >
              View Services <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full font-bold text-lg transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          TRUST STATS RIBBON
      ══════════════════════════════════════════════ */}
      <section className="py-12 bg-primary" aria-label="Key statistics">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {TRUST_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-4xl font-bold text-cta font-sans">{stat.value}</span>
                <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img
              src={aboutImg}
              alt="Stylish modern apartment on the Costa del Sol"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-cta rounded-full" aria-hidden="true" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Personal Service</p>
              </div>
              <p className="text-xl font-bold text-primary font-sans">Handled by Gizella</p>
              <p className="text-sm text-muted mt-1">Consistency you can depend on.</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="section-label">About Neat Costa</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                About Neat Costa
              </h2>
              <div className="w-16 h-1 bg-cta rounded-full" />
            </div>

            <div className="space-y-5 text-muted leading-relaxed text-base">
              <p>
                My name is <span className="font-bold text-primary">Gizella</span>, and I am the person behind Neat Costa Home Services. I provide reliable, detail-focused residential cleaning and short-term rental services for private homes and holiday properties along the Costa del Sol.
              </p>
              <p>
                I work independently, which means your property is always handled personally by me. There are no rotating teams and no confusion — just clear communication, punctual service, and consistent attention to detail.
              </p>
              <p>
                My goal is simple: to help homeowners keep their properties clean, well cared for, and ready at all times. Whether it’s a private residence or a holiday rental, you can feel confident that your property is in trustworthy hands.
              </p>
              <p>
                With Neat Costa, I aim to build long-term relationships with clients who value reliability, consistency, and a personal touch. Your home is my priority, and I take pride in providing service you can depend on.
              </p>
              <p className="font-medium text-cta pt-2">
                To learn more about the services I offer, please visit the <a href="#services" className="underline decoration-2 underline-offset-4 hover:text-cta/80 transition-colors">Services</a> page.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-cta" aria-hidden="true" />, title: "Fully Insured", sub: "Total peace of mind", bg: "bg-cta/10" },
                { icon: <Star className="w-5 h-5 text-accent" aria-hidden="true" />, title: "5-Star Quality", sub: "Guest-ready results", bg: "bg-accent/10" },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-background rounded-2xl border border-border flex items-center gap-4">
                  <div className={`p-2 ${item.bg} rounded-xl shrink-0`}>{item.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-primary">{item.title}</p>
                    <p className="text-xs text-muted">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">Services</h2>
            <p className="text-muted max-w-xl mx-auto mt-4 text-base">Designed for long-term partnerships and guest-ready presentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Card 1: STR */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface p-10 md:p-12 rounded-[2.5rem] shadow-lg border border-border premium-card flex flex-col"
            >
              <div className="w-14 h-14 bg-cta/10 rounded-2xl flex items-center justify-center mb-8" aria-hidden="true">
                <Calendar className="text-cta w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Short-Term Rental (STR) Turnovers</h3>
              <p className="text-muted mb-2 text-sm italic">Designed for long-term partnerships and guest-ready presentation.</p>


              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-xs font-bold text-cta uppercase tracking-widest">The Core Package</p>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-xs text-muted mb-3 font-medium">(Full Cleaning + Key Holding for Self Check-in)</p>
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] text-muted flex items-center gap-2">
                    <Clock className="w-3 h-3 text-cta" /> Availability: Monday–Friday, 9:00–18:00
                  </p>
                  <p className="text-[11px] text-accent flex items-center gap-2 font-medium">
                    <X className="w-3 h-3 text-accent" /> No laundry, no late-night check-in, no emergency call-outs
                  </p>
                </div>
                <ul className="space-y-4">
                  {[["1 Bedroom", "90 €"], ["2 Bedrooms", "110 €"], ["3 Bedrooms", "130 €"]].map(([size, price]) => (
                    <li key={size} className="flex flex-col gap-1 pb-4 border-b border-border/50">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-3 font-medium text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" /> {size}
                        </span>
                        <span className="font-mono font-bold text-primary">{price}</span>
                      </div>
                      <p className="text-[10px] text-muted italic ml-7">Full cleaning + self check-in coordination</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-border/50 space-y-6">
                <p className="text-xs font-bold text-muted uppercase tracking-wider">Optional Extras</p>
                {[
                  ["Welcome Pack Setup", "Setup & decorative arrangement, products not included", "15–25 €"],
                  ["Weekly Property Check", "Ventilation, minor checks, photo report", "25–35 €"],
                  ["Monthly Property Check", "Full inspection, photo report, maintenance suggestions", "40–60 €"],
                  ["Restocking / Replenishing", "If I need to buy products (water, snacks, coffee, WC paper, cleaning supplies) plus service fee", "Product Cost + 10–15 €"],
                ].map(([title, desc, price]) => (
                  <div key={title} className="flex justify-between items-start gap-4">
                    <div>
                      <p className="font-bold text-sm text-primary">{title}</p>
                      <p className="text-xs text-muted mt-0.5">{desc}</p>
                    </div>
                    <span className="font-mono font-bold text-cta text-sm shrink-0">{price}</span>
                  </div>
                ))}
                <div className="bg-cta/5 p-4 rounded-xl border border-cta/10">
                  <p className="text-[11px] text-muted leading-relaxed">
                    <span className="font-bold text-cta">Tip:</span> If the host provides the products, only the <span className="font-semibold text-primary">Welcome Pack Setup</span> fee applies. If I buy the products, the <span className="font-semibold text-primary">Restocking</span> row applies.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-accent/80 text-[11px] font-medium leading-relaxed italic">
                    I do not provide emergency call-outs, laundry, late-night check-ins, or linen services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Residential */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface p-10 md:p-12 rounded-[2.5rem] shadow-lg border border-border premium-card flex flex-col"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8" aria-hidden="true">
                <Sparkles className="text-accent w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Residential Cleaning Options</h3>
              <p className="text-muted mb-8 text-sm italic">Professional care for your private residence.</p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { type: "Standard Clean", price: "from 60 €", desc: "Weekly / biweekly cleaning, general tidy up, dusting & vacuuming" },
                    { type: "Deep Clean", price: "from 90 €", desc: "Full cleaning, detailed surfaces, bathroom & kitchen deep clean" },
                    { type: "Move-in / Move-out Clean", price: "from 130 €", desc: "Complete deep cleaning for new tenants or moving out. Depending on the size of the property." },
                  ].map((item) => (
                    <div key={item.type} className="bg-background rounded-2xl border border-border p-5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-bold text-primary">{item.type}</p>
                        <p className="font-mono font-bold text-cta text-sm">{item.price}</p>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        • {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-border/50">
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <p className="text-sm text-primary font-semibold">All cleaning products provided by Neat Costa.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="section-label">The Neat Costa Difference</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Why Choose<br />Neat Costa?</h2>
                <p className="text-muted text-base">The benefits of a personal, professional service you can trust.</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck className="text-cta w-6 h-6" aria-hidden="true" />, bg: "bg-cta/10", title: "Reliable and organized", text: "Consistency you can depend on, every single time." },
                  { icon: <Clock className="text-accent w-6 h-6" aria-hidden="true" />, bg: "bg-accent/10", title: "Detailed property checks & photo reports", text: "Complete peace of mind through transparent, visual updates." },
                  { icon: <Home className="text-primary w-6 h-6" aria-hidden="true" />, bg: "bg-primary/10", title: "Self check-in friendly (stress-free for hosts & guests)", text: "Seamless coordination that makes hosting easier and guest arrival smoother." },
                  { icon: <Sparkles className="text-cta w-6 h-6" aria-hidden="true" />, bg: "bg-cta/10", title: "Professional cleaning standards", text: "Guest-ready presentation that consistently earns 5-star ratings." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className={`shrink-0 w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-primary">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/8 rounded-[3rem] blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                  alt="Key handover service for Airbnb property management"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute top-8 right-8 glass p-5 rounded-2xl max-w-[180px]">
                  <p className="text-3xl font-bold text-primary font-sans">100%</p>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest mt-1">Personal Commitment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS  (new section — landing pattern)
      ══════════════════════════════════════════════ */}
      <section id="reviews" className="py-24 md:py-36 px-6 md:px-12 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cta font-bold uppercase tracking-[0.3em] text-[11px] block mb-3">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">What Clients Say</h2>
            <p className="text-white/50 max-w-xl mx-auto mt-4 text-sm">Real partnerships. Real peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/8 border border-white/10 rounded-3xl p-8 flex flex-col gap-5 hover:bg-white/12 hover:border-white/20 transition-all duration-200 cursor-default"
              >
                <Quote className="w-8 h-8 text-cta/50 shrink-0" aria-hidden="true" />
                <blockquote className="text-white/80 text-sm leading-relaxed flex-1">"{t.text}"</blockquote>
                <footer className="space-y-2">
                  <StarRating count={t.stars} />
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </footer>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHATSAPP CTA
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-background border-y border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-surface rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-border flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left space-y-5">
              <div className="trust-badge">
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                Limited Availability
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-snug">
                Ready to elevate your<br className="hidden md:block" /> property's potential?
              </h2>
              <p className="text-muted text-base leading-relaxed">
                Ready to elevate your property’s potential?<br />
                Message me directly on WhatsApp to discuss your property and how I can assist.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {["Direct Response", "Personal Care", "Fully Insured"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="bg-[#25D366] hover:bg-[#1ebe5a] text-white px-8 py-5 rounded-full font-bold text-base shadow-xl flex items-center gap-3 transition-colors duration-200 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ICON RIBBON
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-primary/5 border-b border-border" aria-label="Service highlights">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: <MapPin className="w-7 h-7 text-cta" aria-hidden="true" />, label: "La Cala de Mijas Hub" },
              { icon: <Clock className="w-7 h-7 text-cta" aria-hidden="true" />, label: "Reliable Scheduling" },
              { icon: <Home className="w-7 h-7 text-cta" aria-hidden="true" />, label: "Property Support Services" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-4">
                <div className="p-4 bg-cta/10 border border-cta/20 rounded-2xl">{item.icon}</div>
                <span className="font-bold tracking-wide text-sm text-primary uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAP
      ══════════════════════════════════════════════ */}
      <section id="map" className="py-20 md:py-36 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <span className="section-label">Coverage</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Our Service Area</h2>
            <p className="text-muted max-w-xl mx-auto mt-4 text-base italic">Based in La Cala de Mijas, covering the heart of the Costa del Sol.</p>
          </div>

          <div className="relative bg-surface rounded-[2.5rem] p-2 md:p-10 border border-border shadow-xl overflow-hidden">
            <div className="max-w-5xl mx-auto">
              {/* Stylized SVG Map */}
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-inner bg-[#FFFDF5]">
                <svg className="w-full h-auto aspect-[16/9]" viewBox="0 0 1000 562" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Map showing service area from Estepona to Málaga, centered on La Cala de Mijas">
                  <defs>
                    <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
                    </filter>
                    <radialGradient id="zoneGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C5A059" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#C5A059" stopOpacity="0.05" />
                    </radialGradient>
                  </defs>

                  {/* Sea */}
                  <rect width="1000" height="562" fill="#B2DFDB" filter="url(#watercolor)" />
                  {/* Land */}
                  <path d="M0 0H1000V350C900 360 800 340 700 355C600 370 500 345 400 365C300 385 200 360 100 375C50 382 0 370 0 370V0Z" fill="#FFFDF5" filter="url(#watercolor)" />
                  {/* Mountains */}
                  <g opacity="0.1" fill="#475569">
                    <path d="M50 150L150 50L250 150Z" /><path d="M200 180L350 30L500 180Z" />
                    <path d="M450 160L600 60L750 160Z" /><path d="M700 190L850 40L1000 190Z" />
                  </g>
                  {/* Waves */}
                  <g opacity="0.2" stroke="#0D9488" strokeWidth="1" fill="none">
                    <path d="M100 450 Q 150 430 200 450 T 300 450 T 400 450" />
                    <path d="M500 480 Q 550 460 600 480 T 700 480 T 800 480" />
                  </g>
                  {/* Highway A-7 */}
                  <path d="M0 320C200 315 400 322 600 315C800 308 1000 315 1000 315" stroke="#F4D03F" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />

                  {/* Town labels */}
                  <g fontSize="13" fontFamily="system-ui, sans-serif">
                    <text x="80" y="280" fill="#94A3B8" textAnchor="middle" fontSize="10">Estepona</text>
                    <text x="220" y="280" fill="#64748B" textAnchor="middle">Marbella</text>
                    <circle cx="220" cy="314" r="3" fill="#94A3B8" />
                    <text x="380" y="280" fill="#334155" textAnchor="middle">Calahonda</text>
                    <circle cx="380" cy="314" r="3" fill="#475569" />
                    {/* Hub */}
                    <text x="500" y="258" fill="#1B3A6B" textAnchor="middle" fontSize="17" fontWeight="800">La Cala de Mijas</text>
                    <text x="500" y="284" fill="#C5A059" textAnchor="middle" fontSize="9" fontWeight="800">★ OUR BASE · 10-15km RADIUS</text>
                    <path d="M500 312 L494 298 H506 Z" fill="#C5A059" />
                    <text x="620" y="280" fill="#334155" textAnchor="middle">Fuengirola</text>
                    <circle cx="620" cy="314" r="3" fill="#475569" />
                    <text x="780" y="280" fill="#334155" textAnchor="middle">Benalmádena</text>
                    <circle cx="780" cy="317" r="3" fill="#475569" />
                    <text x="920" y="280" fill="#64748B" textAnchor="middle">Málaga</text>
                    <text x="920" y="296" fill="#94A3B8" textAnchor="middle" fontSize="9">East Limit</text>
                  </g>

                  {/* Service zone */}
                  <motion.ellipse
                    cx="510" cy="315" rx="270" ry="95"
                    fill="url(#zoneGradient)"
                    stroke="#C5A059"
                    strokeWidth="3"
                    strokeDasharray="12 8"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      strokeDashoffset: [0, -40]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Bottom Map Label */}
                  <text x="500" y="535" fill="#1B3A6B" textAnchor="middle" fontSize="18" fontWeight="700" opacity="0.8">
                    No long drives, easy scheduling.
                  </text>
                </svg>
              </div>

              {/* Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10 max-w-2xl mx-auto bg-background rounded-2xl p-6 md:p-8 border border-border text-center"
              >
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  I focus on a small service area to provide fast, reliable, and high-quality service—without the long drives.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-black text-muted uppercase tracking-[0.2em]">
                  {["Professional Cleaning", "Expert Staging", "Key Holding"].map(item => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-accent shrink-0" aria-hidden="true" /> {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="py-16 bg-primary" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-10">
          <a href="#" className="flex flex-col items-center gap-4 group cursor-pointer" aria-label="Neat Costa — back to top">
            <img
              src={LOGO_URL}
              alt="Neat Costa logo"
              className="h-20 w-auto object-contain mix-blend-lighten brightness-110 transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-bold text-white tracking-tight font-sans">Neat Costa</span>
          </a>

          <nav aria-label="Footer navigation" className="flex justify-center gap-8 flex-wrap">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/neatcosta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Neat Costa on Instagram"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              {/* Instagram SVG icon */}
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587624913089"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Neat Costa on Facebook"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              {/* Facebook SVG icon */}
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>

          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Neat Costa Home Services · La Cala de Mijas, Costa del Sol · All rights reserved.
          </p>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════
          STICKY WHATSAPP BUTTON
      ══════════════════════════════════════════════ */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Gizella on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-5 py-3.5 rounded-full shadow-2xl shadow-green-500/25 transition-colors duration-200 group cursor-pointer"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-30" aria-hidden="true" />
        <MessageCircle className="w-5 h-5 fill-current relative z-10" aria-hidden="true" />
        <span className="font-bold text-sm tracking-wide relative z-10">Let's Connect</span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" aria-hidden="true" />
      </motion.a>

    </div>
  );
}
