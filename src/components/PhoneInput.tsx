"use client";

import { forwardRef, ChangeEvent } from "react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 1) return `+${digits}`;
  if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`;
  if (digits.length <= 7)
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
  if (digits.length <= 9)
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}

const PhoneInput = forwardRef<
  HTMLInputElement,
  {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    error?: boolean;
  }
>(function PhoneInput({ value, onChange, className = "", error }, ref) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    onChange(formatted);
  };

  return (
    <input
      ref={ref}
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="+7 (___) ___-__-__" aria-label="Телефон"
      className={`w-full px-4 py-3 rounded-xl border ${
        error ? "border-red-500" : "border-gray-300"
      } focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${className}`}
    />
  );
});

export default PhoneInput;
