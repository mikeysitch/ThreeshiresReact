import "./header.css";
// creating your own HTML Tag.
function Header({ title, children }) {
  return (
    <header className="main-header">
      <img
        src="/assets/images/dc5ca6fb-1c54-45a1-b3c7-fa31f12c31c2.JPG"
        id="main-logo"
        alt="main-logo"
      />
    </header>
  );
}

export default Header;
