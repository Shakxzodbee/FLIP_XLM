import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

/* ===== ANIMATION CONFIG ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AssetDetails() {
  const issuer =
    "GDHL4JZ4HVMIJGLITR3VNAKYZXT7U2F2XINN56XUBJWF5YN6FJG32XLM";

  const [toast, setToast] = useState(false);

  const copyIssuer = async () => {
    try {
      await navigator.clipboard.writeText(issuer);
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section id="asset" className="section">
      {/* TITLE */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Asset Details
      </motion.h3>

      {/* CARD */}
      <motion.div
        className="card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p><strong>Asset Name:</strong> Flip XLM</p>
        <p><strong>Asset Code:</strong> XLM</p>

        <p><strong>Issuer Address:</strong></p>

        <code
          className="copy-code"
          onClick={copyIssuer}
          title="Click to copy issuer address"
        >
          {issuer}
        </code>

        <p>
          <strong>Home Domain:</strong>{" "}
          <a
            href="https://www.flipxlm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-link"
          >
            https://www.flipxlm.com
          </a>
        </p>

        <p><strong>Status:</strong> ICO / Early Distribution Phase</p>
        <p><strong>Pegging (Planned):</strong> 1:1 with native XLM after ICO</p>
        <p><strong>Transparency:</strong> Fully verifiable on Stellar Explorer</p>
        <p><strong>Network:</strong> Stellar (Public Network)</p>
      </motion.div>

      {/* 🔥 TOAST (PORTAL + ANIMATEPRESENCE) */}
      {createPortal(
        <AnimatePresence>
          {toast && (
            <motion.div
              className="toast"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              Issuer address copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
