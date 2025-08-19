import {Switch} from "@heroui/switch";

type CustomSwitchProps = {
  label: string;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
};

export default function CustomSwitch({ label,color,size }: CustomSwitchProps) {
  return (
    <Switch  color={color} size={size}>
      {label}
    </Switch>
  );
}
