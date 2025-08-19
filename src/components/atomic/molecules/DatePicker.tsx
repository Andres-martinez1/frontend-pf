import { DatePicker } from "@heroui/react";

type CustomDatePickerProps = {
  conten: string;
  width?: string;  
};

export default function CustomDatePicker({
  conten,
  width = "280px",
}: CustomDatePickerProps) {
  const customStyle = {
    width,
  };

  return (
    <div style={customStyle}>
      <DatePicker className="w-full h-full" label={conten} />
    </div>
  );
}
