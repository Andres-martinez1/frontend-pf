import { BarChart3, ChartBar, Search, ShieldCheck, Sparkles } from "lucide-react";
import CardTitulo from "../organisms/CardTitulo";
import CardFiltroE from "../organisms/CardFiltroEstatic";
import CardEstadisticas from "../organisms/CardEstadisticas";

const Estadisticas = () => {

  

  return (
    <>
     <CardTitulo
        title="Centro de Estadísticas y Reportes"
        description="Análisis detallado específicos con exportación a PDF"
        icon={<ChartBar className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />
      <CardFiltroE></CardFiltroE>

      <CardEstadisticas
        icon={<Search />}
        titulo="Comienza tu Análisis Inteligente"
        descripcion="Utiliza la búsqueda global para encontrar productos,
          usuarios o bodegas específicas y desbloquear análisis avanzados"
        features={[
          { icon: <Sparkles className="w-4 h-4" />, text: "Análisis en Tiempo Real" },
          { icon: <ShieldCheck className="w-4 h-4" />, text: "Datos Seguros" },
          { icon: <BarChart3 className="w-4 h-4" />, text: "Insights Precisos" },
        ]}
      />

    </>
  );
};

export default Estadisticas;
