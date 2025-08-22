import { Link } from "react-router-dom";
import { Button, Input } from "@heroui/react";
import AuthFormTemplate from "../atomic/templates/AuthFormTemplate"; 


interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string | null;
}

const LoginForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  error,
}: LoginFormProps) => {

  return (
    <AuthFormTemplate title="Iniciar Sesión" onSubmit={onSubmit}>
      <Input
        label="Correo electrónico"
        name="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        disabled={loading}
        required
      />
      <Input
        label="Contraseña"
        name="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        disabled={loading}
        required
      />
      {error && <p className="text-red-500 text-sm text-center -my-2">{error}</p>}
      <div className="text-right">
        <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <Button
        type="submit"
        className="bg-[#151B2C] hover:bg-gray-800 text-white text-base py-3 rounded-xl w-full"
        disabled={loading}
      >
        {loading ? "Accediendo..." : "Acceder"}
      </Button>
    </AuthFormTemplate>
  );
};

export default LoginForm;