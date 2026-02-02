import { motion } from "framer-motion";
import { MdPushPin } from "react-icons/md";

import XRPimg from "../assets/xrp.png";
import QFSimg from "../assets/qfs.png";
import GOLDimg from "../assets/gold.png";
import SILVERimg from "../assets/silver.png";
import REALESTATEimg from "../assets/realestate.png";

/* ===== ANIMATION CONFIG ===== */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Rewards() {
  return (
    <section id="rewards" className="section highlight">
      {/* TITLE */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Daily Rewards by holding Flip XLM
      </motion.h3>

      {/* REWARDS */}
      <motion.div
        className="rewards-wrap"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* TOP ROW */}
        <motion.div className="rewards-row" variants={container}>
          <motion.div className="reward-card" variants={fadeUp}>
            <img src={XRPimg} alt="XRP" />
            XRP (Native)
          </motion.div>

          <motion.div className="reward-card" variants={fadeUp}>
            <img src={QFSimg} alt="QFS" />
            QFS
          </motion.div>

          <motion.div className="reward-card" variants={fadeUp}>
            <img src={GOLDimg} alt="Gold" />
            GOLD
          </motion.div>
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          className="rewards-row center"
          variants={container}
        >
          <motion.div className="reward-card" variants={fadeUp}>
            <img src={SILVERimg} alt="Silver" />
            SILVER
          </motion.div>

          <motion.div className="reward-card" variants={fadeUp}>
            <img src={REALESTATEimg} alt="Real Estate" />
            REALESTATE
          </motion.div>
        </motion.div>
      </motion.div>

      {/* NOTE */}
      <motion.p
        className="note"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MdPushPin className="note-icon" />
        Rewards are distributed automatically to eligible wallets holding
        Flip XLM and required trustlines.
      </motion.p>
    </section>
  );
}
