import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    username: "",
    password: "",
    email: "",
    created: "",
    status: "",
  });

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8087/api/account/findByEmail/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data); 
        setEditMode(true);
        console.log("Email found successfully");
      } else {
        alert("Email này chưa từng đăng kí tài khoản");
        console.error("Error submitting form:", data.status);
      }
    } catch (error) {
      alert("Email này chưa từng đăng kí tài khoản");
      console.error("Error submitting form:", error);
    }
  };

  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Mật khẩu không trùng khớp với nhau. Vui lòng nhập lại");
      return;
    }

    try {
      const response = await fetch("http://localhost:8087/api/account/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          password: newPassword,
          created: user.created,
          status: 1
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
        alert("Cập nhật mật khẩu thành công");
        navigate("/login");
      } else {
        console.error("Lỗi submit:", data.status);
      }
    } catch (error) {
      console.error("Lỗi submit:", error);
    }
  };

  return (
    <>
      {!editMode ? (
        <div className="max-w-md mx-auto mt-10 pb-10">
          <h2 className="text-2xl font-bold mb-5 text-center">Quên mật khẩu</h2>
          <form
            onSubmit={handleEmailSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Gửi email
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-10 pb-10">
          <h2 className="text-2xl font-bold mb-5 text-center">Đặt lại mật khẩu</h2>
          <form
            onSubmit={handlePasswordResetSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="newPassword"
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Đặt lại mật khẩu
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
