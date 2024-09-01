import { motion } from "framer-motion";

export default function Loading(props) {
  const loadingVariants = {
    animate: {
      opacity: [0.5, 1, 0.7],
      rotate: [0, 360],
      scale: [1, 1.5, 1],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="loading" id={props.load ? "loading" : "loading-none"}>
      <motion.img
        src="/dq_logo.png"
        className="size-80"
        variants={loadingVariants}
        animate={loadingVariants.animate}
      />
    </div>
  );
}
