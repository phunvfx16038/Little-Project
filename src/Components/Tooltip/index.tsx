import React, { ReactNode } from "react";
import "./tooltip.css";
type Props = {
  children: ReactNode;
  [key: string]: any;
  type: string;
};
const Tooltip = ({ children, type, ...props }: Props) => {
  return (
    <>
      {type === "left" ? (
        <span className="tooltiptext left" {...props}>
          {children}
        </span>
      ) : type === "right" ? (
        <span className="tooltiptext right" {...props}>
          {children}
        </span>
      ) : type === "top" ? (
        <span className="tooltiptext top" {...props}>
          {children}
        </span>
      ) : null}
    </>
  );
};

export default Tooltip;
