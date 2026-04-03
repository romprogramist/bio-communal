"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "./PhoneInput";
import { services } from "@/data/services";
import { sendMetrikaGoal } from "./Analytics";

type FormData = {
  name: string;
  phone: string;
  service: string;
  comment: string;
  consent: boolean;
};

export default function ApplicationForm({
  preselectedService,
  onSuccess,
  onError,
  source,
}: {
  preselectedService?: string;
  onSuccess: () => void;
  onError: () => void;
  source?: "header" | "contacts";
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      service: preselectedService || "",
      comment: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      sendMetrikaGoal(preselectedService, source);
      reset();
      onSuccess();
    } catch {
      onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name", { required: true, minLength: 2 })}
          placeholder="Ваше имя" aria-label="Ваше имя"
          className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">Введите имя (минимум 2 символа)</p>
        )}
      </div>

      <div>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: true,
            pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
          }}
          render={({ field }) => (
            <PhoneInput
              value={field.value}
              onChange={field.onChange}
              ref={field.ref}
              error={!!errors.phone}
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">Введите номер в формате +7 (XXX) XXX-XX-XX</p>
        )}
      </div>

      <div>
        <select aria-label="Выберите услугу"
          {...register("service", { required: true })}
          className={`${inputClass} ${errors.service ? "border-red-500" : ""} ${
            !preselectedService ? "text-text-secondary" : ""
          }`}
        >
          <option value="">Выберите услугу</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-red-500 text-sm mt-1">Выберите услугу</p>
        )}
      </div>

      <div>
        <textarea
          {...register("comment", { maxLength: 500 })}
          placeholder="Комментарий (необязательно)" aria-label="Комментарий"
          rows={3}
          className={inputClass}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent", { required: true })}
            className="mt-1 w-4 h-4 accent-primary"
          />
          <span className={`text-sm ${errors.consent ? "text-red-500" : "text-text-secondary"}`}>
            Согласие на{" "}
            <a href="/privacy" target="_blank" className="text-primary underline">
              обработку персональных данных
            </a>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-hover disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Отправка...
          </>
        ) : (
          "Оставить заявку"
        )}
      </button>
    </form>
  );
}
