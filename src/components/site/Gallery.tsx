import { motion } from "framer-motion";
import c1 from "@/assets/clinical-1.png";
import c2 from "@/assets/clinical-2.png";
import c3 from "@/assets/clinical-3.png";
import c4 from "@/assets/clinical-4.png";
import c5 from "@/assets/clinical-5.png";

const items = [
  { img: c1, label: "Orthodontic Braces" },
  { img: c2, label: "Dental Correction" },
  { img: c3, label: "Full Mouth Rehab" },
  { img: c4, label: "Clear Aligners" },
  { img: c5, label: "Esthetic Restoration" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-[var(--section-py)] bg-gradient-to-b from-background to-surface overflow-hidden"
    >
      {/* ── Section ambient lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm pulse blob — left */}
        <div
          className="absolute -left-20 top-40 size-[500px] rounded-full blur-[90px] opacity-35 animate-pulse-glow"
          style={{ background: "radial-gradient(circle, #f7a13b 0%, transparent 70%)" }}
        />
        {/* Cool accent blob — right */}
        <div
          className="absolute -right-20 bottom-20 size-[400px] rounded-full blur-[80px] opacity-25 animate-float"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Horizontal centre beam at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        {/* Subtle vignette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            Smile gallery
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Real Results, <span className="text-gradient">Real Smiles</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of the transformations we've crafted for our patients.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-card rounded-[2rem] p-3 border border-border shadow-soft card-hover overflow-hidden"
            >
              {/* Image with studio lighting stack */}
              <div className="relative w-full overflow-hidden rounded-[1.5rem] bg-white dark:bg-black/20
                shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)]
                group-hover:shadow-[0_20px_60px_-15px_rgba(247,161,59,0.35)]
                transition-all duration-500 border border-border/40">

                {/* Layer 1 — inner glass ring */}
                <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/40 dark:ring-white/10 z-20 pointer-events-none" />

                {/* Layer 2 — top-left corner studio key-light */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.5rem]"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 15% 15%, rgba(255,255,255,0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Layer 3 — bottom vignette (always on) */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[1.5rem]
                  bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Layer 4 — animated scan sheen */}
                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none rounded-[1.5rem]"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                  }}
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{
                    duration: 3.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3 + i * 0.8,
                  }}
                />

                <img
                  src={it.img}
                  alt={`${it.label} dental result`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-106"
                />
              </div>

              {/* Caption */}
              <figcaption className="mt-5 mb-3 text-center px-2">
                <span className="block text-xl font-bold text-foreground tracking-tight transition-colors group-hover:text-primary">
                  {it.label}
                </span>
                <div className="mt-2 h-[2px] w-12 bg-primary/25 mx-auto rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--color-primary)]" />
                <span className="block text-sm text-muted-foreground mt-2 font-medium">
                  Smile Transformation
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
