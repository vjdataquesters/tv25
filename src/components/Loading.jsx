import { motion } from "framer-motion";

export default function Loading(props) {
  const loadingVariants = {
    animate: {
      opacity: [0.5, 1, 0.7],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="loading" id={props.load ? "loading" : "loading-none"}>
      <motion.img
        src="/logo.png"
        className="size-56 md:size-72"
        variants={loadingVariants}
        animate={loadingVariants.animate}
        draggable={false}
      />
    </div>
  );
}
