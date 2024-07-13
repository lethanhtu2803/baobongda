import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  const [showPassword, setShowPassword] = useState(false);
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
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    created: user.created,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if(!currentUser) navigate("/")
      try {
        const response = await fetch(
          `http://localhost:8087/api/account/findByUsername/${currentUser.username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setUser(data); 
        console.log(user);
        setFormData({
          id: data.id,
          fullName: data.fullName,
          username: data.username,
          email: data.email,
          password: data.password,
          created: data.created,
          status: 1
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [currentUser?.username || ""]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8087/api/account/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const updatedUser = await response.json();
      setUser(updatedUser);
      window.location.reload();
      setEditMode(false);
    } catch (error) {
      console.error("Lỗi update thông tin cá nhân:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center m-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL6TBF6f4OmR3C6yj7pffvMkM13n9j6Prpg&s"
            alt="Avatar"
            className="w-32 h-32 rounded-full"
          />
        </div>
        {!editMode ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">{user?.fullName || ""}</h2>
            <p className="text-gray-600 mb-4">{user?.email || ""}</p>

            {user.bio && <p className="text-gray-700">{user.bio}</p>}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setEditMode(true)}
            >
              Cập nhật tài khoản
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="id"
              >
                
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="id"
                type="hidden"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Họ và tên
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Tên tài khoản
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
           
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="relative flex items-center" style={{top: "-2em", left: "23.2em"}}>
                <button
                  type="button"
                  className="text-gray-600 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cập nhật
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setEditMode(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
