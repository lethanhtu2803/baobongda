import React, { useEffect, useState } from "react";
import { useRssFeed } from "../../helper/rssFetcher";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AutoComplete } from "primereact/autocomplete";
import { Link } from "react-router-dom";

const Home = () => {
    const { rssItems, loading, error } = useRssFeed(1);
    const { rssItems: rssHotNews, loading: loadingHotNews, error: errorHotNews } = useRssFeed(279);
    const { rssItems: rssTransferNews, loading: loadingTransferNews, error: errorTransferNews } = useRssFeed(187);
    const { rssItems: rssScheduleNews, loading: loadingScheduleNews, error: errorScheduleNews, } = useRssFeed(286);
    const { rssItems: rssVLeagueNews, loading: loadingVLeagueNews, error: errorVLeagueNews, } = useRssFeed(291);
    const { rssItems: rssC1News, loading: loadingC1News, error: errorC1News, } = useRssFeed(488);
    const { rssItems: rssResultNews, loading: loadingResultNews, error: errorResultNews, } = useRssFeed(333);
    const { rssItems: rssVietNamNews, loading: loadingVietNamNews, error: errorVietNamNews, } = useRssFeed(292);
    const { rssItems: rssBackstageNews, loading: loadingBackstageNews, error: errorBackstageNews, } = useRssFeed(188);

    const [value, setValue] = useState('');
    const [filteredTitles, setFilteredTitles] = useState([]);
    const [titles, setTitles] = useState([]);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredTitles;

            if (!event.query.trim().length) {
                _filteredTitles = [...titles];
            } else {
                const allRssItems = [
                    ...rssItems,
                    ...rssHotNews,
                    ...rssTransferNews,
                    ...rssScheduleNews,
                    ...rssVLeagueNews,
                    ...rssC1News,
                    ...rssResultNews,
                    ...rssVietNamNews,
                    ...rssBackstageNews
                ];

                _filteredTitles = allRssItems.filter((item) => {
                    return item.title.toLowerCase().includes(event.query.toLowerCase());
                });
            }

            setFilteredTitles(_filteredTitles);
        }, 250);
    };

    useEffect(() => {
        const allRssItems = [
            ...rssItems,
            ...rssHotNews,
            ...rssTransferNews,
            ...rssScheduleNews,
            ...rssVLeagueNews,
            ...rssC1News,
            ...rssResultNews,
            ...rssVietNamNews,
            ...rssBackstageNews
        ];

        const extractedTitles = allRssItems.map(item => item.title);
        
        setTitles(Array.from(new Set(extractedTitles)));
    }, [rssItems, rssHotNews, rssTransferNews, rssScheduleNews, rssVLeagueNews, rssC1News, rssResultNews, rssVietNamNews, rssBackstageNews]);
    



    if (
        loading ||
        loadingHotNews ||
        loadingTransferNews ||
        loadingScheduleNews ||
        loadingVLeagueNews ||
        loadingC1News || loadingResultNews || loadingVietNamNews || loadingBackstageNews
    ) {
        return (
            <div className="w-10 h-10 rounded-full border-4 border-primary border-t-0 border-t-transparent mx-auto animate-spin mb-5 mt-5"></div>
        );
    }

    if (
        error &&
        errorTransferNews &&
        errorHotNews &&
        errorScheduleNews &&
        errorVLeagueNews &&
        errorC1News && errorResultNews && errorVietNamNews && errorBackstageNews
    ) {
        window.location.reload();
        return <div>Error: </div>;
    }

    return (
        <div>
            <main>
                <div className="trending-area fix pt-25 gray-bg">
                    <div className="container">
                    <div className="relative mb-10 -right-[80%]">
                        <AutoComplete
                            value={value}
                            suggestions={filteredTitles}
                            completeMethod={search}
                            onChange={(e) => setValue(e.value)}
                            placeholder="Tìm kiếm..."
                            field="title"
                            inputClassName="w-full px-4 py-2"
                            itemTemplate={(item) => (
                                <Link to={`/news-details/${encodeURIComponent(item.link)}`}>{item.title}</Link>
                            )}
                        />
                    </div>
                        <div className="trending-main">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="slider-active">
                                        <div className="single-slider">
                                            <div className="trending-top mb-30">
                                                {rssItems.slice(0, 1).map((item) => (
                                                    <div className="trend-top-img">
                                                        {item.mediaContent && (
                                                            <img src={item.mediaContent} alt={item.title} />
                                                        )}
                                                        <div className="trend-top-cap">
                                                            <span
                                                                className="bgr mb-0"
                                                                style={{ fontSize: "12px" }}
                                                                data-animation="fadeInUp"
                                                                data-delay=".2s"
                                                                data-duration="1000ms"
                                                            >
                                                                {item.category.substring(
                                                                    item.category.lastIndexOf(", ") + 2
                                                                )}
                                                            </span>
                                                            <h2>
                                                                <Link
                                                                   to={`/news-details/${encodeURIComponent(item.link)}`}
                                                                    data-animation="fadeInUp"
                                                                    data-delay=".4s"
                                                                    data-duration="1000ms"
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </h2>
                                                            <p
                                                                data-animation="fadeInUp"
                                                                data-delay=".6s"
                                                                data-duration="1000ms"
                                                            >
                                                                {item.pubDate}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="row">
                                        {rssItems.slice(1, 4).map((item) => (
                                            <div className="col-lg-12 col-md-6 col-sm-6">
                                                <div className="trending-top mb-30">
                                                    <div className="trend-top-img">
                                                        {item.mediaContent && (
                                                            <img src={item.mediaContent} alt={item.title} />
                                                        )}
                                                        <div className="trend-top-cap trend-top-cap2">
                                                            <span
                                                                className="bgr mb-0"
                                                                style={{ fontSize: "12px" }}
                                                                data-animation="fadeInUp"
                                                                data-delay=".2s"
                                                                data-duration="1000ms"
                                                            >
                                                                {item.category.substring(
                                                                    item.category.lastIndexOf(", ") + 2
                                                                )}
                                                            </span>
                                                            <h3 className="text-light fs-1">
                                                                <Link
                                                                   to={`/news-details/${encodeURIComponent(item.link)}`}
                                                                    data-animation="fadeInUp"
                                                                    data-delay=".4s"
                                                                    data-duration="1000ms"
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </h3>
                                                            <p
                                                                data-animation="fadeInUp"
                                                                data-delay=".6s"
                                                                data-duration="1000ms"
                                                            >
                                                                {item.pubDate}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="whats-news-area pt-50 pb-20 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="whats-news-wrapper">
                                    <div className="row justify-content-between align-items-end mb-15">
                                        <div className="col-xl-3">
                                            <div className="section-tittle mb-30">
                                                <h3>Tin mới</h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-md-9">
                                            <div className="properties__button">
                                                <nav>
                                                    <div
                                                        className="nav nav-tabs"
                                                        id="nav-tab"
                                                        role="tablist"
                                                    >
                                                        <a
                                                            className="nav-item nav-link active"
                                                            id="nav-home-tab"
                                                            data-toggle="tab"
                                                            href="#nav-home"
                                                            role="tab"
                                                            aria-controls="nav-home"
                                                            aria-selected="true"
                                                        >
                                                            Nổi bật
                                                        </a>
                                                        <a
                                                            className="nav-item nav-link"
                                                            id="nav-profile-tab"
                                                            data-toggle="tab"
                                                            href="#nav-profile"
                                                            role="tab"
                                                            aria-controls="nav-profile"
                                                            aria-selected="false"
                                                        >
                                                            Tin nóng
                                                        </a>
                                                        <a
                                                            className="nav-item nav-link"
                                                            id="nav-contact-tab"
                                                            data-toggle="tab"
                                                            href="#nav-contact"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                        >
                                                            Chuyển nhượng
                                                        </a>
                                                        <a
                                                            className="nav-item nav-link"
                                                            id="nav-last-tab"
                                                            data-toggle="tab"
                                                            href="#nav-last"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                        >
                                                            Lịch thi đấu
                                                        </a>
                                                        <a
                                                            className="nav-item nav-link"
                                                            id="nav-Sports"
                                                            data-toggle="tab"
                                                            href="#nav-nav-Sport"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                        >
                                                            V-League
                                                        </a>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tab-content" id="nav-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="nav-home"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-home-tab"
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-12">
                                                            <div className="whats-news-single mb-40 mb-40">
                                                                {rssItems.slice(4, 5).map((item) => (
                                                                    <>
                                                                        <div className="whates-img">
                                                                            {item.mediaContent && (
                                                                                <img
                                                                                    src={item.mediaContent}
                                                                                    alt={item.title}
                                                                                />
                                                                            )}
                                                                        </div>
                                                                        <div className="whates-caption">
                                                                            <h4>
                                                                                <a href="latest_news.html">
                                                                                    {item.title}
                                                                                </a>
                                                                            </h4>
                                                                            <span>{item.pubDate}</span>
                                                                            <p>{item.description}</p>
                                                                        </div>
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-12">
                                                            <div className="row">
                                                                {rssItems.slice(5, 9).map((item) => (
                                                                    <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                                        <div className="whats-right-single mb-20">
                                                                            <div className="whats-right-img">
                                                                                {item.mediaContent && (
                                                                                    <img
                                                                                        src={item.mediaContent}
                                                                                        alt={item.title}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            <div className="whats-right-cap">
                                                                                <span className="colorb m-0">
                                                                                    Tin nổi bật
                                                                                </span>
                                                                                <h4>
                                                                                    <a href="latest_news.html">
                                                                                        {item.title}
                                                                                    </a>
                                                                                </h4>
                                                                                <p className="mt-2">{item.pubDate}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="tab-pane fade"
                                                    id="nav-profile"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-profile-tab"
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="whats-news-single mb-40">
                                                                {rssHotNews &&
                                                                    rssHotNews.slice(9, 10).map((item) => (
                                                                        <>
                                                                            <div className="whates-img">
                                                                                {item.mediaContent && (
                                                                                    <img
                                                                                        src={item.mediaContent}
                                                                                        alt={item.title}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            <div className="whates-caption">
                                                                                <h4>
                                                                                    <a href="latest_news.html">
                                                                                        {item.title}
                                                                                    </a>
                                                                                </h4>
                                                                                <span>{item.pubDate}</span>
                                                                                <p>{item.description}</p>
                                                                            </div>
                                                                        </>
                                                                    ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-12">
                                                            <div className="row">
                                                                {rssHotNews.slice(10, 14).map((item) => (
                                                                    <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                                        <div className="whats-right-single mb-20">
                                                                            <div className="whats-right-img">
                                                                                {item.mediaContent && (
                                                                                    <img
                                                                                        src={item.mediaContent}
                                                                                        alt={item.title}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            <div className="whats-right-cap">
                                                                                <span className="colorb m-0">
                                                                                    Tin nóng
                                                                                </span>
                                                                                <h4>
                                                                                    <a href="latest_news.html">
                                                                                        {item.title}
                                                                                    </a>
                                                                                </h4>
                                                                                <p className="mt-2">{item.pubDate}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="tab-pane fade"
                                                    id="nav-contact"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-contact-tab"
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="whats-news-single mb-40">
                                                                {rssTransferNews &&
                                                                    rssTransferNews.slice(0, 1).map((item) => (
                                                                        <>
                                                                            <div className="whates-img">
                                                                                {item.mediaContent && (
                                                                                    <img
                                                                                        src={item.mediaContent}
                                                                                        alt={item.title}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            <div className="whates-caption">
                                                                                <h4>
                                                                                    <a href="latest_news.html">
                                                                                        {item.title}
                                                                                    </a>
                                                                                </h4>
                                                                                <span>{item.pubDate}</span>
                                                                                <p>{item.description}</p>
                                                                            </div>
                                                                        </>
                                                                    ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-12">
                                                            <div className="row">
                                                                {rssTransferNews &&
                                                                    rssTransferNews.slice(1, 5).map((item) => (
                                                                        <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                                            <div className="whats-right-single mb-20">
                                                                                <div className="whats-right-img">
                                                                                    {item.mediaContent && (
                                                                                        <img
                                                                                            src={item.mediaContent}
                                                                                            alt={item.title}
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                                <div className="whats-right-cap">
                                                                                    <span className="colorb m-0">
                                                                                        Tin nóng
                                                                                    </span>
                                                                                    <h4>
                                                                                        <a href="latest_news.html">
                                                                                            {item.title}
                                                                                        </a>
                                                                                    </h4>
                                                                                    <p className="mt-2">{item.pubDate}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="tab-pane fade"
                                                    id="nav-last"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-last-tab"
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="whats-news-single mb-40">
                                                                {rssScheduleNews &&
                                                                    rssScheduleNews.slice(0, 1).map((item) => (
                                                                        <>
                                                                            <div className="whates-img">
                                                                                {item.mediaContent && (
                                                                                    <img
                                                                                        src={item.mediaContent}
                                                                                        alt={item.title}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            <div className="whates-caption">
                                                                                <h4>
                                                                                    <a href="latest_news.html">
                                                                                        {item.title}
                                                                                    </a>
                                                                                </h4>
                                                                                <span>{item.pubDate}</span>
                                                                                <p>{item.description}</p>
                                                                            </div>
                                                                        </>
                                                                    ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-12">
                                                            <div className="row">
                                                                {rssScheduleNews &&
                                                                    rssScheduleNews.slice(1, 5).map((item) => (
                                                                        <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                                            <div className="whats-right-single mb-20">
                                                                                <div className="whats-right-img">
                                                                                    {item.mediaContent && (
                                                                                        <img
                                                                                            src={item.mediaContent}
                                                                                            alt={item.title}
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                                <div className="whats-right-cap">
                                                                                    <span className="colorb m-0">
                                                                                        Tin nóng
                                                                                    </span>
                                                                                    <h4>
                                                                                        <a href="latest_news.html">
                                                                                            {item.title}
                                                                                        </a>
                                                                                    </h4>
                                                                                    <p className="mt-2">{item.pubDate}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="tab-pane fade"
                                                    id="nav-nav-Sport"
                                                    role="tabpanel"
                                                    aria-labelledby="nav-Sports"
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="whats-news-single mb-40">
                                                                {rssVLeagueNews &&
                                                                    rssVLeagueNews.slice(0, 1).map((item) => (
                                                                        <>
                                                                            <div className="whates-img">
                                                                                {item.mediaContent && (
                                                                                    <img
                                                                                        src={item.mediaContent}
                                                                                        alt={item.title}
                                                                                        height={212}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            <div className="whates-caption">
                                                                                <h4>
                                                                                    <a href="latest_news.html">
                                                                                        {item.title}
                                                                                    </a>
                                                                                </h4>
                                                                                <span>{item.pubDate}</span>
                                                                                <p>{item.description}</p>
                                                                            </div>
                                                                        </>
                                                                    ))}
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-12">
                                                            <div className="row">
                                                                {rssVLeagueNews &&
                                                                    rssVLeagueNews.slice(1, 5).map((item) => (
                                                                        <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                                            <div className="whats-right-single mb-20">
                                                                                <div className="whats-right-img">
                                                                                    {item.mediaContent && (
                                                                                        <img
                                                                                            src={item.mediaContent}
                                                                                            alt={item.title}
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                                <div className="whats-right-cap">
                                                                                    <span className="colorb m-0">
                                                                                        Tin nóng
                                                                                    </span>
                                                                                    <h4>
                                                                                        <a href="latest_news.html">
                                                                                            {item.title}
                                                                                        </a>
                                                                                    </h4>
                                                                                    <p className="mt-2">{item.pubDate}</p>
                                                                                </div>
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
                                </div>

                                <div className="banner-one mt-20 mb-30">
                                    <img src="assets/img/gallery/body_card1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-follow mb-45">
                                    <div className="single-box">
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="#">
                                                    <img src="assets/img/news/icon-fb.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="#">
                                                    <img src="assets/img/news/icon-tw.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="#">
                                                    <img src="assets/img/news/icon-ins.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="#">
                                                    <img src="assets/img/news/icon-yo.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="most-recent-area">
                                    {/*                      
                        <div className="small-tittle mb-20">
                            <h4>Most Recent</h4>
                        </div>
                */}
                                    {rssItems.slice(9, 13).map((item) => (
                                        <div className="most-recent mb-10">
                                            <div className="most-recent-img">
                                                {item.mediaContent && (
                                                    <img src={item.mediaContent} alt={item.title} />
                                                )}
                                                <div className="most-recent-cap">
                                                    <span className="bgbeg">
                                                        {item.category.substring(
                                                            item.category.lastIndexOf(", ") + 2
                                                        )}
                                                    </span>
                                                    <h4>
                                                        <a href="latest_news.html">{item.title}</a>
                                                    </h4>
                                                    <p>{item.pubDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="weekly2-news-area pt-50 pb-30 gray-bg">
                    <div className="container">
                        <div className="weekly2-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider-wrapper">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="small-tittle mb-30">
                                                    <h4>Cúp C1</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="weekly2-news">
                                                    <Swiper
                                                        grabCursor={true}
                                                        spaceBetween={40}
                                                        slidesPerView={3}
                                                    >
                                                        {rssC1News &&
                                                            rssC1News.map((item) => (
                                                                <SwiperSlide>
                                                                    <div className="weekly2-single rounded-lg shadow-md h-auto">
                                                                        <div className="weekly2-img">
                                                                            {item.mediaContent && (
                                                                                <img
                                                                                    src={item.mediaContent}
                                                                                    alt={item.title}
                                                                                    className="rounded-t-lg w-full h-48 object-cover"
                                                                                />
                                                                            )}
                                                                        </div>
                                                                        <div className="weekly2-caption p-4">
                                                                            <h4 className="text-lg font-bold mb-2">
                                                                                <a
                                                                                    href="#"
                                                                                    className="hover:text-blue-500"
                                                                                >
                                                                                    {item.title}
                                                                                </a>
                                                                            </h4>
                                                                            <p className="text-gray-500 text-sm">
                                                                                {item.pubDate}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="recent-articles pt-10">
                    <div class="container mx-auto">
                        <div class="recent-wrapper">
                            <div class="flex justify-center">
                                <div class="w-full">
                                    <div class="section-title mb-8">
                                        <h3 class="text-center text-2xl font-bold">
                                            Kết quả các trận đấu
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div class="w-full">
                                    <div class="recent-active flex space-x-4">
                                        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={3}>
                                            {rssResultNews && rssResultNews.map((item) => (
                                                <SwiperSlide>
                                                    <div class="single-recent h-60">
                                                        <div class="what-img">
                                                            {item.mediaContent && (
                                                                <img
                                                                    src={item.mediaContent}
                                                                    alt={item.title}
                                                                    className="rounded-t-lg w-full h-48 object-cover"
                                                                />
                                                            )}
                                                        </div>
                                                        <div class="what-cap mt-4">
                                                            <h4 class="text-sm font-medium">
                                                                <a href="latest_news.html">
                                                                    {item.title}
                                                                </a>
                                                            </h4>
                                                            <p class="text-sm text-gray-500">{item.pubDate}</p>
                                                            {/* <a
                                                                class="popup-video btn-icon"
                                                                href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                                                            >
                                                                <span class="flaticon-play-button"></span>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}

                                        </Swiper>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="youtube-area video-padding hidden sm:block mt-10">
                        <div class="container mx-auto">
                            <div class="flex justify-center">
                                <div class="w-full">
                                    <div class="video-items-active grid grid-cols-1 gap-4">
                                        <div class="video-items text-center">
                                            <video controls class="w-full">
                                                <source src="assets/video/news2.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="video-items text-center">
                                            <video controls class="w-full">
                                                <source src="assets/video/news1.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="video-items text-center">
                                            <video controls class="w-full">
                                                <source src="assets/video/news3.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="video-items text-center">
                                            <video controls class="w-full">
                                                <source src="assets/video/news1.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="video-items text-center">
                                            <video controls class="w-full">
                                                <source src="assets/video/news3.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="video-info mt-8">
                                <div class="flex justify-center">
                                    <div class="w-full">
                                        <div class="testimonial-nav grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                            <div class="single-video">
                                                <video controls class="w-full">
                                                    <source
                                                        src="assets/video/news2.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div class="video-intro mt-2">
                                                    <h4 class="text-center text-sm font-medium">
                                                        Old Spondon News - 2020
                                                    </h4>
                                                </div>
                                            </div>
                                            <div class="single-video">
                                                <video controls class="w-full">
                                                    <source
                                                        src="assets/video/news1.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div class="video-intro mt-2">
                                                    <h4 class="text-center text-sm font-medium">
                                                        Bangladesh News Video
                                                    </h4>
                                                </div>
                                            </div>
                                            <div class="single-video">
                                                <video controls class="w-full">
                                                    <source
                                                        src="assets/video/news3.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div class="video-intro mt-2">
                                                    <h4 class="text-center text-sm font-medium">
                                                        Latest Video - 2020
                                                    </h4>
                                                </div>
                                            </div>
                                            <div class="single-video">
                                                <video controls class="w-full">
                                                    <source
                                                        src="assets/video/news1.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div class="video-intro mt-2">
                                                    <h4 class="text-center text-sm font-medium">
                                                        Spondon News - 2019
                                                    </h4>
                                                </div>
                                            </div>
                                            <div class="single-video">
                                                <video controls class="w-full">
                                                    <source
                                                        src="assets/video/news3.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div class="video-intro mt-2">
                                                    <h4 class="text-center text-sm font-medium">
                                                        Latest Video - 2020
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div class="about-area2 gray-bg pt-10">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="whats-news-wrapper">

                                    <div class="row justify-content-between align-items-end mb-15">
                                        <div class="col-xl-6">
                                            <div class="section-tittle mb-30">
                                                <h3>Đội tuyển Việt Nam</h3>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-12 ">

                                            <div className="tab-content" id="nav-tabContent">

                                                <div className="tab-pane fade show active" id="nav-home" >
                                                    <div className="row">
                                                        {rssVietNamNews && rssVietNamNews.slice(0, 12).map((item) => (
                                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                                <div className="whats-news-single mb-40">
                                                                    <div className="whates-img">
                                                                        {item.mediaContent && <img src={item.mediaContent} alt={item.title} />}
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


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">


                                <div className="most-recent-area">
                                    {/*                      
                        <div className="small-tittle mb-20">
                            <h4>Most Recent</h4>
                        </div>
                */}
                                    {rssBackstageNews.slice(0, 13).map((item) => (
                                        <div className="most-recent mb-10">
                                            <div className="most-recent-img">
                                                {item.mediaContent && (
                                                    <img src={item.mediaContent} alt={item.title} />
                                                )}
                                                <div className="most-recent-cap">
                                                    <span className="bgbeg">
                                                        {item.category.substring(
                                                            item.category.lastIndexOf(", ") + 2
                                                        )}
                                                    </span>
                                                    <h4>
                                                        <a href="latest_news.html">{item.title}</a>
                                                    </h4>
                                                    <p>{item.pubDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="banner-area gray-bg pt-90 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-10">
                                <div className="banner-one">
                                    <img src="assets/img/gallery/body_card3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
