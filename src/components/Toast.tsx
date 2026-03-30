"use client";

import { useEffect } from "react";

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

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-[60] px-6 py-4 rounded-card shadow-card animate-slide-down ${
        type === "success"
          ? "bg-primary text-white"
          : "bg-red-600 text-white"
      }`}
    >
      {message}
    </div>
  );
}
