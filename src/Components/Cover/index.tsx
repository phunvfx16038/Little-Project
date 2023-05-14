import React, { ReactNode } from "react";
import "./cover.css";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const Cover = ({ children, className = "", ...props }: Props) => {
  return (
    <div className={`${className || ""} cover`} {...props}>
      {children}
    </div>
  );
};

export default Cover;
