"use client";

import { useState, useCallback, createContext, useContext, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import ApplicationForm from "@/components/ApplicationForm";
import Toast from "@/components/Toast";
import FloatingButtons from "@/components/FloatingButtons";

type ShellContextType = {
  openForm: (serviceId?: string) => void;
  handleSuccess: () => void;
  handleError: () => void;
};

const ShellContext = createContext<ShellContextType>({
  openForm: () => {},
  handleSuccess: () => {},
  handleError: () => {},
});

export function useShell() {
  return useContext(ShellContext);
}

export default function ClientShell({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>();
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const openForm = useCallback((serviceId?: string) => {
    setModalService(serviceId);
    setModalOpen(true);
  }, []);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type, visible: true });
  }, []);

  const handleSuccess = useCallback(() => {
    setModalOpen(false);
    showToast("Заявка отправлена! Мы свяжемся в течение 15 минут.", "success");
  }, [showToast]);

  const handleError = useCallback(() => {
    showToast("Ошибка отправки. Попробуйте позвонить нам.", "error");
  }, [showToast]);

  return (
    <ShellContext.Provider value={{ openForm, handleSuccess, handleError }}>
      <Navbar onOpenForm={() => openForm()} />
      {children}
      <FloatingButtons />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3 className="font-heading text-xl font-bold mb-6">Оставить заявку</h3>
        <ApplicationForm
          preselectedService={modalService}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </Modal>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />
    </ShellContext.Provider>
  );
}
