import React from 'react';
import { Link } from 'react-router-dom';

const BookRow = ({ book, onToggleStatus, onDelete }) => {
  const { id, title, author, year, category, available } = book;

  return (
    <tr className={!available ? 'borrowed-row' : ''}>
      <td>
        <Link to={`/books/${id}`}>{title}</Link>
      </td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{category}</td>
      <td>{available ? 'Có sẵn' : 'Đang mượn'}</td>
      <td>
        <button type="button" onClick={() => onToggleStatus(id)}>
          {available ? 'Cho mượn' : 'Nhận trả'}
        </button>
        {' '}
        <button type="button" onClick={() => onDelete(id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default BookRow;