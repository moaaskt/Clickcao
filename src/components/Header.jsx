import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo3.png";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", to: "/" },
    { name: "Raças", to: "/racas" },
    { name: "Cadastrar Cão", to: "/cadastrar-cao" },
    { name: "Sobre", to: "/sobre" },
    { name: "Contato", to: "/contato" }
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo ClickCão" className="h-11 " />
          <span className="text-xl font-bold">ClickCão</span>
        </Link>
        

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
            
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block py-2 border-b border-gray-700 hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
