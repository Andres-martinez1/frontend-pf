import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/atomic/templates/NotFound";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import { useAuth } from "../hooks/Auth/use-auth";
import { routes } from "./Routes";
import DasboardPage from "../pages/DasboardPage";
import UsuariosPage from "../pages/UsuariosPage";
import GesTableUserPage from "../pages/GesTableUserPage";
import EstadisticasPage from "../pages/EstadisticasPage";
import BodegasPage from "../pages/BodegasPage";
import SolicitudPage from "../pages/SolicitudesPge";
import ProfilePage from "../pages/ProfilePage";
import ProductCatalogPage from "../pages/ProductPage";




const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path={routes.home}
        element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated}>
            <Navigate to={routes.login} />
          </RedirectIfAuthenticated>
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path={routes.login}
          element={
            <RedirectIfAuthenticated isAuthenticated={isAuthenticated}>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path={routes.admin}
          element={
            <ProtectedRoute
              component={DasboardPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.users}
          element={
            <ProtectedRoute
              component={UsuariosPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
          <Route
          path={routes.tables}
          element={
            <ProtectedRoute
              component={GesTableUserPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
              
        <Route
          path={routes.stats}
          element={
            <ProtectedRoute
              component={EstadisticasPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        
        <Route
          path={routes.warehouses}
          element={
            <ProtectedRoute
              component={BodegasPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        
        {/* <Route
          path={routes.help}
          element={
            <ProtectedRoute
              component={AdminHelperPage}
              isAuthenticated={isAuthenticated}
            />
          }
        /> */}
        <Route
          path={routes.solicitudes}
          element={
            <ProtectedRoute
              component={SolicitudPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.profile}
          element={
            <ProtectedRoute
              component={ProfilePage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.products}
          element={
            <ProtectedRoute
              component={ProductCatalogPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
