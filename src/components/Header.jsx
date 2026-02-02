import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logoimg from "../assets/xlm_white.png";
import nailmetal from "../assets/nail-metal.svg";
/* ===== ANIMATION ===== */
const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  /* 🔒 BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="logo-icon">
              <img src={logoimg} alt="Flip XLM" />
            </div>
            <span className="logo-text">Flip XLM</span>
          </div>

          <nav className="nav desktop-nav">
            <a href="#asset">Asset Details</a>
            <a href="#rewards">Rewards</a>
            <a href="#how">How It Works</a>
            <a href="#trust">Trust</a>
          </nav>

          <div className="cta-hang-wrap">
            <img src={nailmetal} alt="" className="nail-img" />
            <div className="hang-swing">
              <span className="rope left"></span>
              <span className="rope right"></span>

              <div className="hang-badge">
                99%<br />
              </div>
            </div>

            {/* 🔘 BUTTON */}
            <a
              className="cta"
              href="https://lobstr.co/trade/XLM:GDHL4JZ4HVMIJGLITR3VNAKYZXT7U2F2XINN56XUBJWF5YN6FJG32XLM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Flip XLM – 0.01 XLM
            </a>
          </div>


          <button
            className="burger-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu />
          </button>
        </div>
      </header>

      {/* IOS MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="ios-backdrop"
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* MODAL (DRAGGABLE) */}
            <motion.div
              className="ios-modal"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => {
                if (info.offset.y > 120 || info.velocity.y > 800) {
                  setOpen(false);
                }
              }}
            >
              {/* HANDLE */}
              <div className="ios-handle" />

              {/* CLOSE */}
              <button
                className="ios-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <HiX />
              </button>

              {/* NAV */}
              <nav className="ios-nav">
                <a href="#asset" onClick={() => setOpen(false)}>Asset Details</a>
                <a href="#rewards" onClick={() => setOpen(false)}>Rewards</a>
                <a href="#how" onClick={() => setOpen(false)}>How It Works</a>
                <a href="#trust" onClick={() => setOpen(false)}>Trust</a>
              </nav>

              {/* CTA */}
              <a
                className="cta ios-cta"
                href="https://lobstr.co/trade/XLM:GDHL4JZ4HVMIJGLITR3VNAKYZXT7U2F2XINN56XUBJWF5YN6FJG32XLM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Flip XLM – 0.01 XLM
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
