import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./Routes";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import DasboardPage from "../pages/DasboardPage";
import UsuariosPage from "../pages/UsuariosPage";
import GesTableUserPage from "../pages/GesTableUserPage";
import EstadisticasPage from "../pages/EstadisticasPage";
import BodegasPage from "../pages/BodegasPage";
import SolicitudPage from "../pages/SolicitudesPge";
import ProfilePage from "../pages/ProfilePage";
import ProductCatalogPage from "../pages/ProductPage";
import NotFound from "../components/atomic/templates/NotFound";

const AppRoutes = () => {
  
  return (
  
    <Routes>
      <Route
        path={routes.home}
        element={
          <RedirectIfAuthenticated>
            <Navigate to={routes.login} replace />
          </RedirectIfAuthenticated>
        }
      />

      <Route element={<AuthLayout />}>
        <Route
          path={routes.login}
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path={routes.forgotPassword}
          element={
            <RedirectIfAuthenticated>
              <ForgotPasswordPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path={routes.resetPassword}
          element={
            <RedirectIfAuthenticated>
              <ResetPasswordPage />
            </RedirectIfAuthenticated>
          }
        />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path={routes.admin} element={<DasboardPage />} />
        <Route path={routes.users} element={<UsuariosPage />} />
        <Route path={routes.tables} element={<GesTableUserPage />} />
        <Route path={routes.stats} element={<EstadisticasPage />} />
        <Route path={routes.warehouses} element={<BodegasPage />} />
        <Route path={routes.solicitudes} element={<SolicitudPage />} />
        <Route path={routes.profile} element={<ProfilePage />} />
        <Route path={routes.products} element={<ProductCatalogPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;