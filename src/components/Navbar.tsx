// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-pink-100 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-800">
          Biblioteca Virtual
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Inicio
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/libros" className={navigationMenuTriggerStyle()}>
                Libros
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/autores" className={navigationMenuTriggerStyle()}>
                Autores
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
