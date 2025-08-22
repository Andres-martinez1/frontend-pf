import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@heroui/react";
import { resetPasswordApi } from "../services/auth.service";
import AuthFormTemplate from "../components/atomic/templates/AuthFormTemplate";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", codigo: "", nuevaPassword: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      const response = await resetPasswordApi(formData);
      setMessage({ type: "success", text: `${response.message} Serás redirigido...` });
      setTimeout(() => navigate("/login"), 3000);
    } catch (err: any) {
      setMessage({ type: "error", text: err.response?.data?.message || "Error al restablecer." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormTemplate title="Crear Nueva Contraseña" onSubmit={handleSubmit}>
      <Input label="Correo Electrónico" name="email" type="email" value={formData.email} onChange={handleChange} required disabled={loading} />
      <Input label="Código de 6 dígitos" name="codigo" type="text" value={formData.codigo} onChange={handleChange} required disabled={loading} />
      <Input label="Nueva Contraseña" name="nuevaPassword" type="password" value={formData.nuevaPassword} onChange={handleChange} required disabled={loading} />
      
      {message.text && (
        <p className={`text-center text-sm -my-2 ${message.type === 'success' ? 'text-green-700' : 'text-red-500'}`}>
          {message.text}
        </p>
      )}

      <Button type="submit" disabled={loading} className="bg-[#151B2C] text-white py-3 rounded-xl">
        {loading ? "Actualizando..." : "Actualizar Contraseña"}
      </Button>
    </AuthFormTemplate>
  );
};

export default ResetPasswordPage;