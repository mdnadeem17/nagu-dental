import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 } as const,
  }),
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-[var(--section-py)] bg-gradient-to-b from-background to-surface overflow-hidden"
    >
      {/* ── Section ambient lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm gold blob — bottom-right */}
        <div
          className="absolute -right-20 bottom-0 size-[460px] rounded-full blur-[120px] opacity-30 animate-float"
          style={{ animationDelay: "3s", background: "radial-gradient(circle, #f7a13b 0%, transparent 70%)" }}
        />
        {/* Cool blue blob — top-left */}
        <div
          className="absolute -top-16 -left-16 size-[320px] rounded-full blur-[90px] opacity-20 animate-pulse"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Top beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        {/* Bottom beam */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center sm:text-left"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            Visit us
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="mt-10 lg:grid lg:grid-cols-2 gap-6 md:gap-8">

          {/* Info card with studio lighting */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Outer animated halo */}
            <motion.div
              className="absolute -inset-[2px] rounded-[28px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(247,161,59,0.45) 0%, rgba(56,189,248,0.2) 50%, rgba(247,161,59,0.45) 100%)",
              }}
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative glass rounded-3xl p-6 md:p-8 shadow-soft space-y-5 md:space-y-6 border border-primary/10 overflow-hidden">

              {/* Key-light radial — top-left */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 8% 10%, rgba(247,161,59,0.10) 0%, transparent 65%)",
                }}
              />

              {/* Fill-light — bottom-right (cool) */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 40% at 90% 90%, rgba(56,189,248,0.06) 0%, transparent 65%)",
                }}
              />

              {/* Scan sheen */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.06) 50%, transparent 75%)",
                }}
                animate={{ x: ["-120%", "220%"] }}
                transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 6 }}
              />

              {/* Contact items */}
              <div className="relative z-10 space-y-5 md:space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Mohan Theatre, 10/2, 1st floor, Chikkathimme Gowdru complex, 1st Main Rd, Hegganahalli Cross, Bengaluru - 560091",
                    href: "https://maps.google.com/?q=Nagu+Nagu+Dental+Clinic+Bengaluru",
                  },
                  { icon: Phone, label: "Phone",        value: "+91 88619 32535",           href: "tel:+918861932535" },
                  { icon: Mail,  label: "Email",        value: "nagunagudental@gmail.com",   href: "mailto:nagunagudental@gmail.com" },
                  { icon: Clock, label: "Clinic Hours", value: "09:00 AM – 09:00 PM" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Item {...item} />
                  </motion.div>
                ))}

                <div className="pt-3 flex items-center justify-center sm:justify-start gap-3">
                  {[Instagram, Facebook, Twitter].map((Ic, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      aria-label="Social"
                      whileHover={{ scale: 1.12, y: -2 }}
                      className="size-10 rounded-xl border border-border bg-white grid place-items-center
                        text-muted-foreground hover:text-primary hover:border-primary
                        hover:shadow-[0_0_12px_rgba(247,161,59,0.4)] transition-all duration-300"
                    >
                      <Ic className="size-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map — with glow ring */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mt-6 lg:mt-0"
          >
            {/* Outer animated halo */}
            <motion.div
              className="absolute -inset-[2px] rounded-[28px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(56,189,248,0.3) 0%, rgba(247,161,59,0.4) 50%, rgba(56,189,248,0.3) 100%)",
              }}
              animate={{ opacity: [0.3, 0.65, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-elevated min-h-[300px] md:min-h-[380px] ring-1 ring-primary/10">
              <iframe
                title="Nagu Nagu Dental Clinic location"
                src="https://www.google.com/maps?q=Nagu+Nagu+Dental+Clinic+Bengaluru&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const Comp: any = href ? "a" : "div";
  const extra = href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Comp href={href} {...extra} className="flex items-start gap-4 group">
      <span className="size-10 md:size-11 shrink-0 rounded-xl btn-primary grid place-items-center
        shadow-soft transition-all duration-300
        group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(247,161,59,0.5)]">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm md:text-base text-foreground font-medium group-hover:text-primary transition">
          {value}
        </p>
      </div>
    </Comp>
  );
}
