import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: any;
  id?: string;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick, id = "" } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-normal text-[64px] text-[#FFFFFF] font-outfit ",
            className
          )}
          onClick={onClick}
          id={id}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-normal font-jakrata text-[40px] leading-[43.2px] text-[#FFFFFF] ",
            className
          )}
          id={id}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          " text-[#FFFFFF] text-[16px] font-normal leading-[22.4px] font-jakrata ",
          className
        )}
        onClick={onClick}
        id={id}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
