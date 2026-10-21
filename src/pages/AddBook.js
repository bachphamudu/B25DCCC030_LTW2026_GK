import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddBook = ({ onAdd, loading, error }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('Văn học');
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Không tải được dữ liệu</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !String(year).trim() || !category) {
      setFormError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    const numYear = Number(year);
    const currentYear = new Date().getFullYear(); 

    if (!Number.isInteger(numYear) || numYear < 1000 || numYear > currentYear) {
      setFormError('Năm xuất bản phải từ 1000 đến 2026 ^^');
      return;
    }

    setFormError('');
    onAdd({
      title: title.trim(),
      author: author.trim(),
      year: numYear,
      category,
    });

    navigate('/books', { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tên sách</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Tác giả</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Năm xuất bản</label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Thể loại</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
      {formError && <p>{formError}</p>}
    </div>
  );
};

export default AddBook;