import { motion } from "framer-motion";

const SponsorGfgTv = () => {
  return (
    <section className="m-4 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto shadow-xl">
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
        <motion.h3
          animate={{
            scale: [1, 1.03, 1],
            textShadow: [
              "0 0 10px rgba(0, 137, 94, 0.5)",
              "0 0 18px rgba(58, 178, 132, 0.6)",
              "0 0 10px rgba(0, 137, 94, 0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-[#00895e] via-[#3ab284] to-[#016ccc] bg-clip-text text-transparent"
          style={{ fontFamily: "Sofia Pro, system-ui, sans-serif" }}
        >
          GeeksforGeeks
        </motion.h3>

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
