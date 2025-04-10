import { useState } from "react";
import "./style.css";
import { navItems } from "../../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand"></div>

      <button
        type="button"
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`overlay ${isOpen ? "show" : ""}`}>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.id}`}> {item.name} </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
