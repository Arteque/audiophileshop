import { FC, ReactNode } from "react";

interface ToastifyMessageProps {
  message: ReactNode;
}

const ToastifyMessage: FC<ToastifyMessageProps> = ({ message }) => {
  return <p>{message}</p>;
};

export default ToastifyMessage;
