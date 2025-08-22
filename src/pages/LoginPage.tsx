import { useState } from "react";
import { useAuth } from "../context/auth-context";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {

  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email, password });
  };

  
  return (
    <LoginForm
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleLogin}
      loading={loading}
      error={error}
    />
  );
};

export default LoginPage;