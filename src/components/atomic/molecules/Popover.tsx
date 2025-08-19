import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import CustomBoton from "../atoms/Boton";

type CustomPopoverProps = {
  titleButon:string;
  title:string;
  conten: string;
  bgcolor:"default" | "primary" | "secondary" | "success" | "warning" | "danger"| string;
  size:"sm" | "md" | "lg";
  backdrop:"transparent" | "opaque" | "blur";
  Placements:"top-start"|"top"|"top-end"|
"bottom-start"|"bottom"|"bottom-end"|"right-start"|"right"|"right-end"|"left-start"|"left"|"left-end";

};

export default function CustomPopover({ titleButon,title,conten,size,backdrop,Placements,bgcolor}: CustomPopoverProps) {
  return (
    <Popover placement={Placements} size={size} backdrop={backdrop}>
      <PopoverTrigger>
        <CustomBoton titulo={""} bgColor={bgcolor}>{titleButon}</CustomBoton>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{title}</div>
          <div className="text-tiny">{conten}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
