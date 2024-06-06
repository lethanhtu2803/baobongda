import React, { useEffect, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";
const FootballVN = () => {
    const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FetchDataFromRssFeed = async () => {
    try {
      const response = await fetch(
        `${CORS_PROXY}https://bongda24h.vn/RSS/168.rss`
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
        const timeSincePost = formatDistanceToNow(item.getElementsByTagName('pubDate')[0]?.textContent, { addSuffix: true, locale: vi });
        const url = extractImageUrl(descriptionCData);
        console.log(descriptionCData);
        // Lấy nội dung từ CDATA
        const cdataTitle = titleCData.replace(/&quot;/g, '"');
        const cdataContent = descriptionCData.replace(/<[^>]+>/g, '');
      
        return {
          title: cdataTitle,
          link: item.getElementsByTagName('link')[0]?.textContent,
          description: cdataContent,
          pubDate: timeSincePost,
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <main>

    <div class="about-area2 gray-bg pt-60 pb-60">
        <div class="container">
                <div class="row">
                <div class="col-lg-8">
                    <div class="whats-news-wrapper">
           
                            <div class="row justify-content-between align-items-end mb-15">
                                <div class="col-xl-4">
                                    <div class="section-tittle mb-30">
                                        <h3>Bóng đá Việt Nam</h3>
                                    </div>
                                </div>
                                {/* <div class="col-xl-8 col-md-9">
                                    <div class="properties__button">
                                                                            
                                        <nav>                                                 
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Lifestyle</a>
                                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Travel</a>
                                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
                                                <a class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Sports</a>
                                                <a class="nav-item nav-link" id="nav-Sports" data-toggle="tab" href="#nav-nav-Sport" role="tab" aria-controls="nav-contact" aria-selected="false">Technology</a>
                                            </div>
                                        </nav>
                                   
                                    </div>
                                </div> */}
                            </div>
                        
                            <div class="row">
                                <div class="col-12">
                              
                                    <div class="tab-content" id="nav-tabContent">
                                   
                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
                                            <div class="row">
                                            {rssItems.length > 0 && rssItems.map((item) => (
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                        {item.mediaContent && <img src={item.mediaContent} alt={item.title} height={212}/>}
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">{item.title}</a></h4>
                                                            <span>{item.pubDate}</span>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                      
                                        {/* <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details3.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details3.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                              
                                        <div class="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details2.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details2.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                        <div class="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details2.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details3.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="whats-news-single mb-40 mb-40">
                                                        <div class="whates-img">
                                                            <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                        </div>
                                                        <div class="whates-caption whates-caption2">
                                                            <h4><a href="#">Secretart for Economic Air
                                                                plane that looks like</a></h4>
                                                            <span>by Alice cloe   -   Jun 19, 2020</span>
                                                            <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                           
                                </div>
                            </div>
                    </div>
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
{/* 
    <div class="pagination-area  gray-bg pb-45">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="single-wrap">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                            <li class="page-item"><a class="page-link" href="#">
                       
                                <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="15px">
                                    <path fill-rule="evenodd"  fill="rgb(221, 221, 221)" d="M8.142,13.118 L6.973,14.135 L0.127,7.646 L0.127,6.623 L6.973,0.132 L8.087,1.153 L2.683,6.413 L23.309,6.413 L23.309,7.856 L2.683,7.856 L8.142,13.118 Z"/>
                                    </svg>
                            </span></a></li>
                                <li class="page-item active"><a class="page-link" href="#">01</a></li>
                                <li class="page-item"><a class="page-link" href="#">02</a></li>
                                <li class="page-item"><a class="page-link" href="#">03</a></li>
                            <li class="page-item"><a class="page-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="15px"/>
                                <path fill-rule="evenodd"  fill="rgb(255, 11, 11)" d="M31.112,13.118 L32.281,14.136 L39.127,7.646 L39.127,6.624 L32.281,0.132 L31.167,1.154 L36.571,6.413 L0.491,6.413 L0.491,7.857 L36.571,7.857 L31.112,13.118 Z"/>
                                </svg>
                            </span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
 
</main>
        </div>
    );
};

export default FootballVN;