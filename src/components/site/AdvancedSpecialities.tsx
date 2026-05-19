import { motion } from "framer-motion";
import img1 from "@/assets/adv-spec-1.png";
import img2 from "@/assets/adv-spec-2.png";
import img3 from "@/assets/adv-spec-3.png";
import img4 from "@/assets/adv-spec-4.png";
import { Sparkles, ShieldCheck, Zap, Laptop, Activity } from "lucide-react";

/**
 * Enhanced Card Snake Border - Guaranteed Visibility
 */
function CardSnakeBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cardSnakeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7a13b" stopOpacity="0" />
          <stop offset="50%" stopColor="#f7a13b" stopOpacity="1" />
          <stop offset="100%" stopColor="#f7a13b" stopOpacity="0" />
        </linearGradient>
        <filter id="cardGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.rect
        x="3" y="3"
        width="calc(100% - 6px)"
        height="calc(100% - 6px)"
        rx="24"
        fill="none"
        stroke="url(#cardSnakeGold)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0.3, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        filter="url(#cardGlow)"
      />
    </svg>
  );
}

function SpecialityCard({ spec, idx }: { spec: any; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="group relative flex flex-col h-full"
    >
      {/* Image Container with Studio Lighting */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-primary/30 transition-all duration-500 mb-6 aspect-[16/10]">
        <CardSnakeBorder />
        
        <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500">
           <div className="absolute inset-0 bg-radial-[at_20%_20%] from-primary/20 to-transparent" />
           <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent h-1/3" />
           <motion.div 
             className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent"
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
           />
        </div>

        <img
          src={spec.img}
          alt={spec.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-col flex-grow px-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="size-10 rounded-xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md border border-primary/20">
            {idx === 0 && <Activity className="size-5" />}
            {idx === 1 && <Laptop className="size-5" />}
            {idx === 2 && <Zap className="size-5" />}
            {idx === 3 && <ShieldCheck className="size-5" />}
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
            {spec.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-base leading-snug font-medium">
          {spec.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function AdvancedSpecialities() {
  const specialities = [
    {
      title: "Digital Treatment Units",
      desc: "Ergonomic chairs with integrated diagnostic screens.",
      img: img1,
    },
    {
      title: "Intraoral Precision",
      desc: "High-definition 3D imaging for microscopic accuracy.",
      img: img2,
    },
    {
      title: "Smart Ergonomics",
      desc: "Efficient, patient-centric clinical environment.",
      img: img3,
    },
    {
      title: "Advanced Sterilization",
      desc: "Automated multi-stage clinical hygiene protocols.",
      img: img4,
    },
  ];

  return (
    <section id="advanced-specialities" className="relative py-[var(--section-py)] overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 size-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 size-[500px] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6 text-xs font-bold text-primary uppercase tracking-widest">
            <Sparkles className="size-4" />
            <span>Modern Clinic</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
            Precision <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            State-of-the-art technology for faster and painless dental care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {specialities.map((spec, idx) => (
            <SpecialityCard key={idx} spec={spec} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
