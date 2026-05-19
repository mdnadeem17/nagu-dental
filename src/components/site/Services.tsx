import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic: Change card every 2 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.querySelector("article")?.clientWidth || 320;
        const gap = 32; // gap-8
        const totalStep = cardWidth + gap;

        // If we've reached the end, scroll back to the start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: totalStep, behavior: "smooth" });
        }
      }
    }, 2000); // 2 sec as requested

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="services" className="relative py-[var(--section-py)] overflow-hidden bg-background">
      {/* Background Lighting */}
      <div className="absolute top-0 left-0 size-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6 text-sm font-bold text-primary uppercase tracking-widest">
             <Stethoscope className="size-4" />
             <span>Clinical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">
            Our <span className="text-gradient">Specialized</span> Services
          </h2>
        </motion.div>

        {/* Horizontal Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {services.map((s, idx) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="snap-center shrink-0 w-[85vw] md:w-[350px] relative flex flex-col rounded-[2.5rem] bg-surface border border-border/40 p-6 shadow-soft hover:shadow-snake transition-all duration-500 cursor-default overflow-hidden ring-1 ring-primary/5"
              >
                {/* Lighting effects */}
                <div className="absolute inset-0 bg-radial-[at_20%_20%] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <s.icon className="size-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="mt-6 font-black text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  
                  <p className="mt-3 text-muted-foreground text-base leading-relaxed flex-1 font-medium">
                    {s.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
                    <a
                      href="#book"
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:gap-4 transition-all duration-300"
                    >
                      Book treatment <ArrowRight className="size-4" />
                    </a>
                    <span className="text-3xl font-black text-foreground/5 pointer-events-none group-hover:opacity-20 transition-opacity">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-primary transition-all duration-700 ease-out shadow-[0_0_15px_var(--color-primary)]" />
              </motion.article>
            ))}
          </div>

          {/* Navigation Hints - Only visible on hover/active */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <div className="size-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary shadow-xl cursor-pointer hover:bg-primary hover:text-white transition-all" onClick={() => scrollRef.current?.scrollBy({ left: -432, behavior: "smooth" })}>
              <ArrowRight className="size-6 rotate-180" />
            </div>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <div className="size-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary shadow-xl cursor-pointer hover:bg-primary hover:text-white transition-all" onClick={() => scrollRef.current?.scrollBy({ left: 432, behavior: "smooth" })}>
              <ArrowRight className="size-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
