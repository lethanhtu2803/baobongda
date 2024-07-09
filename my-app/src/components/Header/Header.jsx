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
                          T-FootballNews
                        </li>
                        <li>
                          Trang thông tin về bóng đá nhanh và chính xác số một Việt Nam.
                        </li>
                      </ul>
                    </div>
                    <div className="header-info-right">
                      <ul className="header-date">
                        <li>
                          <span className="flaticon-calendar"></span> +84 397 205 667
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
                      <a href="/">
                      <img style={{height: 90}} src="assets/img/logo/logo1.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9">
                    <div className="header-banner f-right ">
                      <img src="assets/img/banner/banner3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-bottom header-sticky">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-11 col-lg-11 col-md-11 header-flex">
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
                            <NavLink to="/euro" className={({ isActive }) => (isActive ? "active-link" : "")}>Euro</NavLink>
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
                            <NavLink to="/english" className={({ isActive }) => (isActive ? "active-link" : "")}>Anh</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/premier-league">Ngoại Hạng Anh</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-epl">Lịch thi đấu NHA</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-epl">Kết quả NHA</NavLink>
                              </li>
                              <li>
                                <NavLink to="/rank-epl">Bảng xếp hạng NHA</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistic-epl">Thống kê NHA</NavLink>
                              </li>
                              <li>
                                <NavLink to="/fa-cup">Cup FA</NavLink>
                              </li>
                              <li>
                                <NavLink to="/league-cup">League Cup</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/spain" className={({ isActive }) => (isActive ? "active-link" : "")}>Tây Ban Nha</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/laliga">Laliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-laliga">Lịch thi đấu Laliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-laliga">Kết quả Laliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/rank-laliga">Bảng xếp hạng Laliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistic-laliga">Thống kê Laliga</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/france" className={({ isActive }) => (isActive ? "active-link" : "")}>Pháp</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/league1">League 1</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-l1">Lịch thi đấu L1</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-l1">Kết quả L1</NavLink>
                              </li>
                              <li>
                                <NavLink to="/rank-l1">Bảng xếp hạng L1</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistic-l1">Thống kê L1</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/germany" className={({ isActive }) => (isActive ? "active-link" : "")}>Đức</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/bundes">Bundesliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-bundes">Lịch thi đấu Bundesliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-bundes">Kết quả Bundesliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/rank-bundes">Bảng xếp hạng Bundesliga</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistic-bundes">Thống kê Bundesliga</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/italy" className={({ isActive }) => (isActive ? "active-link" : "")}>Ý</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/seria">Seri A</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-seria">Lịch thi đấu Seri A</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-seria">Kết quả Seri A</NavLink>
                              </li>
                              <li>
                                <NavLink to="/rank-seria">Bảng xếp hạng Seri A</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistic-seria">Thống kê Seri A</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/vn" className={({ isActive }) => (isActive ? "active-link" : "")}>Việt Nam</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/vleague">V-League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-vleague">Lịch thi đấu V-League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-vleague">Kết quả V-League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/rank-vleague">Bảng xếp hạng V-League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/statistic-vleague">Thống kê V-League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/cupqg">Cúp Quốc gia</NavLink>
                              </li>
                              <li>
                                <NavLink to="/dtqgvn">Đội tuyển Việt Nam</NavLink>
                              </li>
                              <li>
                                <NavLink to="/schedule-dtqg">Lịch thi đấu ĐTQG</NavLink>
                              </li>
                              <li>
                                <NavLink to="/result-dtqg">Kết quả ĐTQG</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/quocte" className={({ isActive }) => (isActive ? "active-link" : "")}>Quốc Tế</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/copa">Copa America</NavLink>
                              </li>
                              <li>
                                <NavLink to="/worldcup">World Cup</NavLink>
                              </li>
                              <li>
                                <NavLink to="/asian">AFC Asian Cup</NavLink>
                              </li>
                              <li>
                                <NavLink to="/olympic">Olympic</NavLink>
                              </li>
                              <li>
                                <NavLink to="/sea-games">SEA GAMES</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/chauau" className={({ isActive }) => (isActive ? "active-link" : "")}>Châu Âu</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/c1">UEFA Champions League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/c2">UEFA Europa League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/c3">UEFA Europa Conference League</NavLink>
                              </li>
                              <li>
                                <NavLink to="/nations-league">UEFA Nations League</NavLink>
                              </li>
                            </ul>
                          </li>
                          {/* <li>
                            <NavLink to="/category">Category</NavLink>
                          </li> */}
                          <li>
                            <NavLink to="/latest" className={({ isActive }) => (isActive ? "active-link" : "")}>Tin chuyển nhượng</NavLink>
                          </li>
                          <li>
                          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active-link" : "")}>Nhận định</NavLink>
                          </li>
                          <li>
                            <NavLink to="/hotnews" className={({ isActive }) => (isActive ? "active-link" : "")}>Tin nóng</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-1 col-md-1">
                    <div className="header-right f-right d-none d-lg-block">
                      <ul className="header-social">
                        <li>
                          <button
                            type="button"
                            className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                            onClick={toggleDropdown}
                          >
                            <i className="fa-solid fa-user text-white"></i>
                          </button>
                        </li>
                        {/* <li>
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
                        </li> */}
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
                        {/* <div className="overflow-hidden">
                          <button
                            type="button"
                            className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                            onClick={toggleDropdown}
                          >
                            <i className="fa-solid fa-user text-white"></i>
                          </button>
                        </div> */}
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
