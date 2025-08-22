import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@heroui/react";
import { requestPasswordResetApi } from "../services/auth.service";
import AuthFormTemplate from "../components/atomic/templates/AuthFormTemplate";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await requestPasswordResetApi({ email });
      setMessage(response.message);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error al solicitar la recuperación.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormTemplate title="Recuperar Contraseña" onSubmit={handleSubmit}>
      <p className="text-gray-600 text-center -mt-4">
        Ingresa tu correo para recibir un código de verificación.
      </p>
      <Input
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        required
      />
      {message && <p className="text-center text-sm text-green-700 -my-2">{message}</p>}
      <Button type="submit" disabled={loading} className="bg-[#151B2C] text-white py-3 rounded-xl">
        {loading ? "Enviando..." : "Enviar Código"}
      </Button>
      <div className="text-center">
        <Link to="/login" className="text-sm text-blue-600 hover:underline">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </AuthFormTemplate>
  );
};

export default ForgotPasswordPage;