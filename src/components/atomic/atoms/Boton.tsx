import React, { forwardRef } from "react";
import { Button } from "@heroui/react";

type CustomSize = "sm" | "md" | "lg" | string;
type CustomRadius = "none" | "sm" | "md" | "lg" | "full" | string;

interface CustomButtonProps {
  titulo: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  onPress?: () => void;
  onClick?: () => void;
  variant?: "light" | "solid" | "ghost";
  size?: CustomSize;
  radius?: CustomRadius;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  disabled?: boolean;
}

const CustomBoton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      titulo = "titulo",
      bgColor = "#1A1A36",
      textColor = "#ffffff",
      borderColor = "transparent",
      hoverBgColor,
      hoverTextColor,
      hoverBorderColor,
      size = "md",
      radius = "md",
      width,
      height,
      onPress,
      onClick,
      variant = "light",
      children,
      icon,
      disabled = false, 
      ...props
    },
    ref
  ) => {
    const isCustomSize = !["sm", "md", "lg"].includes(size);
    const isCustomRadius = !["none", "sm", "md", "lg", "full"].includes(radius);

    return (
      <Button
        ref={ref}
        onClick={onClick || onPress}
        isDisabled={disabled} 
        style={{
          backgroundColor: bgColor,
          color: textColor,
          border: `1px solid ${borderColor}`,
          fontSize: isCustomSize ? size : undefined,
          borderRadius: isCustomRadius ? radius : undefined,
          width,
          height,
          transition: "all 0.2s ease-in-out",
          opacity: disabled ? 0.6 : 1,        
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        size={!isCustomSize ? (size as "sm" | "md" | "lg") : undefined}
        radius={!isCustomRadius ? (radius as "none" | "sm" | "md" | "lg" | "full") : undefined}
        variant={variant}
        onMouseEnter={(e) => {
          if (disabled) return;
          const el = e.currentTarget as HTMLButtonElement;
          if (hoverBgColor) el.style.backgroundColor = hoverBgColor;
          if (hoverTextColor) el.style.color = hoverTextColor;
          if (hoverBorderColor) el.style.border = `1px solid ${hoverBorderColor}`;
        }}
        onMouseLeave={(e) => {
          if (disabled) return;
          const el = e.currentTarget as HTMLButtonElement;
          el.style.backgroundColor = bgColor;
          el.style.color = textColor;
          el.style.border = `1px solid ${borderColor}`;
        }}
        {...props}
      >
        <div className="flex items-center gap-x-2">
          {icon && <span>{icon}</span>}
          {titulo}
        </div>
      </Button>
    );
  }
);

CustomBoton.displayName = "CustomBoton";
export default CustomBoton;
