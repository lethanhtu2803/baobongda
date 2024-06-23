import React, { useEffect, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { useRssFeed } from '../../helper/rssFetcher';

const FootballFRANCE = () => {
    const { rssItems, loading, error } = useRssFeed(197);

    if (loading) return <div className='w-10 h-10 rounded-full border-4 border-primary border-t-0 border-t-transparent mx-auto animate-spin mb-5 mt-5'></div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div>
        <main>

<div className="about-area2 gray-bg pt-20 pb-60">
    <div className="container">
            <div className="row">
            <div className="col-lg-8">
                <div className="whats-news-wrapper">
       
                        <div className="row justify-content-between align-items-end mb-15">
                            <div className="col-xl-6">
                                <div className="section-tittle mb-30">
                                    <h3>Bóng đá Pháp</h3>
                                </div>
                            </div>
                            {/* <div className="col-xl-8 col-md-9">
                                <div className="properties__button">
                                                                        
                                    <nav>                                                 
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Lifestyle</a>
                                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Travel</a>
                                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
                                            <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Sports</a>
                                            <a className="nav-item nav-link" id="nav-Sports" data-toggle="tab" href="#nav-nav-Sport" role="tab" aria-controls="nav-contact" aria-selected="false">Technology</a>
                                        </div>
                                    </nav>
                               
                                </div>
                            </div> */}
                        </div>
                    
                        <div className="row">
                            <div className="col-12">
                          
                                <div className="tab-content" id="nav-tabContent">
                               
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
                                        <div className="row">
                                        {rssItems.length > 0 && rssItems.map((item) => (
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-20">
                                                    <div className="whates-img">
                                                    {item.mediaContent && <img src={item.mediaContent} alt={item.title} className='h-56'/>}
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">{item.title}</a></h4>
                                                        <span>{item.pubDate}</span>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                  
                                    {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details3.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details3.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                          
                                    <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details2.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details2.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details1.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details2.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details3.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details4.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details5.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4><a href="#">Secretart for Economic Air
                                                            plane that looks like</a></h4>
                                                        <span>by Alice cloe   -   Jun 19, 2020</span>
                                                        <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="whats-news-single mb-40 mb-40">
                                                    <div className="whates-img">
                                                        <img src="assets/img/gallery/whats_news_details6.png" alt=""/>
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
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
                <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget search_widget">
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Keyword"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Search Keyword'"
                    />
                    <div className="input-group-append">
                      <button className="btns" type="button">
                        <i className="ti-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </aside>

            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title">Danh mục</h4>
              <ul className="list cat-list">
                <li>
                  <Link to="/football-vn" className="d-flex">
                    <p>Bóng đá Việt Nam</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-euro" className="d-flex">
                    <p>Bóng đá Châu Âu</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-en" className="d-flex">
                    <p>Bóng đá Anh</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-italia" className="d-flex">
                    <p>Bóng đá Ý</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-france" className="d-flex">
                    <p className='active'>Bóng đá Pháp</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-spanish" className="d-flex">
                    <p>Bóng đá Tây Ban Nha</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-germany" className="d-flex">
                    <p>Bóng đá Đức</p>
                  </Link>
                </li>
              </ul>
            </aside>

            <div className="news-poster d-none d-lg-block">
                        <img src="assets/img/news/news_card.jpg" alt=""/>
            </div>
          </div>
        </div>
            </div>
    </div>
</div>
{/* 
<div className="pagination-area  gray-bg pb-45">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="single-wrap">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                        <li className="page-item"><a className="page-link" href="#">
                   
                            <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="15px">
                                <path fill-rule="evenodd"  fill="rgb(221, 221, 221)" d="M8.142,13.118 L6.973,14.135 L0.127,7.646 L0.127,6.623 L6.973,0.132 L8.087,1.153 L2.683,6.413 L23.309,6.413 L23.309,7.856 L2.683,7.856 L8.142,13.118 Z"/>
                                </svg>
                        </span></a></li>
                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item"><a className="page-link" href="#">
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

export default FootballFRANCE;