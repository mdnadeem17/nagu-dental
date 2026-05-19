import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-[var(--section-py)] bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-center sm:text-left">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Visit us</span>
          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="mt-10 lg:grid lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-8 shadow-soft space-y-5 md:space-y-6"
          >
            <Item
              icon={MapPin}
              label="Address"
              value="791, Guddanna Centre, Magadi Main Road, Kamakshipalya, Opposite Muthoot Finance, Vijayanagar, Bengaluru - 560079"
              href="https://maps.google.com/?q=PRAKRUTHI+DENTAL+Specialities+Kamakshipalya+Bengaluru"
            />
            <Item icon={Phone} label="Phone" value="+91 96320 00667" href="tel:+919632000667" />
            <Item icon={Mail} label="Email" value="prakruthidental@gmail.com" href="mailto:prakruthidental@gmail.com" />
            <Item icon={Clock} label="Clinic Hours" value="Mon – Sat: 10 AM – 1 PM, 5:30 PM – 9 PM" />

            <div className="pt-3 flex items-center justify-center sm:justify-start gap-3">
              {[Instagram, Facebook, Twitter].map((Ic, i) => (
                <a key={i} href="#" aria-label="Social" className="size-10 rounded-xl border border-border bg-white grid place-items-center text-muted-foreground hover:text-primary hover:border-primary transition">
                  <Ic className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-0 rounded-3xl overflow-hidden shadow-elevated min-h-[300px] md:min-h-[380px]"
          >
            <iframe
              title="PRAKRUTHI DENTAL Specialities location"
              src="https://www.google.com/maps?q=PRAKRUTHI+DENTAL+Specialities+Kamakshipalya+Bengaluru&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[300px] border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Comp: any = href ? "a" : "div";
  const extra = href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Comp href={href} {...extra} className="flex items-start gap-4 group">
      <span className="size-10 md:size-11 shrink-0 rounded-xl btn-primary grid place-items-center shadow-soft">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm md:text-base text-foreground font-medium group-hover:text-primary transition">{value}</p>
      </div>
    </Comp>
  );
}

