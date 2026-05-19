import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Trophy, HeartPulse, ShieldCheck, Award } from "lucide-react";
import drDevaki from "@/assets/dr-devaki.png";

const stats = [
  { icon: Stethoscope, label: "Procedures", value: "10K+" },
  { icon: GraduationCap, label: "Specializations", value: "5" },
  { icon: Trophy, label: "Awards", value: "10" },
  { icon: HeartPulse, label: "Years Experience", value: "15+" },
];

/**
 * Doctor Section Snake Border - High Visibility
 */
function DoctorSnakeBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="drSnakeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7a13b" stopOpacity="0" />
          <stop offset="50%" stopColor="#f7a13b" stopOpacity="1" />
          <stop offset="100%" stopColor="#f7a13b" stopOpacity="0" />
        </linearGradient>
        <filter id="drGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.rect
        x="4" y="4"
        width="calc(100% - 8px)"
        height="calc(100% - 8px)"
        rx="32"
        fill="none"
        stroke="url(#drSnakeGold)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0.25, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        filter="url(#drGlow)"
      />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const;

export function About() {
  return (
    <section id="about" className="relative py-[var(--section-py)] overflow-hidden bg-background">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 size-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Image column with high visibility lighting */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* External Glow */}
          <div className="absolute -inset-10 bg-primary/10 blur-[60px] rounded-full opacity-50" />

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group ring-2 ring-primary/20">
            <DoctorSnakeBorder />
            
            {/* Studio Lighting Overlays */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute inset-0 bg-radial-[at_80%_20%] from-primary/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-white/10" />
              <motion.div 
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>

            <img
              src={drDevaki}
              alt="Dr. Devaki – Principal Dentist"
              className="w-full h-[500px] md:h-[650px] object-cover object-top transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-6 -right-4 md:-right-8 glass rounded-2xl p-3 shadow-xl border border-primary/20 z-40"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <p className="font-black text-foreground text-lg leading-tight">15+ Years</p>
                <p className="text-primary font-bold uppercase tracking-widest text-[9px] leading-tight">Medical Excellence</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-primary/20 mb-8 text-sm font-bold text-primary uppercase tracking-widest">
            <Award className="size-5" />
            <span>Principal Specialist</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
            Meet Dr. Devaki, <br />
            <span className="text-gradient">Clinical Director</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-10 text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            A veteran dental surgeon with over 15 years of expertise in restorative dentistry, oral surgery, and advanced smile makeovers.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 space-y-5">
            {[
              "Endodontics & Restorative Specialist",
              "Expert in Complex Oral Surgeries",
              "Precision Aesthetic Smile Design",
            ].map((item) => (
              <div key={item} className="flex items-center gap-5 p-4 glass rounded-2xl border border-primary/10 hover:border-primary/40 transition-all hover:bg-primary/5">
                <div className="size-4 rounded-full bg-primary shadow-[0_0_15px_var(--color-primary)]" />
                <span className="font-bold text-lg text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 flex flex-col items-center text-center border border-primary/10 hover:shadow-primary/20 transition-all"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <s.icon className="size-7" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-foreground">{s.value}</div>
                <div className="text-[10px] text-primary uppercase font-black tracking-widest mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
