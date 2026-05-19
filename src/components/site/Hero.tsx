import { motion } from "framer-motion";
import { Calendar, Phone, Star, ShieldCheck, Award } from "lucide-react";
import c2 from "@/assets/hero-interior.png";
import { Counter } from "./Counter";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay } as const,
});

/**
 * Highly Visible Premium Snake Lighting Border
 * — Uses Framer Motion's pathLength and pathOffset for guaranteed visibility
 * — Increased stroke width and glow intensity
 */
function SnakeBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="snakeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7a13b" stopOpacity="0" />
          <stop offset="50%" stopColor="#f7a13b" stopOpacity="1" />
          <stop offset="100%" stopColor="#f7a13b" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="snakeCool" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>

        <filter id="glowMax" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Visible Snake - Clockwise */}
      <motion.rect
        x="4" y="4"
        width="calc(100% - 8px)"
        height="calc(100% - 8px)"
        rx="32"
        fill="none"
        stroke="url(#snakeGold)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0.2, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        filter="url(#glowMax)"
      />

      {/* Secondary Cool Snake - Counter-Clockwise */}
      <motion.rect
        x="6" y="6"
        width="calc(100% - 12px)"
        height="calc(100% - 12px)"
        rx="30"
        fill="none"
        stroke="url(#snakeCool)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0.15, pathOffset: 0 }}
        animate={{ pathOffset: [0, -1] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        filter="url(#glowMax)"
      />
    </svg>
  );
}

function OuterHalo() {
  return (
    <div className="absolute -inset-10 pointer-events-none z-0">
      <motion.div
        className="absolute inset-0 rounded-[4rem] blur-[60px]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(247,161,59,0.3) 0%, transparent 70%)"
        }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-36 pb-12 md:pb-20 overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 size-[600px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 -right-20 size-[500px] bg-secondary/20 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div {...fadeUp(0)}>
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 text-sm font-bold"
          >
            <Star className="size-4 text-amber-500 fill-amber-500" />
            <span className="text-foreground">5.0 Rating — 108 Verified Reviews</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground tracking-tight"
          >
            NAGU Dental <br />
            <span className="text-gradient">Multi-speciality Clinic</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            World-class dental treatments with personalized care and advanced technology. 
            Experience dentistry like never before in a luxury clinical environment.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#book"
              className="btn-primary inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-lg shadow-xl"
            >
              <Calendar className="size-6" /> Book Your Visit
            </a>
            <a
              href="tel:+918861932535"
              className="btn-ghost-primary inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-lg border-2"
            >
              <Phone className="size-6" /> Talk to Specialist
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <Stat value={15} suffix="+" label="Years" />
            <Stat value={5} suffix="K+" label="Patients" />
            <Stat value={99} suffix="%" label="Happy" />
          </div>
        </motion.div>

        {/* Right column – Hero Image with ULTRA VISIBLE lighting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <OuterHalo />
          
          {/* Main Image Wrapper */}
          <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-br from-primary/50 to-secondary/50 shadow-2xl">
            <div className="relative rounded-[2.4rem] overflow-hidden bg-background">
              {/* The Snake Border is now on top and uses pathLength */}
              <SnakeBorder />
              
              <img
                src={c2}
                alt="Nagu Dental Clinic Interior"
                className="w-full h-[450px] md:h-[650px] object-cover"
              />

              {/* Internal Studio Lighting Layers */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-radial-[at_15%_15%] from-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-white/10" />
                
                {/* Scan line */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
            </div>
          </div>

          {/* Floating Review Badge */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-8 md:-left-16 bottom-12 glass rounded-3xl p-6 shadow-2xl border border-primary/20 z-40 hidden sm:block"
          >
             <div className="flex gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-current" />)}
             </div>
             <p className="font-bold text-foreground text-lg">Trusted by 5,000+</p>
             <p className="text-sm text-muted-foreground">Certified Premium Clinic</p>
          </motion.div>
          
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -right-2 md:-right-6 top-6 glass rounded-2xl p-2.5 shadow-xl border border-primary/20 z-40"
          >
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-primary flex items-center justify-center text-white shadow-md">
                <Award className="size-4" />
              </div>
              <div>
                <p className="font-bold text-foreground text-[11px] leading-tight">Award Winning</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest leading-tight">Excellence 2024</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-black text-foreground">
        <Counter to={value} />{suffix}
      </div>
      <div className="text-xs md:text-sm uppercase font-bold tracking-widest text-primary mt-1">{label}</div>
    </div>
  );
}
