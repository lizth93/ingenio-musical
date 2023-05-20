import React, { ReactNode } from "react";
import ButtonBoostrap from "react-bootstrap/Button";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link"
  | "outline-light";
interface BootstrapButtonProviderProps {
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const Button: React.FunctionComponent<BootstrapButtonProviderProps> = ({
  variant,
  children,
  className,
}) => {
  return (
    <ButtonBoostrap variant={variant} className={className}>
      {children}
    </ButtonBoostrap>
  );
};

export default Button;
