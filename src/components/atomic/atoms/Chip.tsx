import { Chip } from "@heroui/react";

type CustomChipProps = {
  conten: string;
  color?: string;     
  texcolor?: string;   
  className?: string;  
};

export default function CustomChip({
  conten,
  color = "#C3C7C3",
  texcolor = "black",
  className = "",
}: CustomChipProps) {
  return (
    <Chip
      className={className}
      style={{ backgroundColor: color, color: texcolor }}
    >
      {conten}
    </Chip>
  );
}
