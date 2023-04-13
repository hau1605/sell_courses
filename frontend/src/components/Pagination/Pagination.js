import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Pagination.css'
function CustomPagination(props) {
  const { pageCount, currentPage } = props;

  const handlePageChange = (pageNumber) => {
    // Xử lý khi người dùng chọn trang mới
    console.log(`Page changed to: ${pageNumber}`);
    props.handlePageChange(pageNumber);
  }

  const paginationItems = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationItems.push(
      <Pagination.Item 
        key={i} 
        active={i === currentPage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      {/* Nút Previous (trang trước) */}
      {currentPage > 1 && (
        <Pagination.Prev 
          onClick={() => handlePageChange(currentPage - 1)}
        />
      )}

      {/* Các nút phân trang */}
      {paginationItems}

      {/* Nút Next (trang tiếp theo) */}
      {currentPage < pageCount && (
        <Pagination.Next 
          onClick={() => handlePageChange(currentPage + 1)}
        />
      )}
    </Pagination>
  );
}

export default CustomPagination;