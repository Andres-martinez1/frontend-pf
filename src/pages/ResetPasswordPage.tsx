import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"; 
import { Button, Input } from "@heroui/react";
import { resetPasswordApi } from "../services/auth.service";
import AuthFormTemplate from "../components/atomic/templates/AuthFormTemplate";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    codigo: "",
    nuevaPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });


  useEffect(() => {
    
    if (location.state?.email) {
      setFormData(prevData => ({ ...prevData, email: location.state.email }));
    }
  }, [location.state]); 

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
      setLoading(false); 
    }
  };

  return (
    <AuthFormTemplate title="Crear Nueva Contraseña" onSubmit={handleSubmit}>
      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        placeholder="El correo con el que solicitaste el código"
        value={formData.email} 
        onChange={handleChange}
        required
        disabled={loading}
      />

      <Input
        label="Código de 6 dígitos"
        name="codigo"
        type="text"
        placeholder="El código que recibiste por email"
        value={formData.codigo}
        onChange={handleChange}
        required
        disabled={loading}
      />

      <Input
        label="Nueva Contraseña"
        name="nuevaPassword"
        type="password"
        placeholder="Debe tener al menos 6 caracteres"
        value={formData.nuevaPassword}
        onChange={handleChange}
        required
        disabled={loading}
      />
      
      {message.text && (
        <p className={`text-center text-sm -my-2 ${message.type === 'success' ? 'text-green-700' : 'text-red-500'}`}>
          {message.text}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="bg-[#151B2C] text-white py-3 rounded-xl"
      >
        {loading ? "Actualizando..." : "Actualizar Contraseña"}
      </Button>

      <div className="text-center mt-2">
        <Link to="/login" className="text-sm text-blue-600 hover:underline">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </AuthFormTemplate>
  );
};

export default ResetPasswordPage;