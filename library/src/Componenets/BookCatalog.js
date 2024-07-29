import React, {useState, useEffect} from "react";
import axios from "axios";
import { db } from "../firebase";
import { ref, onValue, push, update } from 'firebase/database';
import "./BookCatalog.css"



const BookCatalog = () => { 
  // هون منخزن الكتب
  const [books, setBooks] = useState([]);
  // هون لو منا نخزن اسامي كتب جديدي
  const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '' });
  // هون لتعديل كتاب
  const [editBook, setEditBook] = useState({ id: null, title: '', author: '', isbn: '' });

  const firebaseUrl = "https://library-books-76751-default-rtdb.firebaseio.com";
  
  // هون بيسوي تحميل مره وحدي
  useEffect(() => {
    // *
    fetchBooks();
  }, []);

  // هون بيجيب الكتب
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${firebaseUrl}/books.json`);
      const data = response.data;

      // تحديث الحالة بالبيانات المحمّلة
      if (data) {
        const booksArray = Object.keys(data).map(id => ({ id, ...data[id] }));
        setBooks(booksArray);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  // هون بس نجي ندخل بيانات الكتاب
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // هون بس نجي ندخل بيانات الكتاب للتعديل
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditBook({ ...editBook, [name]: value });
  };

  const addBook = async () => {
    try {
      // هون منضيف الكتاب الجديد الي دخلنا بياياناتو
      await axios.post(`${firebaseUrl}/books.json`, newBook);
      // هون بيحدث وبيجيب الكتب
      fetchBooks();
      setNewBook({ title: '', author: '', isbn: '' });
    } catch (error) {
      console.error("Error adding book: ", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      // هون منحذف الكتاب حسب الايدي
      await axios.delete(`${firebaseUrl}/books/${id}.json`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book: ", error);
    }
  };

  const startEditing = (book) => {
    // هون بنجهز الكتاب للتعديل
    setEditBook(book);
  };

  const cancelEditing = () => {
    // هون بنلغي التعديل
    setEditBook({ id: null, title: '', author: '', isbn: '' });
  };

  const saveEditBook = async () => {
    try {
      // هون بنعدل الكتاب حسب الايدي
      await axios.put(`${firebaseUrl}/books/${editBook.id}.json`, {
        title: editBook.title,
        author: editBook.author,
        isbn: editBook.isbn
      });
      fetchBooks();
      cancelEditing();
    } catch (error) {
      console.error("Error editing book: ", error);
    }
  };

  return (
    <div className="book-catalog">
      <div className="add">
        <h2>Add a New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <h1>Book Catalog</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <button onClick={() => startEditing(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>

      {editBook.id && (
        <div className="edit">
          <h2>Edit Book</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editBook.title}
            onChange={handleEditInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={editBook.author}
            onChange={handleEditInputChange}
          />
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={editBook.isbn}
            onChange={handleEditInputChange}
          />
          <button onClick={saveEditBook}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default BookCatalog;