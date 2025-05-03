import { toast, ToastOptions } from "react-toastify";
import { useState, useEffect, FC, ReactNode } from "react";
import ToastifyMessage from "./ToastifyMessage";
interface ToastSetupProps {
  message: string | ReactNode;
  toastType: string;
}

const ToastInit: FC<ToastSetupProps> = ({ message, toastType }) => {
  const [toastSetup] = useState<ToastOptions>({
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });

  const totastTypeHandler = () => {
    switch (toastType) {
      case "success":
        return toast.success(<ToastifyMessage message={message} />, toastSetup);
        break;
      case "warn":
        return toast.warn(<ToastifyMessage message={message} />, toastSetup);
        break;

      default:
        return toast.success(<ToastifyMessage message={message} />, toastSetup);
        break;
    }
  };

  useEffect(() => {}, [toastType]);

  return totastTypeHandler();
};

export default ToastInit;
