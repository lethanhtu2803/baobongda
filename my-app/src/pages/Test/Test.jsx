import React, { useEffect, useState } from "react";
import { extractImageUrl } from "../../helper/RSSImage";

const Test = () => {
  const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

  const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FetchDataFromRssFeed = async () => {
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

        const atomNamespace = "http://www.w3.org/2005/Atom";

        // Trong hàm map items của bạn
        const atomLink = item.getElementsByTagNameNS(atomNamespace, "link")[0];
        const atomLinkHref = atomLink ? atomLink.getAttribute('href') : null;

      
        return {
          title: cdataTitle,
          link: item.getElementsByTagName('link')[0]?.textContent,
          description: cdataContent,
          pubDate: item.getElementsByTagName('pubDate')[0]?.textContent,
          mediaContent: url,
          category: item.getElementsByTagName('category')[0]?.textContent,
          atomLink: atomLinkHref 
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
      <h1>Premier League News</h1>
        {rssItems.length > 0 &&
          rssItems.slice(0, 2).map((item, index) => (
            <div className="single-slider" key={index}>
              <div className="trending-top mb-30">
                <div className="trend-top-img">
                {item.mediaContent && <img src={item.mediaContent} alt={item.title} />}
                  <div className="trend-top-cap">
                    <span
                      className="bgr"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                      data-duration="1000ms"
                    >
                      {item.category}
                    </span>
                    <h2>
                      <a
                        href="latest_news.html"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                        data-duration="1000ms"
                      >
                         <div dangerouslySetInnerHTML={{ __html: item.description }} />
                       
                      </a>
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
              </div>
            </div>
          ))}
    </div>
  );

};

export default Test;
