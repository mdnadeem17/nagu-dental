import { motion } from "framer-motion";
import { Calendar, Phone, Star, ShieldCheck, Award } from "lucide-react";
import c2 from "@/assets/clinical-2.png";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-36 pb-12 md:pb-20 overflow-hidden">
      {/* Ambient blobs */}
      <div className="blob bg-primary/40 size-[320px] md:size-[480px] -top-20 -left-32 animate-float" />
      <div className="blob bg-secondary/30 size-[280px] md:size-[420px] top-40 -right-24 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1 rounded-full bg-primary/30"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 37) % 90 + 5}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass shadow-soft mb-6 text-sm">
            <ShieldCheck className="size-4 text-primary" />
            <span className="text-foreground font-medium">Rated 5.0 ★ by 192+ patients</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
            Creating Beautiful & <span className="text-gradient">Healthy Smiles</span> With Advanced Dental Care
          </h1>

          <p className="mt-5 text-sm md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Modern dental treatments with personalized care, advanced technology, and a comfortable patient experience — designed around you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold">
              <Calendar className="size-5" /> Book Appointment
            </a>
            <a href="tel:+919632000667" className="btn-ghost-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold">
              <Phone className="size-5" /> Call Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Stat value={30} suffix="+" label="Years" />
            <Stat value={15} suffix="K+" label="Patients" />
            <Stat value={98} suffix="%" label="Satisfaction" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elevated">
            <img
              src={c2}
              alt="Professional dental transformation at Prakruthi Dental"
              width={1280}
              height={1280}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
          </div>

          {/* Floating review badge - hidden on very small screens to save space */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden sm:block absolute -left-4 md:-left-10 bottom-10 glass rounded-2xl p-4 shadow-glow w-60"
          >
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="mt-2 text-sm text-foreground font-semibold">5.0 / 5.0 patient rating</p>
            <p className="text-xs text-muted-foreground">From 192+ Google reviews</p>
          </motion.div>

          {/* Floating award badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 md:-right-6 top-8 glass rounded-2xl p-4 shadow-glow flex items-center gap-3"
          >
            <span className="grid place-items-center size-10 rounded-xl btn-primary">
              <Award className="size-5" />
            </span>
            <div className="hidden xs:block">
              <p className="text-sm font-semibold text-foreground">Award-Winning</p>
              <p className="text-xs text-muted-foreground">Best Clinic 2024</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-foreground">
        <Counter to={value} />{suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
