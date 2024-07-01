import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(currentUser);
    if (currentUser) setUser(currentUser);
  }, []);
  console.log(user);
  return (
    <div>
      <header>
        <div className="header-area">
          <div className="main-header ">
            <div className="header-top black-bg d-none d-sm-block">
              <div className="container">
                <div className="col-xl-12">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="header-info-left">
                      <ul>
                        <li className="title">
                          <span className="flaticon-energy"></span>{" "}
                          trending-title
                        </li>
                        <li>
                          className property employ ancho red multi level
                          mansion
                        </li>
                      </ul>
                    </div>
                    <div className="header-info-right">
                      <ul className="header-date">
                        <li>
                          <span className="flaticon-calendar"></span> +880166
                          253 232
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-mid gray-bg" style={{padding: 0}}>
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9">
                    <div className="header-banner f-right ">
                      <img src="assets/img/gallery/header_card.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-bottom header-sticky">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
                    <div className="sticky-logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>

                    <div className="main-menu d-none d-md-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Trang chủ</NavLink>
                          </li>
                          <li>
                            <NavLink to="/euro" className={({ isActive }) => (isActive ? "text-rose-600" : "")}>Euro</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/schedule-euro">Lịch thi đấu Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-euro">Kết quả Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/charts-euro">BXH Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistical-euro">Thống kê Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/top-goal-euro">Vua phá lưới</NavLink>
                              </li>
                              <li>
                                <NavLink to="/identify-euro">Nhận định Euro</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/english" className={({ isActive }) => (isActive ? "text-rose-600" : "")}>Anh</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/schedule-euro">Lịch thi đấu Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-euro">Kết quả Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/charts-euro">BXH Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistical-euro">Thống kê Euro</NavLink>
                              </li>
                              <li>
                                <NavLink to="/top-goal-euro">Vua phá lưới</NavLink>
                              </li>
                              <li>
                                <NavLink to="/identify-euro">Nhận định Euro</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/category">Category</NavLink>
                          </li>
                          <li>
                            <NavLink to="/latest">Tin nóng</NavLink>
                          </li>
                          <li>
                            <a to="">Pages</a>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/blog">Blog</NavLink>
                              </li>
                              <li>
                                <NavLink to="/blog-details">Blog Details</NavLink>
                              </li>
                              <li>
                                <NavLink to="elements.html">Element</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="">Contact</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="header-right f-right d-none d-lg-block">
                      <ul className="header-social">
                        <li>
                          <a href="https://www.fb.com/sai4ull">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>

                      {/* <div
                        className="nav-search search-switch"
                        style={{ padding: "30x 15px" }}
                      >
                        <i className="fa fa-search"></i>
                        {user ? (
                          <Link to="/">
                            <i className="fa-solid fa-user-secret"></i>
                          </Link>
                        ) : (
                          <Link to="/login">
                            <i className="fa-solid fa-user"></i>
                          </Link>
                        )}
                       
                      </div> */}
                      {/* Button toggle dropdown */}
                      <div className="relative inline-block text-left" style={{top: "11px"}}>
                        <div className="overflow-hidden">
                          <button
                            type="button"
                            className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                            onClick={toggleDropdown}
                          >
                            <i className="fa-solid fa-user text-white"></i>
                          </button>
                        </div>
                        {isOpen && (
                          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                            <div className="py-1">
                              <Link
                                to="/register"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Đăng ký
                              </Link>
                              <Link
                                to="/login"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Đăng nhập
                              </Link>
                              {user ? (
                                <Link
                                to="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Xem thông tin tài khoản
                              </Link>
                                ) : (
                                  <></>
                              )}
                              {user ? (
                                <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => {
                                  window.location.reload();
                                  localStorage.clear();
                                }}
                              >
                                Đăng xuất
                              </Link>
                                ) : (
                                  <></>
                              )}
                              {user ? (
                                <Link
                                to="/save-news"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Xem bài viết đã lưu
                              </Link>
                                ) : (
                                  <></>
                              )}
                              {/* <Link
                                to="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Xem thông tin tài khoản
                              </Link> */}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile_menu d-block d-md-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
