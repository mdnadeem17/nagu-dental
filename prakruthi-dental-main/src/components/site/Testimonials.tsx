import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import s2 from "@/assets/smile-2.jpg";
import s3 from "@/assets/smile-3.jpg";
import s4 from "@/assets/smile-4.jpg";

// No AI images allowed per user instruction

const reviews = [
  { 
    name: "Avinash Kulkarni", 
    role: "Patient", 
    img: s2,
    text: "I highly recommend this. The staff is very courteous. The dentist is very knowledgeable and very helpfull.This is by far the best dental clini I've been to! Dr Anand is very gentle and professional! The whole staff is super friendly and make u feel comfortable during your whole visit ." 
  },
  { 
    name: "Girish speaks", 
    role: "Patient", 
    img: s2,
    text: "Good, structured and quality treatment, good hygiene maintained, well trained staff, humble, knowledgeable and highly experienced doctor (Dr. Anand Kumar), reasonable and worth for each rupee." 
  },
  { 
    name: "Sandeep Kumar", 
    role: "Patient", 
    img: s3,
    text: "Thank you for Dr. ANAND KUMAR, so much for the excellent dental care you've always given me n my family. We are lucky to have you. You're the best. Excellent facilities, good follow up by the staff." 
  },
  { 
    name: "kavitha", 
    role: "Patient", 
    img: s4,
    text: "Well experienced doctors, good treatment in affordable price. Overall had a good experience with nice hospitality. I recommended my friend also for dental treatments." 
  },
  { 
    name: "Siddu Raj", 
    role: "Patient", 
    img: s2,
    text: "This clinic is very clean and hygienic they give very good tertment tq u" 
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-[var(--section-py)]">
      <div className="blob bg-secondary/25 size-[380px] left-0 top-1/2" />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Patient stories</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Loved by <span className="text-gradient">12,000+ patients</span>
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto relative">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-elevated min-h-[280px]">
            <Quote className="size-10 text-primary/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-4 text-lg md:text-xl text-foreground leading-relaxed">
                  "{reviews[i].text}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/30 shrink-0">
                    <span className="text-primary font-bold text-lg">{reviews[i].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{reviews[i].name}</p>
                    <p className="text-sm text-muted-foreground">{reviews[i].role}</p>
                  </div>
                  <div className="ml-auto flex text-amber-500">
                    {[...Array(5)].map((_, k) => <Star key={k} className="size-4 fill-current" />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button
                key={k}
                aria-label={`Show review ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
