import React from 'react';

const FilterBar = ({ keyword, onKeywordChange }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="search-input">Tìm kiếm </label>
      <input
        id="search-input"
        type="text"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        placeholder="Nhập tên sách..."
      />
    </div>
  );
};

export default FilterBar;