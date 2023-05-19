import React from "react";
import "./tooltip.css";
type Props = {
  children: string;
  [key: string]: any;
};
const Tooltip = ({ children, ...props }: Props) => {
  return (
    <span className="tooltiptext" {...props}>
      {children}
    </span>
  );
};

export default Tooltip;
