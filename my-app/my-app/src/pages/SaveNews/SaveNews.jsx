import React, { useEffect, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';
const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";
const SaveNews = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [ favoriteNews, setFavoriteNews ] = useState();
    const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FetchDataFromRssFeed = async () => {
    try {
      const response = await fetch(
        `${CORS_PROXY}https://bongda24h.vn/RSS/187.rss`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      console.log(xml);
      const items = Array.from(xml.querySelectorAll("item"));
      const parsedItems = items.map((item) => {
        const titleCData = item.getElementsByTagName('title')[0]?.textContent
        const descriptionCData = item.querySelector("description")?.textContent;
        const url = extractImageUrl(descriptionCData);
        console.log(descriptionCData);
        // Lấy nội dung từ CDATA
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
      console.log(parsedItems);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchDataFromRssFeed();
  }, []);

  const findAllFavorite = async () => {
    try {
        const response = await fetch(`http://localhost:8087/api/favorite/findFavoriteByAccountID/${currentUser.username}`, {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            setFavoriteNews(data);
        } else {
            console.error("Error fetching comments:", response.status);
        }
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
};
    useEffect(() => {
        findAllFavorite()
    }, []);
  if (loading) return <div className='w-10 h-10 rounded-full border-4 border-primary border-t-0 border-t-transparent mx-auto animate-spin mb-5 mt-5'></div>;
  if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <main>
  
    <div class="about-area2 gray-bg pt-60 pb-60">
        <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                  
                        <div class="about-right mb-90">
                        {favoriteNews.map((item, index) => (
                            <article className="blog_item" key={index}>
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={item.image}
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
                          <i class="fa-solid fa-share-from-square"></i> Facebook
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                            ))}
                            {/* <div class="social-share pt-30">
                                <div class="section-tittle">
                                    <h3 class="mr-20">Share:</h3>
                                    <ul>
                                        <li><a href="#"><img src="assets/img/news/icon-ins.png" alt=""/></a></li>
                                        <li><a href="#"><img src="assets/img/news/icon-fb.png" alt=""/></a></li>
                                        <li><a href="#"><img src="assets/img/news/icon-tw.png" alt=""/></a></li>
                                        <li><a href="#"><img src="assets/img/news/icon-yo.png" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                      
                        {/* <div class="row">
                            <div class="col-lg-8">
                                <form class="form-contact contact_form mb-80" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea class="form-control w-100 error" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control error" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control error" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input class="form-control error" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <button type="submit" class="button button-contactForm boxed-btn boxed-btn2">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    <div class="col-lg-4">
                  
                        <div class="single-follow mb-45">
                            <div class="single-box">
                                <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src="assets/img/news/icon-fb.png" alt=""/></a>
                                    </div>
                                    <div class="follow-count">  
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div> 
                                <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src="assets/img/news/icon-tw.png" alt=""/></a>
                                    </div>
                                    <div class="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                                    <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src="assets/img/news/icon-ins.png" alt=""/></a>
                                    </div>
                                    <div class="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                                <div class="follow-us d-flex align-items-center">
                                    <div class="follow-social">
                                        <a href="#"><img src="assets/img/news/icon-yo.png" alt=""/></a>
                                    </div>
                                    <div class="follow-count">
                                        <span>8,045</span>
                                        <p>Fans</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div class="news-poster d-none d-lg-block">
                            <img src="assets/img/news/news_card.jpg" alt=""/>
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