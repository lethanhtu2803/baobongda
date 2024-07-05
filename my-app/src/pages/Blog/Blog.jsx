import React, { useState, useEffect, useRef } from "react";
import { extractImageUrl } from "../../helper/RSSImage";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Toast } from 'primereact/toast';


const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";
const Blog = () => {
  const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 5; // mỗi trang có 5 bài
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isSaved, setIsSaved] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const toast = useRef(null);

  const showSuccessToast = () => {
    toast.current.show({ severity: 'success', summary: 'Thông báo', detail: 'Lưu bài viết thành công' });
  };

  const fetchDataFromRssFeed = async () => {
    try {
      const response = await fetch(
        `${CORS_PROXY}https://bongda24h.vn/RSS/1.rss`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      const items = Array.from(xml.querySelectorAll("item"));
      const parsedItems = items.map((item) => {
        const titleCData = item.getElementsByTagName("title")[0]?.textContent;
        const descriptionCData = item.querySelector("description")?.textContent;
        const url = extractImageUrl(descriptionCData);
        // Lấy nội dung từ CDATA
        const cdataTitle = titleCData.replace(/&quot;/g, '"');
        const cdataContent = descriptionCData.replace(/<[^>]+>/g, "");

        return {
          title: cdataTitle,
          link: item.getElementsByTagName("link")[0]?.textContent,
          description: cdataContent,
          pubDate: item.getElementsByTagName("pubDate")[0]?.textContent,
          mediaContent: url,
          category: item.getElementsByTagName("category")[0]?.textContent,
        };
      }).filter((item) => item.link);
      setRssItems(parsedItems);
      setPageCount(Math.ceil(parsedItems.length / itemsPerPage));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromRssFeed();
  }, []);

  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('savedStatus')) || {};
    setIsSaved(savedStatus);
  }, []);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const checkSave = async (link) => {
    try {
      const response = await fetch(`http://localhost:8087/api/favorite/countFavoriteByAccountID?link=${link}&username=${currentUser.username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.status === true;
    } catch (error) {
      console.error("Error checking save status:", error);
      return false;
    }
  }

  const handleSaveClick = async (item) => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    if (await checkSave(item.link)) {
      showSuccessToast();
      const updatedState = { ...isSaved, [item.link]: true };
      setIsSaved(updatedState);
      localStorage.setItem('savedStatus', JSON.stringify(updatedState));
      return;
    }

    const news = {
      accountUsername: currentUser.username,
      link: item.link,
      description: item.description,
      pubDate: new Date(item.pubDate),
      image: item.mediaContent,
      created: new Date(),
      title: item.title,
      category: item.category,
      status: true,
    };

    try {
      const response = await fetch("http://localhost:8087/api/favorite/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(news),
      });

      const data = await response.json();
      if (response.ok) {
        showSuccessToast();
        const updatedState = { ...isSaved, [item.link]: true };
        setIsSaved(updatedState);
        localStorage.setItem('savedStatus', JSON.stringify(updatedState));
      } else {
        console.error("Error submitting form:", data.status);
      }
    } catch (error) {
      window.location.reload();
      console.error("Error submitting form:", error);
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rssItems.length;
    setItemOffset(newOffset);
  };

  if (loading) return <div className='w-10 h-10 rounded-full border-4 border-primary border-t-0 border-t-transparent mx-auto animate-spin mb-5 mt-5'></div>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredItems = rssItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(itemOffset, itemOffset + itemsPerPage);

  return (
    <div>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {currentItems.map((item, index) => (
                  <article className="blog_item" key={index}>
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={item.mediaContent}
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>{new Date(item.pubDate).getDate()}</h3>
                        <p>
                          {new Date(item.pubDate).toLocaleString("default", {
                            month: "short",
                          })}
                        </p>
                      </a>
                    </div>

                    <div className="blog_details">
                      <a className="d-inline-block" href={item.link}>
                        <h2>{item.title}</h2>
                      </a>
                      <p>{item.description}</p>
                      <ul className="blog-info-link">
                        <li>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${item.link}`} target="_blank">
                            <i className="fa-solid fa-share-from-square"></i> Facebook
                          </a>
                        </li>
                        <li>
                        <button
                          onClick={() => handleSaveClick(item)}
                          disabled={isSaved[item.link] === true}
                          className={`text-base rounded-full text-black ${
                            isSaved[item.link] === true ? 'cursor-not-allowed' : ''
                          }`}
                        >
                          {isSaved[item.link] === true ? "Đã lưu" : '❤️'}
                        </button>

                          <Toast ref={toast} />
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}

                <nav className="blog-pagination justify-content-center d-flex">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    activeClassName="active"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                  />
                </nav>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget search_widget">
                  <form action="#">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tìm kiếm"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div class="input-group-append">
                          <button class="btns" type="button">
                            <i class="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </aside>

                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Danh mục</h4>
                  <ul class="list cat-list">
                    <li>
                      <Link to="/football-vn" class="d-flex">
                        <p>Bóng đá Việt Nam</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/football-euro" class="d-flex">
                        <p>Bóng đá Châu Âu</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/football-en" class="d-flex">
                        <p>Bóng đá Anh</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/football-italia" class="d-flex">
                        <p>Bóng đá Ý</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/football-france" class="d-flex">
                        <p>Bóng đá Pháp</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/football-spanish" class="d-flex">
                        <p>Bóng đá Tây Ban Nha</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/football-germany" class="d-flex">
                        <p>Bóng đá Đức</p>
                      </Link>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Recent Post</h3>
                  <div class="media post_item">
                    <img src="assets/img/post/post_1.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src="assets/img/post/post_2.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src="assets/img/post/post_3.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src="assets/img/post/post_4.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tag Clouds</h4>
                  <ul class="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget instagram_feeds">
                  <h4 class="widget_title">Instagram Feeds</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/post/post_5.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/post/post_6.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/post/post_7.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/post/post_8.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/post/post_9.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/post/post_10.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget newsletter_widget">
                  <h4 class="widget_title">Newsletter</h4>

                  <form action="#">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button
                      class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
