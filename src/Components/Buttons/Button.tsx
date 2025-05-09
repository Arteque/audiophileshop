import { FC, ReactNode, useState } from "react";

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type: "full" | "border" | "inline";
  onClick?: () => void | Promise<void>;
  children: ReactNode | string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type,
  disabled,
  loading,
  className = "",
  ...props
}) => {
  const [dataLoading, setDataLoading] = useState(false);

  const isPromise = (value: unknown): value is Promise<unknown> =>
    !!value && typeof (value as Promise<unknown>).then === 'function';

  const clickHandler = async () => {
    if (disabled || dataLoading || loading) return;

    if (onClick) {
      const result = onClick();
      if (isPromise(result)) {
        setDataLoading(true);
        disabled = true
        loading = true
        try {
            await result
        } finally {
          setDataLoading(false);
          disabled = false
          loading = false
        }
      }
    }
  };

const isLoading = loading ?? dataLoading

  return (
    <button
      onClick={clickHandler}
      className={`button ${type} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {isLoading 
      ? 
      <span className="loading">loading</span> 
      : 
      <>
        <span className="text">{children}</span>
        {type === 'inline' && <span className="icon"><img src="/shared/desktop/icon-arrow-right.svg" alt="Arrow Right Icon" /></span>}
      </>
      }
    </button>
  );
};

export default Button;
