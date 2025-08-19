import { Accordion, AccordionItem } from "@heroui/react";

type AccordionItemProps = {
  titulo: string;
  content: string;
};

type AccordionProps = {
  variant: "splitted" | "shadow" | "bordered" | null;
  ariaLabel: string;
  items: AccordionItemProps[];
};

export default function CustomAccordion({
  variant,
  ariaLabel,
  items,
}: AccordionProps) {
  return (
    <Accordion variant={variant ?? undefined} aria-label={ariaLabel}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.titulo}
          title={item.titulo}
        >
          <p>{item.content}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
