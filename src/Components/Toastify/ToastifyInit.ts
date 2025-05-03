import { ReactNode } from "react";
import { Bounce, toast } from "react-toastify";

type toastTypeProp = "success" |"warn" | "error"

const setup = {
  position: "top-right" as const,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

const ToastifyInit = (toastType: toastTypeProp, message: ReactNode | string):void => {

  switch (toastType) {
    case "success":
      toast.success(message, setup);
      break;
    case "warn":
      toast.warn(message, setup);
      break;
    case "error":
      toast.error(message, setup);
      break;
    default:
      toast(message, setup);
      break;
  }
};

export default ToastifyInit;
