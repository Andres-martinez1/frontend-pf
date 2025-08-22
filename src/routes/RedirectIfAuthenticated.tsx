import { Navigate } from 'react-router-dom';
import { routes } from './Routes';
import { useAuth } from '../hooks/Auth/use-auth'; 
import React from 'react';


interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
}

const RedirectIfAuthenticated = ({ children }: RedirectIfAuthenticatedProps) => {
  
  const { isAuthenticated, initialLoading } = useAuth();


  if (initialLoading) {
    return <div>Verificando sesión...</div>; 
  }


  if (isAuthenticated) {
    return <Navigate to={routes.admin} replace />;
  }


  return <>{children}</>;
};

export default RedirectIfAuthenticated;