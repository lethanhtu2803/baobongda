import React, { useState } from 'react';
import { BaseUrlService } from './BaseUrlService'; // Đảm bảo import BaseUrlService từ file tương ứng
import { HttpClient } from './HttpClient'; // Đảm bảo import HttpClient từ file tương ứng
import { lastValueFrom } from 'rxjs'; // Đảm bảo import lastValueFrom từ thư viện RXJS

const AuthComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const baseUrlService = new BaseUrlService(); // Khởi tạo BaseUrlService
  const httpClient = new HttpClient(); // Khởi tạo HttpClient

  // Hàm login bây giờ là một async function trong React
  const login = async (username, password) => {
    try {
      const response = await lastValueFrom(httpClient.get(baseUrlService.getBaseUrl() + 'account/login/' + username + '/' + password));
      // Xử lý phản hồi từ server (response) tại đây nếu cần
      setIsLoggedIn(true); // Đánh dấu là đã đăng nhập thành công
      return response; // Trả về phản hồi từ server (nếu cần)
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Ném lỗi ra bên ngoài để component cha có thể xử lý
    }
  };

  // Hàm kiểm tra trạng thái đăng nhập
  const isLogged = () => {
    return isLoggedIn;
  };

  // Hàm đặt trạng thái đăng nhập
  const setLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div>
      <p>Is logged in: {isLogged() ? 'Yes' : 'No'}</p>
      {/* Đặt các nút hoặc hành động để gọi hàm login và setLogin */}
    </div>
  );
};

export default AuthComponent;