import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import BookTable from '../components/BookTable';

const BookList = ({ books, loading, error, onToggleStatus, onDelete }) => {
  const [keyword, setKeyword] = useState('');

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Không tải được dữ liệu</p>;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <div>
      <FilterBar keyword={keyword} onKeywordChange={setKeyword} />

      <p>{`Tìm thấy ${filteredBooks.length} cuốn sách`}</p>

      {filteredBooks.length === 0 ? (
        <p>Không có dữ liệu</p>
      ) : (
        <BookTable
          books={filteredBooks}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default BookList;