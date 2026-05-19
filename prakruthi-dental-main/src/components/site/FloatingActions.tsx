import { useEffect, useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      >
        <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary" />
      </motion.div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919632000667"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center text-white shadow-glow animate-pulse-glow"
        style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
      >
        <MessageCircle className="size-6" />
      </a>

      {/* Sticky CTA on mobile */}
      {show && (
        <motion.a
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          href="#book"
          className="sm:hidden fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 btn-primary rounded-full px-5 py-3 text-sm font-semibold"
        >
          <Calendar className="size-4" /> Book
        </motion.a>
      )}
    </>
  );
}
