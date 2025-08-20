import { Select, SelectItem } from "@heroui/select";

type SelectItemType = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  titulo: string;
  planceholder: string;
  items: SelectItemType[];
  selectionMode: "single" | "multiple";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  width?: string; 
  radius?: "none" | "sm" | "md" | "lg" | "full";
  labelPlacement?: "inside" | "outside" | "outside-left";
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function CustomSelect({
  titulo,
  planceholder,
  items,
  selectionMode,
  variant = "flat",
  color = "default",
  size = "md",
  radius = "md",
  labelPlacement = "inside",
  onChange,
  width = "full",
  disabled = false,
}: CustomSelectProps) {
  return (
    <Select
      className="max-w-xs"
      style={{ width }}
      items={items}
      label={titulo}
      placeholder={planceholder}
      selectionMode={selectionMode}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      labelPlacement={labelPlacement}
      isDisabled={disabled}
      onChange={(e) => {
        const value = (e.target as HTMLSelectElement).value;
        onChange?.(value);
      }}
    >
      {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
    </Select>
  );
}
