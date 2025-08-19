import { Button, Card, CardBody, Form, Input } from "@heroui/react";
import { useNavigate } from "react-router-dom";

// Importa las herramientas que tu propia aplicación ya provee
import { useAuth } from "../../hooks/Auth/use-auth";
import { User } from "../../models/user";
import { Role } from "../../models/role";

const LoginForm = () => {
  // 1. Obtenemos las herramientas necesarias:
  // - navigate para redirigir.
  // - onLoginSuccess para notificar a la app que estamos "logueados".
  const navigate = useNavigate();
  const { onLoginSuccess } = useAuth();

  /**
   * Esta es la función clave. Se ejecuta al hacer clic en "Acceder".
   * Su trabajo es simular un inicio de sesión y luego redirigir.
   */
  const handleSimulatedLoginAndRedirect = (event: React.FormEvent<HTMLFormElement>) => {
    // Muy importante: previene que la página se recargue.
    event.preventDefault();

    console.log("Iniciando simulación de login...");

    // 2. Creamos un usuario falso.
    // Esto es necesario para que onLoginSuccess tenga qué enviar.
    // Asegúrate de que Role.Admin coincida con cómo lo tienes definido en tu enum Role.
    // Puede ser Role.ADMIN, Role.admin, etc.
    const fakeUser = new User(
      "Admin de Prueba",
      "admin@test.com",
      Role.ADMIN // O el rol que necesites para acceder
    );

    // 3. Notificamos a toda la aplicación que el login fue exitoso.
    // Esto cambiará el estado isAuthenticated a true en tu ProtectedRoute.
    console.log("Notificando a la aplicación del login exitoso...");
    onLoginSuccess(fakeUser);

    // 4. AHORA SÍ: Redirigimos.
    // Como el ProtectedRoute ya sabe que estamos autenticados, nos dejará pasar.
    console.log("Redirigiendo a /admin...");
    navigate("/admin");
  };

  return (
    <Card fullWidth className="w-full max-w-md rounded-3xl">
      <CardBody className="p-8">
        <Form
          className="w-full flex flex-col gap-7"
          onSubmit={handleSimulatedLoginAndRedirect} // Se llama a nuestra función
        >
          {/* Los campos del formulario no se usan, son solo visuales */}
          <Input
            label="Correo electrónico"
            name="email"
            placeholder="correo@ejemplo.com"
            type="email"
            labelPlacement="outside"
            className="text-base"
          />

          <Input
            label="Contraseña"
            name="password"
            placeholder="Ingrese su contraseña"
            type="password"
            labelPlacement="outside"
            className="text-base"
          />

          <Button
            type="submit"
            className="bg-[#151B2C] hover:bg-gray-20 text-white text-base py-3 rounded-xl w-full mt-2"
          >
            Acceder
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;