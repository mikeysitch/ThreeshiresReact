import { useState } from "react";
import "./style.css";
import { navItems } from "../../data";
import { useNavHandler } from "../../hooks/navHandler";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTargetId, handleNavClick } = useNavHandler();

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
          {navItems.map((item, index) => {
            const targetId = getTargetId(item);
            return (
              <li key={index}>
                <a
                  href={`#${targetId}`}
                  onClick={(e) => {
                    handleNavClick(e, targetId);
                    setIsOpen(false); // optional: close menu after click
                  }}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
