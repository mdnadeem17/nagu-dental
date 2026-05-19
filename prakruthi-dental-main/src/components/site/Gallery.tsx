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
    <section id="gallery" className="relative py-[var(--section-py)] bg-gradient-to-b from-background to-surface overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="blob bg-primary/15 size-[300px] md:size-[500px] blur-[80px] -left-20 top-40 animate-pulse-glow" />
      <div className="blob bg-accent/15 size-[250px] md:size-[400px] blur-[80px] -right-20 bottom-20 animate-float" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Smile gallery</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Real Results, <span className="text-gradient">Real Smiles</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of the transformations we've crafted for our patients.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-card rounded-[2rem] p-3 border border-border shadow-soft card-hover"
            >
              {/* Image Container with Professional Studio Lighting */}
              <div className="relative w-full overflow-hidden rounded-[1.5rem] bg-white dark:bg-black/20 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-glow transition-all duration-500 group-hover:-translate-y-1 border border-border/40">
                {/* Subtle glass/gloss inner edge highlight */}
                <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/40 dark:ring-white/10 z-10 pointer-events-none" />
                <img
                  src={it.img}
                  alt={`${it.label} dental result`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text strictly tied to this image inside the card */}
              <figcaption className="mt-5 mb-3 text-center px-2">
                <span className="block text-xl font-bold text-foreground tracking-tight transition-colors group-hover:text-primary">
                  {it.label}
                </span>
                <div className="mt-2 h-[2px] w-12 bg-primary/20 mx-auto rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
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

