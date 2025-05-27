import React from "react";
import styles from "./Button.module.scss";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "minimal";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onlyIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = "primary",
  iconLeft,
  iconRight,
  onlyIcon = false,
  className = "",
  ...props
}) => {
  const baseClass = styles["button__container"];
  const sizeClass = styles[`button__container--${size}`];
  const variantClass = styles[`button__container--${variant}`];
  const iconOnlyClass = onlyIcon ? styles["button__container--icon-only"] : "";

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass} ${iconOnlyClass} ${className}`}
      {...props}
    >
      {iconLeft && <span className={styles["button__icon-left"]}>{iconLeft}</span>}
      {!onlyIcon && label && <span className={styles["button__label"]}>{label}</span>}
      {iconRight && <span className={styles["button__icon-right"]}>{iconRight}</span>}
    </button>
  );
};