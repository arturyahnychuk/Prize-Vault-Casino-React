import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}
const Input = ({ className = '', ...props }: CustomInputProps) => {
  return (
    <input
    className={`${className} px-[11px] py-[12px] focus:border-darkBlue placeholder:text-darkGray text-black outline-none font-amikoRegular text-base leading-[15px] border rounded-[5px] border-darkGray2`}
    {...props}
    />
  );
}

export default Input