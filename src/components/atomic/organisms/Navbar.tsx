import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../../routes/Routes";
import logo from "../../../assets/images/montacarga.png";
import { MenuItem } from "../atoms/MenuItem";

import {
  Globe,
  Home,
  User,
  LogOut,
} from "lucide-react";


interface NavbarAppProps {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  isAuthenticated?: boolean;
  email?: string;
  fullName?: string;
  menuItems?: Array<MenuItem>;
  onLogOut?: () => void;
  loading?: boolean;
}

const NavbarApp = ({
  isAuthenticated,
  fullName,
  email,
  menuItems,
  onLogOut,
  loading,
}: NavbarAppProps) => {
  const NAME_APP = import.meta.env.VITE_NAME_APP;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("es");
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const languageOptions: Record<string, string> = {
    es: "Español",
    en: "English",
    fr: "Français",
    pt: "Português",
  };

  const languageCodes: Record<string, string> = {
    es: "ES",
    en: "US",
    fr: "FR",
    pt: "BR",
  };

  const handleLanguageChange = (key: string) => {
    setSelectedLang(key);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#151B2C] text-white shadow-md"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarBrand
        className="gap-2 cursor-pointer pl-4"
        onClick={() => navigate(routes.home)}
      >
        <img src={logo} alt="Logo" className="w-20 h-15 ml-[-220px]" />
        <span className="font-semibold text-white hidden sm:block ">
          {NAME_APP}
        </span>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex items-center gap-8 " justify="end">

        <button
          onClick={() => navigate(routes.home)}
          className="flex items-center gap-2 text-white hover:text-[#3B82F6] transition-colors"
        >
          <Home size={18} /> <span>Inicio</span>
        </button>

        <Dropdown>
          <DropdownTrigger>
            <div className="flex items-center gap-2 text-white cursor-pointer hover:text-[#3B82F6] transition-colors">
              <Globe size={18} />
              <span className="font-medium uppercase">{languageCodes[selectedLang]}</span>
              <span className="hidden sm:inline">{languageOptions[selectedLang]}</span>
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Seleccionar idioma"
            variant="flat"
            className="w-40"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[selectedLang]}
            onAction={(key) => handleLanguageChange(key as string)}
          >
            {Object.entries(languageOptions).map(([key, label]) => (
              <DropdownItem key={key} className="flex gap-2">
                <span className="w-6 font-medium uppercase">{languageCodes[key]}</span> {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {isAuthenticated && (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-6 h-6 mr-[-240px]"
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{fullName}</p>
                <p className="text-sm text-gray-500">@{email?.split("@")[0]}</p>
              </DropdownItem>
              <DropdownItem key="profilePage" onClick={() => navigate(routes.profile)}>
                <User size={16} className="inline-block mr-2" />
                Mi Perfil
              </DropdownItem>
              <DropdownItem
                key="logout"
                onPress={!loading ? onLogOut : undefined}
                className="text-danger"
                color="danger"
              >
                <LogOut size={16} className="inline-block mr-2" />
                {loading ? "Cerrando Sesión..." : "Cerrar Sesión"}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems?.map((menu, index) => (
          <NavbarMenuItem key={`${menu.code}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              onPress={() => handleMenuItemClick(menu.path)}
              size="lg"
            >
              {menu.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarApp;