import React, { ReactNode } from "react";
import "./box.css";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const Box = ({ children, className = "", ...props }: Props) => {
  return (
    <div className="box" {...props}>
      <div className="wrap-leftside">
        <div className="semi-wrap">
          <div className={`${className || ""} content-leftside`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
