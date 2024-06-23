import React, { useState, useContext } from "react";
import style from "./ProductList.module.css";
import { ListProvider } from "../Store/list.store";

const Pagination = () => {
  const { totalPost, postPerPage, pagination } = useContext(ListProvider);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalPost / postPerPage);

  const pageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      pagination(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      pagination(currentPage - 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className={`pagination pagContainer ${style.pagContainer}`}>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" href="#" onClick={handlePrevious}>
            Previous
          </a>
        </li>
        {pageNumber.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
            onClick={() => {
              setCurrentPage(number);
              pagination(number);
            }}
          >
            <a className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a className="page-link" href="#" onClick={handleNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
