// Button.tsx

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  textClassName?: string;
}

const Btn = ({
  className = "",
  textClassName,
  label,
  ...props
}: ButtonProps) => {

  return (
    <div className="pulsate">
      <button 
      className={`${className} btn w-full max-w-[276px] w-max pt-6 pb-3 flex items-center justify-center px-[38px] bg-successLinear rounded-[18px] shadow-sm shadow-black active:scale-[1.1] select-none transition-all`}
      {...props}
    >
      <p
        className={`${textClassName} text-stroke-gray font-angkor text-2xl text-white leading-[41px] tracking-[1px]`}
      >
        {label}
      </p>
    </button>
    </div>
  );
};

export default Btn;
