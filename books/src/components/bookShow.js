import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3> {book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/200/200`} />
      <div className="content">{content}</div>
      <div>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit" onClick={handleEdit}>
          edit
        </button>
      </div>
    </div>
  );
}
export default BookShow;
