import { motion } from "framer-motion";

/* ===== ANIMATION CONFIG ===== */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Trust() {
  return (
    <section id="trust" className="section">
      {/* TITLE */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Trust & Transparency
      </motion.h3>

      {/* LIST */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.li variants={fadeUp}>
          Public issuer address
        </motion.li>

        <motion.li variants={fadeUp}>
          Verify Stellar.toml:{" "}
          <a
            href="https://flipxlm.com/.well-known/stellar.toml"
            target="_blank"
            rel="noopener noreferrer"
          >
            View File
          </a>
        </motion.li>

        <motion.li variants={fadeUp}>
          Fully on-chain reward tracking
        </motion.li>
      </motion.ul>

      {/* BADGE */}
      <motion.div
        className="badge"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Built on Stellar • Open Ledger • Public Verification
      </motion.div>
    </section>
  );
}
