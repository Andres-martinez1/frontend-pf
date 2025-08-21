import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { ReactNode } from "react";
import CustomBoton from "../atoms/Boton";

type CustomModalProps = {
  content: ReactNode;
  title: string;
  cancelLabel: string;
  confirmLabel: string;
  onConfirm?: () => void;
  ButtonLabel?: string;
  BgColor?: string;
  cancelBgColor: string;
  confirmBgColor: string;
  cancelTextColor: string;
  bordecancel?:string;
  bordeconfirm?:string;
  confirmTextColor: string;
  textColor?: string;
  icon?: React.ReactNode;
  className?:string;
  trigger?: React.ReactNode; 
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  radius: "none" | "sm" | "md" | "lg";
  backdrop: "transparent" | "opaque" | "blur";
  placement: "auto" | "top" | "center" | "bottom";
  scrollBehavior: "normal" | "inside" | "outside";
  shadow: "none" | "sm" | "md" | "lg";
};

export default function CustomModal({
  content,
  title="black",
  className="",
  confirmLabel,
  ButtonLabel,
  BgColor = "#1A1A36",
  cancelBgColor,
  confirmBgColor,
  cancelTextColor,
  bordecancel,
  bordeconfirm,
  cancelLabel,
  confirmTextColor,
  textColor = "#ffffff",
  icon,
  trigger,
  size,
  radius,
  backdrop,
  placement,
  scrollBehavior,
  shadow,
}: CustomModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {trigger ? (
        <span onClick={onOpen} className="inline-block cursor-pointer">
          {trigger}
        </span>
      ) : (
        <CustomBoton
          onPress={onOpen}
          bgColor={BgColor}
          textColor={textColor}
          titulo={ButtonLabel || ""}
          icon={icon}
        />
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size}
        radius={radius}
        backdrop={backdrop}
        placement={placement}
        scrollBehavior={scrollBehavior}
        shadow={shadow}
        className={className}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{content}</ModalBody>
              <ModalFooter className="flex justify-end gap-2">
                <CustomBoton
                  variant="light"
                  onPress={onClose}
                  bgColor={cancelBgColor}
                  textColor={cancelTextColor}
                  titulo={cancelLabel}
                  borderColor={bordecancel}
                />
                <CustomBoton
                  onPress={onClose}
                  bgColor={confirmBgColor}
                  textColor={confirmTextColor}
                  titulo={confirmLabel}
                  borderColor={bordeconfirm}
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
