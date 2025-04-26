import "./nav.css";
import { navItems } from "../data";
import { useNavHandler } from "../hooks/navHandler";

function Nav() {
  const { getTargetId, handleNavClick } = useNavHandler();

  return (
    <nav>
      <ul className="nav-links-desktop">
        {navItems.map((item, index) => {
          const targetId = getTargetId(item);
          return (
            <li key={index}>
              <a
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
