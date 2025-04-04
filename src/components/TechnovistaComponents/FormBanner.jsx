import React from "react";
import { motion } from "framer-motion";
import { Cloud, Server, Database, Rocket, Flame } from "lucide-react";

const FormBanner = () => {
  return (
    <motion.div
      className="text-white text-center w-full flex flex-col justify-center items-center h-full rounded-l-lg bg-gradient-to-r from-yellow-500 to-orange-400 relative overflow-hidden"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Rocket Animation - To Top Right */}
      <motion.div
        className="absolute"
        initial={{ x: "50%", y: "50%", rotate: -45 }}
        animate={{ x: "120%", y: "-20%" }}
        transition={{
          delay: 1,
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="relative">
          <Rocket size={36} className="text-white" />
          {/* Fire/Exhaust Effect */}
          <motion.div
            className="absolute -bottom-4 -left-2 rotate-45"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Flame size={24} className="text-orange-500" />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-3 rotate-45"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Flame size={20} className="text-yellow-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Rocket Animation - To Top Left */}
      <motion.div
        className="absolute"
        initial={{ x: "50%", y: "50%", rotate: -135 }}
        animate={{ x: "-20%", y: "-20%" }}
        transition={{
          delay: 1,
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="relative">
          <Rocket size={36} className="text-white" />
          {/* Fire/Exhaust Effect */}
          <motion.div
            className="absolute -bottom-4 -left-2 rotate-135"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Flame size={24} className="text-orange-500" />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-3 rotate-135"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Flame size={20} className="text-yellow-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to <br /> TechnoVista 2K24
      </motion.h1>

      {/* Event Title at the Top */}
      <div className="flex items-center gap-2 mb-3">
        <motion.h1
          className="font-bold text-4xl"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Techno
        </motion.h1>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Cloud size={40} className="text-white" />
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-200 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Master Cloud Basics & AWS with industry experts!
      </motion.p>

      {/* Features Section */}
      <div className="flex gap-6 justify-center mb-3">
        <motion.div className="p-4 rounded-lg bg-white text-blue-900 shadow-lg flex flex-col items-center w-44 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Server size={30} className="mb-2" />
          <h5 className="font-bold">Cloud Fundamentals</h5>
          <p className="text-sm text-center">
            Understand cloud computing, virtualization & storage.
          </p>
        </motion.div>

        <motion.div className="p-4 rounded-lg bg-white text-blue-900 shadow-lg flex flex-col items-center w-44 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Database size={30} className="mb-2" />
          <h5 className="font-bold">AWS Mastery</h5>
          <p className="text-sm text-center">
            Learn AWS services, EC2, S3, and serverless computing.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="text-center text-gray-300 mt-2 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-semibold text-gray-100">For any queries, contact</p>

        <p className="font-light text-gray-100">Student Coordinator:</p>
        <p className="font-light text-gray-100">Richard Luke(7207258403)</p>

        <span className="font-light text-gray-100">Ch Renuka(9063108170)</span>
      </motion.div>
    </motion.div>
  );
};

export default FormBanner;
