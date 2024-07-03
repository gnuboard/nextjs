"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Board from './Board';

const Latest = ({ bo_table, view_type, rows }) => {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://g6.demo.sir.kr/api/v1/board-new/writes/${bo_table}`, {
          params: {
            bo_table,
            view_type,
            rows
          }
        });

        const data = response.data;
        if (data[bo_table] && Array.isArray(data[bo_table])) {
          setBoardData(data[bo_table]);
        } else {
          console.error('API response data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [bo_table, view_type, rows]);

  return (
    <div>
      <h5>
        src/components/Latest.js
      </h5>
      <h2>
        <Board bo_table={bo_table} />
      </h2>
      {boardData.length > 0 ? (
        <ul>
          {boardData.map((board) => (
            <li key={board.wr_id}>
              <h3>{board.wr_subject}</h3>
              <div dangerouslySetInnerHTML={{ __html: board.wr_content }}></div>
              <p>작성자: {board.wr_name}</p>
              <p>작성일: {board.wr_datetime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Latest;