import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuItem } from "../atoms/MenuItem";
import { ChevronDown, ChevronUp, Menu, LogOut } from "lucide-react";
import { routes } from "../../../routes/Routes";

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname);
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const groupedMenu = {
    PRINCIPAL: menuItems.slice(0, 5),
    CONFIGURACIÓN: menuItems.slice(5, 7),
  };

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleClick = (path: string) => {
    setActivePath(path);
  };

  const toggleSubMenu = (code: string) => {
    setExpandedMenus((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  const logoutItem = menuItems.find((item) => item.code === "LOGOUT");

  return (
   <div className={`min-h-screen ${isOpen ? "w-64" : "w-16"} bg-[#151B2C] text-white flex flex-col shadow-lg border-r border-blue-100`}>

      
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isOpen ? null : (
          <div className="flex items-center space-x-2">
            <h2 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Menú</h2>
          </div>
        )}
        <button onClick={toggleSidebar} className="text-white hover:bg-[#3B82F6]/20 p-2 rounded-md">
          <Menu size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {Object.entries(groupedMenu).map(([section, items]) => (
          <div key={section} className="mb-4">
            {isOpen && (
              <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
                {section}
              </p>
            )}
            {items.map(({ code, path, title, icon, subItems }) => {
              const isActive = activePath === path;
              const isExpanded = expandedMenus[code] || false;

              return (
                <div key={code} className="flex flex-col">
                  {subItems ? (
                    <button
                      onClick={() => toggleSubMenu(code)}
                      className={`flex items-center justify-between px-4 py-2 mx-2 rounded-md font-medium transition-all ${
                        isActive || isExpanded
                          ? "bg-[#3B82F6]/30 text-white"
                          : "hover:bg-[#3B82F6]/20 hover:text-blue-300 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{icon}</span>
                        {isOpen && <span>{title}</span>}
                      </div>
                      {isOpen && (
                        <span className="text-sm">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={path}
                      onClick={() => handleClick(path)}
                      className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md font-medium transition-all ${
                        isActive
                          ? "bg-[#3B82F6]/30 text-white"
                          : "hover:bg-[#3B82F6]/20 hover:text-blue-300 text-white"
                      }`}
                    >
                      <span>{icon}</span>
                      {isOpen && <span>{title}</span>}
                    </Link>
                  )}

                  {subItems && isExpanded && (
                    <div className="ml-8 flex flex-col mt-1">
                      {subItems.map((subItem) => (
                        <Link
                          key={subItem.code}
                          to={subItem.path}
                          onClick={() => handleClick(subItem.path)}
                          className={`py-1 px-3 rounded-md text-sm my-1 transition-all ${
                            activePath === subItem.path
                              ? "bg-[#3B82F6]/30 text-white"
                              : "text-white hover:bg-[#3B82F6]/20 hover:text-blue-300"
                          } flex items-center gap-2`}
                        >
                          {subItem.icon}
                          {isOpen && subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {logoutItem && (
        <div className="border-t border-white/10 px-3 py-3">
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = routes.login;
            }}
            className="flex items-center px-3 py-2 text-white hover:text-red-400 hover:bg-red-100/10 transition-all duration-300 cursor-pointer w-full text-left rounded-lg font-medium"
          >
            <LogOut />
            {isOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
