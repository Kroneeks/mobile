import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  configureImg?: boolean;
  color?: string;
}

const Phone = ({
  imgSrc,
  className,
  color = "white",
  configureImg = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={`/cup-template-${color}.png`}
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute z-10 inset-0 w-3/5 h-0 left-[5%] top-7">
        <img
          className={`object-cover min-w-full min-h-full rounded-b-large`}
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
