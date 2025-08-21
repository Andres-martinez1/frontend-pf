import { Textarea } from "@heroui/input";
import { ChangeEvent } from "react";

type CustomTextareaProps = {
  placeholder: string;
  titulo: string;
  className?: string;
  value?: string; // valor controlado opcional
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // ojo: HTMLInputElement
};

export default function CustomTextarea({
  placeholder,
  titulo,
  className,
  value,
  onChange,
}: CustomTextareaProps) {
  return (
    <Textarea
      className={`max-w-full ${className ?? ""}`}
      label={titulo}
      placeholder={placeholder}
      value={value}
      onChange={onChange} // ahora compatible
      onClear={() => console.log("textarea cleared")}
    />
  );
}
