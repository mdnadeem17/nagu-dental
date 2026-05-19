import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Trophy, HeartPulse, User } from "lucide-react";
import drAnand from "@/assets/dr-anand.png";

const stats = [
  { icon: Stethoscope, label: "Procedures", value: "25K+" },
  { icon: GraduationCap, label: "Specializations", value: "8" },
  { icon: Trophy, label: "Awards", value: "15" },
  { icon: HeartPulse, label: "Years Experience", value: "30+" },
];

export function About() {
  return (
    <section id="about" className="relative py-[var(--section-py)]">
      <div className="blob bg-secondary/25 size-[380px] -left-20 top-32" />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-elevated">
            <div className="w-full h-[420px] md:h-[520px] bg-primary/5">
              <img 
                src={drAnand} 
                alt="Dr. P. Anand Kumar" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 glass rounded-2xl p-4 shadow-glow flex items-center gap-3">
            <span className="size-12 rounded-full btn-primary grid place-items-center text-lg font-bold">30+</span>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Years of Excellence</p>
              <p className="text-muted-foreground text-xs">Trusted dental expertise</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">About the doctor</span>
          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Dr. P. Anand Kumar, <span className="text-gradient">BDS</span>
          </h2>
          <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-relaxed">
            With over 30 years of clinical experience, Dr. P. Anand Kumar blends advanced techniques with
            a warm, patient-first approach. He specializes in restorative and aesthetic dentistry, 
            full-mouth rehabilitation, and complex dental procedures — restoring confidence one smile at a time.
          </p>

          <ul className="mt-6 space-y-3 text-foreground">
            <li className="flex items-start gap-3 text-sm md:text-base"><span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" /> Specialist in Restorative & Aesthetic Dentistry</li>
            <li className="flex items-start gap-3 text-sm md:text-base"><span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" /> Expert in Maxillofacial Prosthodontics</li>
            <li className="flex items-start gap-3 text-sm md:text-base"><span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" /> Committed to Advanced Digital Dental Technology</li>
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 card-hover">
                <s.icon className="size-6 text-primary" />
                <div className="mt-3 text-xl md:text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

