import { useState, useEffect, useCallback } from "react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { extractImageUrl } from "./RSSImage";

const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

export const useRssFeed = (type) => {
  const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromRssFeed = useCallback(async () => {
    try {
      const response = await fetch(`${CORS_PROXY}https://bongda24h.vn/RSS/${type}.rss`);
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
        const timeSincePost = formatDistanceToNow(
          new Date(item.getElementsByTagName("pubDate")[0]?.textContent),
          { addSuffix: true, locale: vi }
        );
        const url = extractImageUrl(descriptionCData);

        // Lấy nội dung từ CDATA
        const cdataTitle = titleCData.replace(/&quot;/g, '"');
        const cdataContent = descriptionCData.replace(/<[^>]+>/g, "");

        return {
          title: cdataTitle,
          link: item.getElementsByTagName("link")[0]?.textContent,
          description: cdataContent,
          pubDate: timeSincePost,
          mediaContent: url,
          category: item.getElementsByTagName("category")[0]?.textContent,
        };
      });
      setRssItems(parsedItems);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetchDataFromRssFeed();
  }, [fetchDataFromRssFeed]);

  return { rssItems, loading, error };
};
