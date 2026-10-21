import React from 'react';
import BookTable from '../components/BookTable';

const BookList = ({ books, loading, error, onToggleStatus, onDelete }) => {
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Không tải được dữ liệu</p>;

  return (
    <div>
      <BookTable
        books={books}
        onToggleStatus={onToggleStatus}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BookList;