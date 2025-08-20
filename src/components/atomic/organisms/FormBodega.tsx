import { Card, CardBody, Input, Button } from "@heroui/react";
import CustomModal from "../molecules/Modal"; 
import { Bodega } from "../../types/Bodegas/Bodega";

type Props = {
  open: boolean;
  onClose: () => void;
};

const BodegaForm = ({ open, onClose }: Props) => {
  return (
    <CustomModal open={open} onClose={onClose} title="Nueva Bodega">
      <Card className="shadow-md rounded-2xl border border-gray-200">
        <CardBody className="space-y-4">
          {/* Nombre de la Bodega */}
          <Input
            type="text"
            label="Nombre de la Bodega"
            placeholder="Ej: Bodega Central"
            fullWidth
          />

          {/* Imagen */}
          <Input
            type="text"
            label="Imagen (URL)"
            placeholder="http://ejemplo.com/imagen.png"
            fullWidth
          />

          {/* Capacidad Máxima */}
          <Input
            type="number"
            label="Capacidad Máxima"
            placeholder="Ej: 500"
            fullWidth
          />

          {/* Descripción */}
          <Input
            type="text"
            label="Descripción"
            placeholder="Escribe una breve descripción"
            fullWidth
          />

          {/* Sede */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sede
            </label>
            <select className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200">
              <option>Seleccionar sede</option>
            </select>
          </div>

          {/* Usuario encargado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario encargado
            </label>
            <select className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200">
              <option>Seleccionar usuario</option>
            </select>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="light" onPress={onClose}>
              Cancelar
            </Button>
            <Button color="primary">Guardar</Button>
          </div>
        </CardBody>
      </Card>
    </CustomModal>
  );
};

export default BodegaForm;
