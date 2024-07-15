import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const account = {
    username: username,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8087/api/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });

      const data = await response.json();
      if (response.ok && data.status === true) {
        // Lưu thông tin đăng nhập vào LocalStorage
        localStorage.setItem(
          "currentUser",
          JSON.stringify({username: account.username, status: data.status})
        );
        navigate("/");
        window.location.reload();
        console.log("login thành công");
      } else {
        alert("Không tồn tại tài khoản này. Nếu chưa có xin vui lòng đăng kí tài khoản")
      }
    } catch (error) {
      console.error("Lỗi submit:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 pb-10">
      <h2 className="text-2xl font-bold mb-5 text-center">Đăng nhập</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Tên tài khoản
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Đăng nhập
        </button>
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Quên mật khẩu?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
