import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from "../models/user"; // Ajusta la ruta a tu modelo
import {
  AuthLoginPayload,
  loginApi,
  logoutApi,
  checkAuthStatusApi
} from '../services/auth.service';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (data: AuthLoginPayload) => Promise<void>;
  logout: () => void;
  loading: boolean; // Estado para saber si se está procesando algo (login, logout, etc.)
  initialLoading: boolean; // Estado para el chequeo inicial de sesión
  error: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    const checkSession = async () => {
      try {
        
        const { user } = await checkAuthStatusApi();
        if (user) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (err) {
        
        setUser(null);
        setIsAuthenticated(false);
      } finally {
    
        setInitialLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (data: AuthLoginPayload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginApi(data);
      setUser(response.user);
      setIsAuthenticated(true);
      navigate("/admin"); 
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Credenciales inválidas.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await logoutApi(); 
    } catch (err) {
      console.error("Error en el logout:", err);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
      navigate('/login');
    }
  };

  
  if (initialLoading) {
    return <div>Verificando sesión...</div>; 
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading, initialLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};