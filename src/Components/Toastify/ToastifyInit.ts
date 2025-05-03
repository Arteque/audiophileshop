import { toast } from "react-toastify";

interface ToastInitProps {
  toastType: string;
  toastAutoClose: boolean;
  toastHideProgressBar: boolean;
  toastCloseOnClick: boolean;
  toastPauseOnHover: boolean;
  toastProgress: boolean;
  toastTheme: string;
  message: string;
}

const ToastInit = ({
  toastType,
  toastAutoClose,
  toastHideProgressBar,
  toastCloseOnClick,
  toastPauseOnHover,
  toastProgress,
  toastTheme,
  message,
}: ToastInitProps): void => {
  const setup = {
    position: "top-right" as const,
    autoClose: toastAutoClose,
    hideProgressBar: toastHideProgressBar,
    closeOnClick: toastCloseOnClick,
    pauseOnHover: toastPauseOnHover,
    draggable: false,
    progress: toastProgress,
    theme: toastTheme,
  };

  const toastTypeHandler = () => {
    switch (toastType) {
      case "success":
        return toast.success(message, setup);
      case "warn":
        return toast.warn(message, setup);
      case "error":
        return toast.error(message, setup);
      default:
        return toast(message, setup);
    }
  };

  toastTypeHandler();
};

export default ToastInit;
