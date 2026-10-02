import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Detail</h1>
      <p>Book ID: {id}</p>
    </div>
  );
}

export default BookDetail;