// components/Board.js
"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Board = ({ bo_table }) => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const response = await axios.get(`https://g6.demo.sir.kr/api/v1/boards/${bo_table}/writes`, {
          params: {
            bo_table,
          },
        });

        const data = response.data;
        console.log('data:', data);
        if (data.board) {
          setBoard(data.board);
        } else {
          console.error('Board data not found in the response:', data);
        }
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };

    fetchBoardData();
  }, [bo_table]);

  return (
    <div>
      <h5>src/components/Board.js</h5>
      <Link href={`/board/${bo_table}`}>
        <h2 style={{ cursor: 'pointer' }}>{board?.bo_subject}</h2>
      </Link>
    </div>
  );
};

export default Board;