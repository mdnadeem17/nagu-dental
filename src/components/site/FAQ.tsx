import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Do you accept dental insurance?",       a: "Yes — we accept most major insurance providers and offer flexible EMI plans for uncovered treatments." },
  { q: "Are your procedures painless?",          a: "We use modern local anaesthesia and optional sedation to ensure all procedures are comfortable and pain-free." },
  { q: "How often should I visit the dentist?",  a: "We recommend a check-up and cleaning every 6 months to maintain optimal oral health." },
  { q: "Do you offer emergency dental care?",    a: "Absolutely. We reserve same-day slots daily for dental emergencies — call us anytime." },
  { q: "How long do dental implants last?",      a: "With proper care, dental implants can last 25+ years and often a lifetime." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-[var(--section-py)] overflow-hidden">

      {/* ── Section ambient lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm gold blob — top-left */}
        <div
          className="absolute -top-20 -left-20 size-[420px] rounded-full blur-[110px] opacity-25 animate-float"
          style={{ background: "radial-gradient(circle, #f7a13b 0%, transparent 70%)" }}
        />
        {/* Cool accent blob — bottom-right */}
        <div
          className="absolute -bottom-10 -right-16 size-[320px] rounded-full blur-[90px] opacity-20"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Top beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest
            px-4 py-1.5 rounded-full border border-primary/20 glass mb-4">
            <HelpCircle className="size-3.5" /> FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 shadow-[0_0_24px_-4px_rgba(247,161,59,0.35)]"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                {/* Active panel key-light radial */}
                {isOpen && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 10% 10%, rgba(247,161,59,0.09) 0%, transparent 70%)",
                    }}
                  />
                )}

                {/* Glowing left edge bar when open */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-500 ${
                    isOpen
                      ? "bg-primary shadow-[0_0_10px_rgba(247,161,59,0.6)]"
                      : "bg-transparent"
                  }`}
                />

                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left relative z-10"
                >
                  <span className={`font-semibold transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <Plus
                      className={`size-5 transition-colors duration-300 ${
                        isOpen ? "text-primary drop-shadow-[0_0_6px_rgba(247,161,59,0.8)]" : "text-primary/60"
                      }`}
                    />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
