import { motion } from "framer-motion";

const SponsorGfgTv = () => {
  return (
    <section
      className="m-4 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto shadow-xl transform [scale:1.15]"
      style={{ transformOrigin: "center" }}
    >
      {/* Sponsor Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative text-center"
      >
        {/* Badge Pill */}
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500/20 via-teal-400/30 to-sky-500/20 border border-emerald-400/50 rounded-full px-6 py-3 backdrop-blur-sm">
          <motion.div
            animate={{}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-3 rounded-lg"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm sm:text-base font-semibold tracking-wide text-emerald-600 dark:text-emerald-300">
              Knowledge partner
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>
        </div>
        {/* Sponsor Name */}
        <div className="mt-6 ">
          <img
            src="events/Technovista2025/tv25-icons/GFG.png"
            alt="GeeksforGeeks Logo"
            className="h-5 sm:h-10 w-auto object-contain rounded"
          />
          </div>
        {/* Frame Corners */}
        <div className="absolute -top-4 -left-4 w-4 h-4 border-l-2 border-t-2 border-[#00895e]/60 rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-4 h-4 border-r-2 border-t-2 border-[#016ccc]/60 rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-4 h-4 border-l-2 border-b-2 border-[#00895e]/60 rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-r-2 border-b-2 border-[#016ccc]/60 rounded-br-lg" />
      </motion.div>
    </section>
  );
};

export default SponsorGfgTv;
