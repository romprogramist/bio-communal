"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ToastType = "success" | "error";

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
}: {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 z-[60] px-6 py-4 rounded-card shadow-card ${
            type === "success"
              ? "bg-primary text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
