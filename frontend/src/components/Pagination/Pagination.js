import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Pagination.css'
import { useState } from 'react';
function CustomPagination(props) {
  const { pageCount, currentPage } = props;

  const [activePage, setActivePage] = useState(currentPage);
  console.log("cr",currentPage)
  const handleClick = (pageNumber) => {
    // Xử lý khi người dùng chọn trang mới
    console.log(`Page changed to: ${pageNumber}`);
    props.handlePageChange(pageNumber);
    setActivePage(pageNumber);
  }

  const getPages = () => {
    const maxButtons = 5;
    const halfButtons = Math.floor(maxButtons / 2);
    let startPage = Math.max(currentPage - halfButtons, 1);
    let endPage = startPage + maxButtons - 1;
    if (endPage > pageCount) {
      endPage = pageCount;
      if (pageCount<5) startPage =1;
      else 
      startPage = endPage - maxButtons + 1;
    }

    const pages = [];

    // Add previous button
    if (currentPage > 1) {
      pages.push(
        <Pagination.Prev key="prev" onClick={() => handleClick(currentPage - 1)} />
      );
    }

    // Add first page button
    if (startPage > 1) {
      pages.push(
        <Pagination.Item key={1} onClick={() => handleClick(1)}>
          1
        </Pagination.Item>
      );
      if (startPage > 2) {
        pages.push(<Pagination.Ellipsis key="ellipsis1" disabled />);
      }
    }

    // Add page buttons
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // Add last page button
    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        pages.push(<Pagination.Ellipsis key="ellipsis2" disabled />);
      }
      pages.push(
        <Pagination.Item
          key={pageCount}
          onClick={() => handleClick(pageCount)}
        >
          {pageCount}
        </Pagination.Item>
      );
    }

    // Add next button
    if (currentPage < pageCount) {
      pages.push(
        <Pagination.Next key="next" onClick={() => handleClick(currentPage + 1)} />
      );
    }

    return pages;
  };

  return <Pagination>{getPages()}</Pagination>;
}


export default CustomPagination;