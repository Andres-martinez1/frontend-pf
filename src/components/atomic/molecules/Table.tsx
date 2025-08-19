import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { EllipsisVerticalIcon } from "lucide-react";

type CustomTableProps = {
  columns: string[];
  data: (string | number)[][];
  titulo: string;
};

export default function CustomTable({ columns, data, titulo }: CustomTableProps) {
  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300 ">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
      <div className="overflow-x-auto">
        <Table aria-label="Tabla personalizada" removeWrapper>
          <TableHeader>
            {columns.map((col, index) => {
              const columnName = col.toLowerCase();
              return (
                <TableColumn
                  key={index}
                  className={`bg-gray-800 text-white px-4 py-2 ${
                    columnName === "actions" ? "text-center" : "text-left"
                  }`}
                >
                  {col}
                </TableColumn>
              );
            })}
          </TableHeader>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                {row.map((cell, colIndex) => {
                  const columnName = columns[colIndex].toLowerCase();

                  if (columnName === "actions") {
                    return (
                      <TableCell
                        key={`${rowIndex}-${colIndex}`}
                        className="text-center"
                      >
                        <div className="flex justify-center">
                          <Dropdown>
                            <DropdownTrigger>
                              <Button
                                isIconOnly
                                radius="full"
                                size="sm"
                                variant="light"
                              >
                                <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Acciones">
                              <DropdownItem key="view">Observar</DropdownItem>
                              <DropdownItem key="edit">Actualizar</DropdownItem>
                              <DropdownItem
                                key="delete"
                                className="text-danger"
                              >
                                Deshabilitar
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={`${rowIndex}-${colIndex}`} className="px-4 py-2">
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
