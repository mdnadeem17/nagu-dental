import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do you accept dental insurance?", a: "Yes — we accept most major insurance providers and offer flexible EMI plans for uncovered treatments." },
  { q: "Are your procedures painless?", a: "We use modern local anaesthesia and optional sedation to ensure all procedures are comfortable and pain-free." },
  { q: "How often should I visit the dentist?", a: "We recommend a check-up and cleaning every 6 months to maintain optimal oral health." },
  { q: "Do you offer emergency dental care?", a: "Absolutely. We reserve same-day slots daily for dental emergencies — call us anytime." },
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last 25+ years and often a lifetime." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-[var(--section-py)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0">
                    <Plus className="size-5 text-primary" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
