import { motion } from "framer-motion";
import { MdWarningAmber } from "react-icons/md";

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

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      {/* TITLE */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        How to Buy Flip XLM
      </motion.h3>

      {/* STEPS */}
      <motion.ol
        className="steps"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.li variants={fadeUp}>
          Buy Flip XLM on the Stellar DEX
        </motion.li>
        <motion.li variants={fadeUp}>
          Add required reward trustlines
        </motion.li>
        <motion.li variants={fadeUp}>
          Hold Flip XLM in your wallet
        </motion.li>
        <motion.li variants={fadeUp}>
          Receive daily rewards automatically
        </motion.li>
      </motion.ol>

      {/* WARNING */}
      <motion.p
        className="warning"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MdWarningAmber className="warning-icon" />
        Private ICO Access, the Flip and QFS are Exclusive for the Whiplash
        Community Only!
      </motion.p>
    </section>
  );
}
