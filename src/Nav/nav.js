import "./nav.css";
import { navItems } from "../data";

// creating your own HTML Tag.
function Nav({}) {
  return (
    <nav>
      <ul className="nav-links-desktop">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.id}`}> {item.name} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
