import { Outlet } from "react-router-dom";
import NavbarApp from "../components/atomic/organisms/Navbar";
import Sidebar from "../components/atomic/organisms/Sidebar";
import { useAuth } from "../context/auth-context"; 
import { adminMenu } from "./Menu";

const AdminLayout = () => {
  
  const { isAuthenticated, user, logout, loading } = useAuth();

  return (
  
    <>
      {}
      <NavbarApp
        menuItems={adminMenu}
        isAuthenticated={isAuthenticated}
        email={user?.email}           
        fullName={user?.fullName}     
        onLogOut={logout}             
        loading={loading}             
      />

      <div className="flex">
        <Sidebar menuItems={adminMenu} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;