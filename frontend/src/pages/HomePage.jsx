import { useEffect, useState } from "react";
import { getBooks, deleteBook as deleteBookApi } from "../api/bookApi.js";
import BookCard from "../components/BookCard.jsx";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    try {
      await deleteBookApi(id);
      fetchBooks();
    } catch (error) {
      console.error("Failed to delete book", error);
      alert("Failed to delete book");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Book Details</h1>
        <p>View, manage, edit, and remove books from the library.</p>
      </div>

      {loading ? (
        <p>Loading books...</p>
      ) : books.length === 0 ? (
        <p>No books available. Add a new book from the menu.</p>
      ) : (
        <div className="grid">
          {books.map((book) => (
            <BookCard key={book._id} book={book} onDelete={deleteBook} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;