import { Autocomplete, AutocompleteItem } from "@heroui/react";

type Item = {
  label: string;
  titulo: string;
  description: string;
};

type CustomAutocompleteProps = {
  items: Item[];
};

export default function CustomAutocomplete({ items }: CustomAutocompleteProps) {
  return (
    <Autocomplete aria-label="Selector de opciones">
      {items.map((item, index) => (
        <AutocompleteItem key={index} value={item.label}>
          <div className="flex flex-col">
            <span className="font-medium">{item.titulo}</span>
            <span className="text-xs text-gray-500">{item.description}</span>
          </div>
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
