import React, { useEffect, useRef, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Link, useNavigate } from 'react-router-dom';
import { useRssFeed } from '../../helper/rssFetcher';
import { Toast } from 'primereact/toast';

const FootballENG = () => {
    const { rssItems, loading, error } = useRssFeed(172);
    const [isSaved, setIsSaved] = useState({});
    const navigate = useNavigate();
    const toast = useRef(null);

  const showSuccessToast = () => {
    toast.current.show({ severity: 'success', summary: 'Thông báo', detail: 'Lưu bài viết thành công' });
  };
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
                                    <h3>Bóng đá Anh</h3>
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
                                                    {item.mediaContent && <img src={item.mediaContent} alt={item.title} classNameName='h-56'/>}
                                                    </div>
                                                    <div className="whates-caption whates-caption2">
                                                        <h4>
                                                            <Link
                                                                to={`/news-details/${encodeURIComponent(item.link)}`}
                                                                data-animation="fadeInUp"
                                                                data-delay=".4s"
                                                                data-duration="1000ms"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </h4>
                                                        <span>{item.pubDate}</span>
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <ul className="blog-info-link mt-3">
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
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                  
                      
                                </div>
                       
                            </div>
                        </div>
                </div>
                </div>
                <div className="col-lg-4">
          <div className="blog_right_sidebar">
          

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
                    <p className='active'>Bóng đá Anh</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-italia" className="d-flex">
                    <p>Bóng đá Ý</p>
                  </Link>
                </li>
                <li>
                  <Link to="/football-france" className="d-flex">
                    <p>Bóng đá Pháp</p>
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

export default FootballENG;