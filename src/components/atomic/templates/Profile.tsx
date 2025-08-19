import { CardContacto } from "../organisms/CardContacto";
import { CardHabilidades } from "../organisms/CardHabilidades";
import { CardPerfilUsuario } from "../organisms/CardPerfilUsuario";
import { CardSobreMi } from "../organisms/CardSobreMi";

const Profile = () => {
  return (
    <div className="w-full px-4 md:px-10 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 flex flex-col gap-6 mt-20">
          <CardPerfilUsuario
            nombre="Andres Peña"
            usuario="andrespna"
            rol="Administrador"
            onEditar={() => {}}
            onCerrarSesion={() => {}}
          />
          <CardContacto
            email="andres@gmail.com"
            ciudad="Bogotá, Colombia"
            miembroDesde="Junio 2023"
            area="Formación TIC"
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-6 mt-20">
          <CardSobreMi
            sobreMi="Soy Andres Peña, instructor en TIC con experiencia en la formación de profesionales en tecnología y gestión de sistemas informáticos. Me apasiona la enseñanza y compartir conocimientos sobre redes, programación y bases de datos."
            nombre="Andres Peña"
            correo="andres.pena@example.com"
            ubicacion="Bogotá, Colombia"
            departamento="Formación TIC"
            rol="Administrador"
            fechaIngreso="Junio 2023"
          />
          <CardHabilidades
            habilidades={[
              "Redes de computadoras",
              "Programación en Python",
              "Bases de datos",
              "Gestión de sistemas",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
