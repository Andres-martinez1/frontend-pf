import {Textarea} from "@heroui/input";

type CustomTextareaProps = {
  placeholder: string;
  titulo:string;
  className?: string;
};

export default function CustomTextarea({ placeholder,titulo}: CustomTextareaProps) {
  return (
   <Textarea className="max-w-full" label={titulo} placeholder={placeholder} onClear={() => console.log("textarea cleared")} />
  );
}
