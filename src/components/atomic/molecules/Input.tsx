import { Input } from "@heroui/input";
import { ChangeEvent, RefObject } from "react";

type CustomInputProps = {
  label: string;
  type: string;
  width?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
  disabled?: boolean;
};

export default function CustomInput({
  label,
  type,
  width = "280px",
  className = "",
  placeholder,
  value,
  onChange,
  inputRef,
  disabled = false, 
}: CustomInputProps) {
  const customStyle = { width };

  return (
    <div style={customStyle}>
      <Input
        label={label}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={inputRef}
        isDisabled={disabled} 
      />
    </div>
  );
}
