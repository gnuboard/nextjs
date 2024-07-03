// app/(board)/board/[bo_table]/page.js
"use client";
import React, { useState, useEffect } from 'react';
import ListWrites from './ListWrites';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

async function fetchListWrites(bo_table, sst, sod, sfl, stx, sca, page, per_page) {
  const url = `https://g6.demo.sir.kr/api/v1/boards/${bo_table}/writes`;
  const params = {
    sst,
    sod,
    sfl,
    stx,
    sca,
    page,
    per_page,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching board writes:', error);
    return { writes: [], total_records: 0, total_pages: 0, current_page: 0 };
  }
}

export default function ListWritesPage({ params }) {
  const { bo_table } = params;
  const sst = ''; // 정렬 필드
  const sod = 'and'; // 정렬 순서
  const sfl = 'wr_subject||wr_content'; // 검색 필드
  const stx = ''; // 검색어
  const sca = ''; // 검색 분류
  const per_page = 10; // 페이지 당 결과 수

  const [writes, setWrites] = useState([]);
  const [board, setBoard] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadWrites() {
      const data = await fetchListWrites(bo_table, sst, sod, sfl, stx, sca, currentPage, per_page);
      setWrites(data.writes);
      setBoard(data.board);
      setTotalRecords(data.total_records);
      setTotalPages(data.total_pages);
      setCurrentPage(data.current_page);
    }
    loadWrites();
  }, [bo_table, currentPage, sst, sod, sfl, stx, sca, per_page]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div>
      <ListWrites writes={writes} board={board} />
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousLabel={'이전'}
        nextLabel={'다음'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
