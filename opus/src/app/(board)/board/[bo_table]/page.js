// app/(home)/(board)/board/[bo_table]/page.js
import React from 'react';
import BoardWrites from './BoardWrites';
import axios from 'axios';

async function fetchBoardWrites(bo_table, sst, sod, sfl, stx, sca, page, per_page) {
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
    console.log('Board writes response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching board writes:', error);
    return [];
  }
}

export default async function BoardWritesPage({ params }) {
  const { bo_table } = params;
  const sst = ''; // 정렬 필드
  const sod = 'and'; // 정렬 순서
  const sfl = 'wr_subject||wr_content'; // 검색 필드
  const stx = ''; // 검색어
  const sca = ''; // 검색 분류
  const page = 1; // 페이지 번호
  const per_page = 10; // 페이지 당 결과 수

  console.log('bo_table:', bo_table);

  const writes = await fetchBoardWrites(bo_table, sst, sod, sfl, stx, sca, page, per_page);

  return <BoardWrites writes={writes} />;
}
