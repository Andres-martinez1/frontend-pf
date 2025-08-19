import CustomCard from "../molecules/Card";

type Props = {
  sobreMi: string;
  nombre: string;
  correo: string;
  ubicacion: string;
  departamento: string;
  rol: string;
  fechaIngreso: string;
};

export function CardSobreMi({
  sobreMi,
  nombre,
  correo,
  ubicacion,
  departamento,
  rol,
  fechaIngreso,
}: Props) {
  return (
    <CustomCard conten="Sobre mí" className="h-auto">
      <p className="text-sm text-gray-700 mb-6">{sobreMi}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-800">Información Personal</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Correo:</strong> {correo}</p>
            <p><strong>Ubicación:</strong> {ubicacion}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-800">Información Laboral</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Departamento:</strong> {departamento}</p>
            <p><strong>Rol:</strong> {rol}</p>
            <p><strong>Fecha de Ingreso:</strong> {fechaIngreso}</p>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
