import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Boton from "../atoms/Boton"

type CustomDropdownProps = {
  contenButon: string;
  items: { key: string; label: string }[]; 
};

export default function CustomDropdown({ contenButon, items }: CustomDropdownProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Boton titulo={""}>{contenButon}</Boton>
      </DropdownTrigger>
      <DropdownMenu>
        {items.map(({ key, label }) => (
          <DropdownItem key={key}>{label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
