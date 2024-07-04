import React, { useEffect, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';
const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

const SaveNews = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [favoriteNews, setFavoriteNews] = useState([]);
  const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FetchDataFromRssFeed = async () => {
    try {
      const response = await fetch(`${CORS_PROXY}https://bongda24h.vn/RSS/187.rss`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      const items = Array.from(xml.querySelectorAll("item"));
      const parsedItems = items.map((item) => {
        const titleCData = item.getElementsByTagName('title')[0]?.textContent;
        const descriptionCData = item.querySelector("description")?.textContent;
        const url = extractImageUrl(descriptionCData);
        const cdataTitle = titleCData.replace(/&quot;/g, '"');
        const cdataContent = descriptionCData.replace(/<[^>]+>/g, '');
      
        return {
          title: cdataTitle,
          link: item.getElementsByTagName('link')[0]?.textContent,
          description: cdataContent,
          pubDate: item.getElementsByTagName('pubDate')[0]?.textContent,
          mediaContent: url,
          category: item.getElementsByTagName('category')[0]?.textContent,
        };
      });
      setRssItems(parsedItems);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const findAllFavorite = async () => {
    try {
      const response = await fetch(`http://localhost:8087/api/favorite/findFavoriteByAccountID/${currentUser.username}`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setFavoriteNews(data);
      } else {
        console.error("Error fetching favorite news:", response.status);
      }
    } catch (error) {
      console.error("Error fetching favorite news:", error);
    }
  };

  const handleDeleteClick = async (item) => {
    try {
      const response = await fetch(`http://localhost:8087/api/favorite/delete/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountUsername: currentUser.username,
          link: item.link,
        }),
      });

      if (response.ok) {
        setFavoriteNews(favoriteNews.filter(news => news.link !== item.link));
      } else {
        console.error("Error deleting favorite news:", response.status);
      }
    } catch (error) {
      console.error("Error deleting favorite news:", error);
    }
  };

  useEffect(() => {
    FetchDataFromRssFeed();
  }, []);

  useEffect(() => {
    findAllFavorite();
  }, []);

  if (loading) return <div className='w-10 h-10 rounded-full border-4 border-primary border-t-0 border-t-transparent mx-auto animate-spin mb-5 mt-5'></div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <main>
        <div className="about-area2 gray-bg pt-10 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className='font-bold text-4xl mb-30'>Bài viết đã lưu</h2>
                <div className="about-right mb-90">
                  {favoriteNews.map((item, index) => (
                    <article className="blog_item" key={index}>
                      <div className="blog_item_img">
                        <img className="card-img rounded-0" src={item.image} alt="" />
                        <a href="#" className="blog_item_date">
                          <h3>{new Date(item.pubDate).getDate()}</h3>
                          <p>{new Date(item.pubDate).toLocaleString("default", { month: "short" })}</p>
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
                            <button onClick={() => handleDeleteClick(item)} className="delete-button" style={{
                              fontSize: '14px',
                              color: '#999999',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              🗑️ Xóa
                            </button>
                          </li>
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-follow mb-45">
                  <div className="single-box">
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#"><img src="assets/img/news/icon-fb.png" alt="" /></a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#"><img src="assets/img/news/icon-tw.png" alt="" /></a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#"><img src="assets/img/news/icon-ins.png" alt="" /></a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#"><img src="assets/img/news/icon-yo.png" alt="" /></a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-poster d-none d-lg-block">
                  <img src="assets/img/news/news_card.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SaveNews;
