import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get('/data/books.json', { signal: controller.signal })
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError('Không tải được dữ liệu');
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleToggleStatus = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, available: !book.available } : book
      )
    );
  };

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleAddBook = (newBookData) => {
    setBooks((prevBooks) => {
      const maxId = prevBooks.reduce(
        (max, book) => (book.id > max ? book.id : max),
        0
      );
      const newBook = {
        id: maxId + 1,
        ...newBookData,
        available: true,
      };
      return [...prevBooks, newBook];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home books={books} loading={loading} error={error} />}
        />
        <Route
          path="books"
          element={
            <BookList
              books={books}
              loading={loading}
              error={error}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="books/new"
          element={
            <AddBook onAdd={handleAddBook} loading={loading} error={error} />
          }
        />
        <Route
          path="books/:id"
          element={
            <BookDetail books={books} loading={loading} error={error} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;