import React from "react";
import { motion } from "framer-motion";

const BADGES = [
  { label: "120Hz Display", pos: "top-0 left-0 sm:-left-6", delay: 0 },
  { label: "50MP Camera", pos: "top-0 right-0 sm:-right-6", delay: 0.6 },
  { label: "5000mAh Battery", pos: "bottom-8 left-0 sm:-left-10", delay: 1.2 },
  { label: "Snapdragon 8 Gen 4", pos: "bottom-8 right-0 sm:-right-10", delay: 1.8 },
];

export default function PhoneOrbit({ image }) {
  return (
    <div className="relative perspective-1000 mx-auto w-64 sm:w-72">
      {/* Phone mockup, gentle tilt on hover */}
      <motion.div
        initial={{ rotateY: -6, rotateX: 3 }}
        whileHover={{ rotateY: 0, rotateX: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, default: { duration: 0.4 } }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-navy shadow-2xl aspect-[9/18.5]"
      >
        <img src={image} alt="Nova smartphone" className="w-full h-full object-cover" />
      </motion.div>

      {/* Orbiting spec badges */}
      {BADGES.map((b) => (
        <motion.span
          key={b.label}
          className={`hidden sm:block absolute ${b.pos} bg-white shadow-lg rounded-full px-3.5 py-2 text-[11px] font-semibold text-navy border border-navy/10 z-20`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {b.label}
        </motion.span>
      ))}

      {/* Ambient glow behind phone */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full bg-blueprint/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
