import { Link } from "react-router-dom";

function Books() {
  return (
    <div>
      <h1>Books</h1>

      <p>
        <Link to="/books/1">tompel</Link>
      </p>

      <p>
        <Link to="/books/2">hammas</Link>
      </p>

      <p>
        <Link to="/books/3">aji wa kopeee</Link>
      </p>
    </div>
  );
}

export default Books;