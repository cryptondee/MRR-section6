import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./css/index.css";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book, index) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book, index) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list </h1>
      {books.length}
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
