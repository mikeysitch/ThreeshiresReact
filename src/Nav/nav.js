import "./nav.css";
// creating your own HTML Tag.
function Nav({}) {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
