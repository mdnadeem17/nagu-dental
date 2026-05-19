import { motion } from "framer-motion";
import { Cpu, UserCheck, HeartHandshake, BadgeDollarSign, Siren, Sparkles } from "lucide-react";

const items = [
  { icon: Cpu, title: "Advanced Technology", desc: "Digital X-rays, 3D scans, and laser dentistry for precise outcomes." },
  { icon: UserCheck, title: "Experienced Doctors", desc: "Board-certified specialists with 15+ years in modern dentistry." },
  { icon: HeartHandshake, title: "Pain-Free Treatment", desc: "Sedation options and gentle protocols for total comfort." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Transparent fees, flexible plans and insurance support." },
  { icon: Siren, title: "Emergency Support", desc: "Same-day emergency appointments — we're here when you need us." },
  { icon: Sparkles, title: "Hygienic Environment", desc: "Hospital-grade sterilization and a serene, spa-like clinic." },
];

export function WhyChoose() {
  return (
    <section className="relative py-[var(--section-py)]">
      <div className="blob bg-primary/20 size-[420px] right-0 top-20" />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Why choose us</span>
          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A premium experience built on <span className="text-gradient">trust & technology</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 md:p-6 card-hover"
            >
              <div className="flex flex-col xs:flex-row items-start gap-4">
                <div className="size-10 md:size-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 grid place-items-center">
                  <it.icon className="size-5 md:size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground">{it.title}</h3>
                  <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

