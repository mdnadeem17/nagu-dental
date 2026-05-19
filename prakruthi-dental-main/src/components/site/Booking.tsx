import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

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
    <section id="book" className="relative py-[var(--section-py)] bg-gradient-to-b from-surface to-background">
      <div className="blob bg-primary/25 size-[320px] md:size-[420px] -right-20 top-20" />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Book a visit</span>
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
                <CheckCircle2 className="size-4 md:size-5 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-5 md:p-8 shadow-elevated space-y-4"
        >
          <div className="grid xs:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" placeholder="Jane Doe" />
            <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          <div className="grid xs:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] md:text-sm font-medium text-foreground">Service</label>
              <select required className="mt-1 w-full rounded-xl border border-input bg-white px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition">
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
              className="mt-1 w-full rounded-xl border border-input bg-white px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold"
          >
            <Calendar className="size-5" /> Confirm Appointment
          </button>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-center text-secondary font-medium flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="size-4" /> Thank you! We'll be in touch shortly.
            </motion.p>
          )}
        </motion.form>
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
        className="mt-1 w-full rounded-xl border border-input bg-white px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  );
}

