import React from "react";
import "./tooltip.css";
type Props = {
  children: string;
  [key: string]: any;
  type: string;
};
const Tooltip = ({ children, type, ...props }: Props) => {
  return (
    <>
      {type === "left" ? (
        <span className="tooltiptext" {...props}>
          {children}
        </span>
      ) : type === "right" ? (
        <span className="tooltiptextRight" {...props}>
          {children}
        </span>
      ) : null}
    </>
  );
};

export default Tooltip;
