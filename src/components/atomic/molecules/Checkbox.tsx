import { Checkbox } from "@heroui/react";
import { ReactNode } from "react";

type CustomCheckboxProps = {
  conten: string;
  size: "sm" | "md" | "lg";
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  radius: "none" | "sm" | "md" | "lg" | "full";
  icon?: ReactNode; 
};

export default function CustomCheckbox({
  conten,
  size,
  color,
  radius,
  icon, 
}: CustomCheckboxProps) {
  return (
    <Checkbox size={size} color={color} radius={radius} icon={icon}>
      {conten}
    </Checkbox>
  );
}
