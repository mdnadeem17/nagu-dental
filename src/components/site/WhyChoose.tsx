import { motion } from "framer-motion";
import { Cpu, UserCheck, HeartHandshake, BadgeDollarSign, Siren, Sparkles } from "lucide-react";
import { ThreeDTilt } from "./ThreeDTilt";

const items = [
  { icon: Cpu,             title: "Advanced Technology",   desc: "Digital X-rays, 3D scans, and laser dentistry for precise outcomes." },
  { icon: UserCheck,       title: "Experienced Doctors",   desc: "Board-certified specialists with 15+ years in modern dentistry." },
  { icon: HeartHandshake,  title: "Pain-Free Treatment",   desc: "Sedation options and gentle protocols for total comfort." },
  { icon: BadgeDollarSign, title: "Affordable Pricing",    desc: "Transparent fees, flexible plans and insurance support." },
  { icon: Siren,           title: "Emergency Support",     desc: "Same-day emergency appointments — we're here when you need us." },
  { icon: Sparkles,        title: "Hygienic Environment",  desc: "Hospital-grade sterilization and a serene, spa-like clinic." },
];

export function WhyChoose() {
  return (
    <section className="relative py-[var(--section-py)] overflow-hidden">
      {/* ── Section-level ambient lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main warm blob — top-right */}
        <div
          className="absolute -top-24 -right-24 size-[520px] rounded-full blur-[130px] opacity-40 animate-pulse"
          style={{ background: "radial-gradient(circle, #f7a13b 0%, transparent 70%)" }}
        />
        {/* Cool accent blob — bottom-left */}
        <div
          className="absolute -bottom-16 -left-16 size-[380px] rounded-full blur-[100px] opacity-25 animate-float"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Faint full-width top beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest
            px-4 py-1.5 rounded-full border border-primary/20 glass mb-4">
            <Sparkles className="size-3.5" /> Why choose us
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A premium experience built on{" "}
            <span className="text-gradient">trust &amp; technology</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <ThreeDTilt
              key={it.title}
              className="rounded-2xl h-full"
              maxTilt={10}
              scale={1.03}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative glass rounded-2xl p-5 md:p-6 card-hover overflow-hidden h-full"
              >
              {/* Per-card radial spotlight (reveals on hover) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(247,161,59,0.13) 0%, transparent 70%)",
                }}
              />

              {/* Animated bottom edge-glow bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full
                bg-gradient-to-r from-primary via-primary-glow to-transparent
                transition-all duration-700 ease-out
                shadow-[0_0_12px_var(--color-primary)]" />

              <div className="flex flex-col xs:flex-row items-start gap-4 relative z-10">
                {/* Icon orb with shimmer */}
                <div className="relative size-10 md:size-12 shrink-0 rounded-xl
                  bg-gradient-to-br from-primary/20 to-secondary/10
                  border border-primary/20 grid place-items-center
                  group-hover:scale-110 group-hover:border-primary/50
                  transition-all duration-500 shadow-inner overflow-hidden">
                  {/* shimmer sheen */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                    bg-gradient-to-r from-transparent via-white/30 to-transparent
                    transition-transform duration-700 ease-in-out" />
                  <it.icon className="size-5 md:size-6 text-primary relative z-10" />
                </div>

                <div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground
                    group-hover:text-primary transition-colors duration-300">
                    {it.title}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </ThreeDTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
