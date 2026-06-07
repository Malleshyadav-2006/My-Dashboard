"use client";

import { motion } from "framer-motion";

export default function SkeletonTile() {
  return (
    <motion.div
      className="rounded-2xl bg-[#16161f] border border-[#1e1e2e] p-5 h-40"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="h-3 w-1/2 bg-[#1e1e2e] rounded mb-3" />
      <div className="h-2 w-3/4 bg-[#1e1e2e] rounded mb-2" />
      <div className="h-2 w-1/3 bg-[#1e1e2e] rounded" />
    </motion.div>
  );
}
