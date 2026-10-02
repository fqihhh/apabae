import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/books">Books</Link>{" "}
      <Link to="/favorites">Favorites</Link>{" "}
      <Link to="/help">Help</Link>
    </nav>
  );
}

export default Sidebar;