import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  "Teeth Cleaning", "Root Canal", "Dental Implants", "Teeth Whitening",
  "Braces & Aligners", "Smile Designing", "Pediatric Dentistry", "Cosmetic Dentistry",
];

export function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="book" className="relative py-[var(--section-py)] bg-gradient-to-b from-surface to-background overflow-hidden">

      {/* ── Section ambient lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm gold blob — top-right */}
        <div
          className="absolute -top-16 -right-20 size-[480px] rounded-full blur-[120px] opacity-35 animate-pulse"
          style={{ background: "radial-gradient(circle, #f7a13b 0%, transparent 70%)" }}
        />
        {/* Cool accent blob — bottom-left */}
        <div
          className="absolute bottom-0 -left-16 size-[320px] rounded-full blur-[90px] opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Top horizontal beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Bottom horizontal beam */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* Left — copy block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest
            px-4 py-1.5 rounded-full border border-primary/20 glass mb-4">
            <Sparkles className="size-3.5" /> Book a visit
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Schedule Your <span className="text-gradient">Perfect Smile</span> Today
          </h2>
          <p className="mt-4 text-sm md:text-lg text-muted-foreground max-w-md mx-auto sm:mx-0">
            Tell us a little about you and your needs. Our concierge team will confirm your
            appointment within 1 business hour.
          </p>
          <ul className="mt-6 space-y-2.5 inline-block sm:block text-left">
            {["Free initial consultation", "Same-day emergency slots", "Insurance & EMI accepted"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <CheckCircle2 className="size-4 md:size-5 text-primary drop-shadow-[0_0_6px_rgba(247,161,59,0.6)]" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — form with premium lighting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Animated halo ring around the form */}
          <motion.div
            className="absolute -inset-[3px] rounded-[28px] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(247,161,59,0.5) 0%, rgba(56,189,248,0.25) 50%, rgba(247,161,59,0.5) 100%)",
            }}
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.form
            onSubmit={onSubmit}
            className="relative glass rounded-3xl p-5 md:p-8 shadow-elevated space-y-4 overflow-hidden"
          >
            {/* Layer 1 — top-left key-light radial */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 65% 45% at 10% 10%, rgba(247,161,59,0.11) 0%, transparent 65%)",
              }}
            />

            {/* Layer 2 — bottom-right cool fill */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 55% 40% at 90% 90%, rgba(56,189,248,0.07) 0%, transparent 65%)",
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
                repeatDelay: 5,
              }}
            />

            {/* Form fields */}
            <div className="relative z-10 space-y-4">
              <div className="grid xs:grid-cols-2 gap-4">
                <Field label="Full Name"  name="name"  placeholder="Jane Doe" />
                <Field label="Phone"      name="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <div className="grid xs:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] md:text-sm font-medium text-foreground">Service</label>
                  <select
                    required
                    className="mt-1 w-full rounded-xl border border-input bg-white px-3 md:px-4 py-2.5 md:py-3
                      text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40
                      focus:border-primary transition"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <Field label="Preferred Date" name="date" type="date" noRequire />
              </div>
              <div>
                <label className="text-[10px] md:text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={2}
                  placeholder="Tell us a bit about your concern..."
                  className="mt-1 w-full rounded-xl border border-input bg-white px-3 md:px-4 py-2.5 md:py-3
                    text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40
                    focus:border-primary transition resize-none"
                />
              </div>

              {/* Submit — glowing CTA */}
              <div className="relative">
                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2
                    rounded-xl px-6 py-3.5 font-semibold relative overflow-hidden group"
                >
                  {/* Sheen on button hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                    transition-transform duration-700 ease-in-out pointer-events-none" />
                  <Calendar className="size-5 relative z-10" />
                  <span className="relative z-10">Confirm Appointment</span>
                </button>
                {/* Glow halo under button */}
                <div className="absolute inset-x-8 -bottom-2 h-6 blur-xl rounded-full bg-primary/40 pointer-events-none" />
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-center text-secondary font-medium flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="size-4" /> Thank you! We'll be in touch shortly.
                </motion.p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, noRequire }: {
  label: string; name: string; type?: string; placeholder?: string; noRequire?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] md:text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={!noRequire}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-input bg-white px-3 md:px-4 py-2.5 md:py-3
          text-sm text-foreground placeholder:text-muted-foreground/70
          focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  );
}
