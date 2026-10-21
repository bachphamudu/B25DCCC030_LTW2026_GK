import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ marginBottom: '20px', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" end>Trang chủ</NavLink>
      <NavLink to="/books" end>Danh sách</NavLink>
      <NavLink to="/books/new" end>Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;