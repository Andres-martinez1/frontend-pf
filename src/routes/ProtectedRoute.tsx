import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/Auth/use-auth';
import AdminLayout from '../layouts/AdminLayout'; 
import { routes } from './Routes';


const ProtectedRoute = () => {
  const { isAuthenticated, initialLoading } = useAuth();
  if (initialLoading) {
    return <div>Verificando sesión...</div>;
  }

 
  if (!isAuthenticated) {
    return <Navigate to={routes.login} replace />;
  }


  return <AdminLayout />;
};

export default ProtectedRoute;