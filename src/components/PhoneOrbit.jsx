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
    <div className="phone-orbit-3d relative perspective-1000 mx-auto w-64 sm:w-72">
      {/* 3D floor reflection / shadow under phone */}
      <div className="phone-shadow-3d" aria-hidden="true" />

      {/* Phone mockup, gentle tilt on hover, floating animation */}
      <motion.div
        initial={{ rotateY: -8, rotateX: 4, z: 0 }}
        whileHover={{ rotateY: 0, rotateX: 0, z: 40, scale: 1.03 }}
        animate={{
          y: [0, -12, 0],
          rotateZ: [0, 1.2, 0, -1.2, 0],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          default: { duration: 0.5, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="phone-frame-3d relative z-10 rounded-[2rem] overflow-hidden border-4 border-navy shadow-2xl aspect-[9/18.5]"
      >
        {/* Screen image */}
        <img
          src={image}
          alt="Nova smartphone"
          className="w-full h-full object-cover"
        />

        {/* Glass reflection sweep on screen */}
        <motion.div
          className="phone-glare-3d absolute inset-0 pointer-events-none"
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        />

        {/* Inner edge highlight for 3D depth */}
        <div className="phone-inner-highlight absolute inset-0 pointer-events-none rounded-[1.6rem]" />
      </motion.div>

      {/* Orbiting spec badges — now with 3D float + tilt */}
      {BADGES.map((b) => (
        <motion.span
          key={b.label}
          className={`badge-3d hidden sm:block absolute ${b.pos} bg-white shadow-lg rounded-full px-3.5 py-2 text-[11px] font-semibold text-navy border border-navy/10 z-20`}
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            y: [0, -10, 0],
            rotateY: [0, 8, 0, -8, 0],
            rotateX: [0, -4, 0, 4, 0],
          }}
          transition={{
            y: { duration: 3.5, delay: b.delay, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 6, delay: b.delay, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 7, delay: b.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.15, z: 40 }}
        >
          {b.label}
        </motion.span>
      ))}

      {/* Ambient glow behind phone — layered for richer 3D feel */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full bg-blueprint/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 -z-20 rounded-full bg-blue-500/15 blur-3xl"
        animate={{ scale: [1.1, 1.25, 1.1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}