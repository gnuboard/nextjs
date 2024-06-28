"use client";

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const login = async (username, password) => {
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const response = await fetch('https://g6.demo.sir.kr/api/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new Error('로그인에 실패했습니다.');
    }

    const data = await response.json();
    setAccessToken(data.access_token);
    // 여기서 refresh_token을 HttpOnly 쿠키로 설정하는 API 호출을 할 수 있습니다.
  };

  const logout = () => {
    setAccessToken(null);
    // 여기서 refresh_token 쿠키를 삭제하는 API 호출을 할 수 있습니다.
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);