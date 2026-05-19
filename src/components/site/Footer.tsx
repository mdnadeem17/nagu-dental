import { Sparkles } from "lucide-react";
import logoImg from "@/assets/logo-final.png";

export function Footer() {
  return (
    <footer className="relative pt-12 md:pt-16 pb-8 bg-background">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid place-items-center size-14">
                <img src={logoImg} alt="Usha Dental Logo" className="w-full h-full object-contain" />
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                USHA DENTAL
              </span>
            </a>
            <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
              Expert dental care in Hegganahalli Cross, Bengaluru — delivered with warmth, precision and the latest technology.
            </p>
          </div>

          <Col title="Quick Links" links={[
            ["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Smiles", "#gallery"],
          ]} />
          <Col title="Services" links={[
            ["Root Canal", "#services"], ["Implants", "#services"], ["Maxillo", "#services"], ["Braces", "#services"],
          ]} />
          <div className="col-span-2 md:col-span-1">
            <Col title="Contact" links={[
              ["+91 88619 32535", "tel:+918861932535"],
              ["nagunagudental@gmail.com", "mailto:nagunagudental@gmail.com"],
              ["Hegganahalli Cross, BLR - 91", "#contact"],
            ]} />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col items-center justify-between gap-3 text-[10px] md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Usha Dental Clinic & Implant Centre.</p>
          <p>Crafted with care for healthier smiles.</p>
        </div>

      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm text-muted-foreground hover:text-primary transition">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
