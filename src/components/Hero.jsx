import { motion } from "framer-motion";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* TITLE */}
        <motion.h1 variants={fadeUp}>
          Flip XLM – The Future of Stellar Finance
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h2 variants={fadeUp}>
          Built for the post-flip financial system
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p variants={fadeUp}>
          Flip XLM is a Stellar-based digital asset designed to operate as a
          next-generation utility and reward token within the Stellar Vault
          ecosystem. It integrates rewards, asset backing concepts, and
          on-chain transparency into a single, simplified system
        </motion.p>
<br />
        {/* ICO TEXT */}
        <motion.p className="ico-highlight" variants={fadeUp}>
          Flip XLM is available now at just{" "}
          <strong>0.01 XLM (99% Discount)</strong> during ICO Phase!
        </motion.p>

        {/* BUTTONS */}
        <motion.div className="buttons" variants={container}>
          <motion.a
            href="https://lobstr.co/trade/XLM:GDHL4JZ4HVMIJGLITR3VNAKYZXT7U2F2XINN56XUBJWF5YN6FJG32XLM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            variants={fadeUp}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <FaExchangeAlt className="btn-icon" />
            Trade Flip XLM
          </motion.a>

          <motion.a
            href="https://stellar.expert/explorer/public/asset/XLM-GDHL4JZ4HVMIJGLITR3VNAKYZXT7U2F2XINN56XUBJWF5YN6FJG32XLM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            variants={fadeUp}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <MdOutlineVerified className="btn-icon" />
            View Asset on Stellar
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
