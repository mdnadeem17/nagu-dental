import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Mohd Usama",
    role: "Verified Patient",
    text: "I had my wisdom tooth extraction and RCT done at NAGU Dental Advance Multi-speciality Clinic, and my experience was excellent. The doctor handled the entire treatment very professionally and explained every step clearly, which made me feel comfortable and stress-free.",
  },
  {
    name: "Manjunath Y C",
    role: "Verified Patient",
    text: "Flexible scheduling, great doctor. I am incredibly grateful for the exceptional care provided by Doctor at NAGU Dental advance multi-speciality clinic. Simply 5 STAR dental care at very low cost.",
  },
  {
    name: "Rebel Akbar",
    role: "Verified Patient",
    text: "5/5 stars! I visited NAGU Dental for a tooth extraction and couldn't be happier with the care I received. The doctor was exceptionally friendly and walked me through the whole process, which took away all my anxiety.",
  },
  {
    name: "Srikantha Sri",
    role: "Verified Patient",
    text: "Got my root canal treatment done. Very well maintained clinic with very affordable charges. Overall the experience was good. Highly recommended for anyone looking for quality dental care.",
  },
  {
    name: "B.M.Rudresh",
    role: "Professor",
    text: "I underwent deep cleaning, flap surgery and root canal. Really I experienced motherly care about my dental problems. After dental treatment in this clinic, my speech and confidence have improved significantly.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-[var(--section-py)] overflow-hidden">

      {/* ── Section ambient lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm gold blob — left */}
        <div
          className="absolute -left-20 top-1/3 size-[460px] rounded-full blur-[110px] opacity-30 animate-float"
          style={{ background: "radial-gradient(circle, #f7a13b 0%, transparent 70%)" }}
        />
        {/* Cool blue accent — right */}
        <div
          className="absolute -right-16 bottom-0 size-[340px] rounded-full blur-[90px] opacity-20"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Horizontal shimmer beam — top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Horizontal shimmer beam — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            Patient stories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by{" "}
            <span className="text-gradient">108+ Happy Patients</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 max-w-3xl mx-auto"
        >
          {/* Outer animated halo ring */}
          <div className="relative">
            <motion.div
              className="absolute -inset-[3px] rounded-[28px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(247,161,59,0.55) 0%, rgba(56,189,248,0.35) 50%, rgba(247,161,59,0.55) 100%)",
              }}
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative glass rounded-3xl p-8 md:p-12 shadow-elevated border border-primary/15 min-h-[260px] overflow-hidden">

              {/* Layer 1 — top-left key-light radial */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 10% 10%, rgba(247,161,59,0.12) 0%, transparent 65%)",
                }}
              />

              {/* Layer 2 — bottom-right counter-light (cool) */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 45% at 90% 90%, rgba(56,189,248,0.08) 0%, transparent 65%)",
                }}
              />

              {/* Layer 3 — animated scan sheen */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.07) 50%, transparent 75%)",
                }}
                animate={{ x: ["-120%", "220%"] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />

              {/* Glowing quote icon */}
              <div className="relative inline-block">
                <Quote className="size-10 text-primary/40" />
                <div
                  className="absolute inset-0 blur-[12px] opacity-60"
                  style={{ background: "rgba(247,161,59,0.4)", borderRadius: "50%" }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <p className="mt-4 text-base md:text-xl text-foreground leading-relaxed">
                    "{reviews[i].text}"
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    {/* Avatar with glow ring */}
                    <div className="relative shrink-0">
                      <div className="size-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-2 ring-primary/30">
                        <span className="text-primary font-bold text-lg">{reviews[i].name.charAt(0)}</span>
                      </div>
                      <motion.div
                        className="absolute -inset-1 rounded-full pointer-events-none"
                        style={{ boxShadow: "0 0 14px 4px rgba(247,161,59,0.35)" }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">{reviews[i].name}</p>
                      <p className="text-xs text-muted-foreground">{reviews[i].role}</p>
                    </div>

                    <div className="ml-auto flex text-amber-500 gap-0.5">
                      {[...Array(5)].map((_, k) => (
                        <Star key={k} className="size-4 fill-current drop-shadow-[0_0_4px_rgba(251,191,36,0.7)]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button
                key={k}
                aria-label={`Review ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  k === i
                    ? "w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
