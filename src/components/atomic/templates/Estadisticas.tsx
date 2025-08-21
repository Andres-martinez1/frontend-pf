import { useState } from "react";
import { ChartBar } from "lucide-react";
import CardTitulo from "../organisms/CardTitulo";
import CardFiltroE from "../organisms/CardFiltroEstatic";
import StatsDisplay from "../organisms/StatsDisplay";

const Estadisticas = () => {
  const [tipo, setTipo] = useState<string | null>(null);
  const [estado, setEstado] = useState<string | null>(null);

  return (
    <>
      <CardTitulo
        title="Centro de Estadísticas y Reportes"
        description="Análisis detallado específicos con exportación a PDF"
        icon={<ChartBar className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      {/* Filtros progresivos */}
      <CardFiltroE setTipo={setTipo} setEstado={setEstado} />

      {/* Mostrar estadísticas dinámicas */}
      {tipo && estado && (
        <StatsDisplay tipo={tipo} estado={estado} />
      )}
    </>
  );
};

export default Estadisticas;
