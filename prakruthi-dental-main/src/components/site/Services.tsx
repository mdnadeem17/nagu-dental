import { motion } from "framer-motion";
import {
  Sparkles, Stethoscope, Smile, Crown, Wand2, Baby, Brackets, ShieldPlus, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional cleaning that restores brightness and removes plaque safely." },
  { icon: Stethoscope, title: "Root Canal", desc: "Painless modern endodontics to save and preserve your natural teeth." },
  { icon: Crown, title: "Dental Implants", desc: "Long-lasting titanium implants that look, feel and function naturally." },
  { icon: Wand2, title: "Teeth Whitening", desc: "Premium in-clinic whitening for a brilliant, lasting Hollywood smile." },
  { icon: Brackets, title: "Braces & Aligners", desc: "Invisible aligners and modern braces tailored to your bite." },
  { icon: Smile, title: "Smile Designing", desc: "Custom-crafted smile makeovers that match your features perfectly." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, fun and stress-free dental care for our youngest patients." },
  { icon: ShieldPlus, title: "Maxillofacial", desc: "Expert prosthodontic care for complex facial and oral reconstructions." },
];

export function Services() {
  return (
    <section id="services" className="relative py-[var(--section-py)] bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Our services</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive <span className="text-gradient">Dental Care</span> Under One Roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine check-ups to advanced cosmetic procedures — every treatment is delivered
            with precision, comfort and care.
          </p>
        </div>

        {/* Pro Horizontal Carousel on Mobile, Grid on Desktop */}
        <div className="mt-14 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 no-scrollbar">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="snap-center shrink-0 w-[85vw] max-w-[320px] sm:w-auto sm:max-w-none group relative flex flex-col h-full rounded-3xl bg-card border border-border/50 p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow overflow-hidden"
            >
              {/* Live Transformation: Ambient colored lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Pro Effect: Diagonal Shine */}
              <div className="absolute -inset-[200%] bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20 shadow-inner group-hover:bg-primary group-hover:ring-primary/50 transition-all duration-500">
                  <s.icon className="size-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="mt-6 font-bold text-xl text-foreground tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 pt-4 border-t border-border/40">
                  <a href="#book" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-glow transition-colors group/link">
                    Explore treatment <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

