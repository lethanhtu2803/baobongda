import React, { useEffect, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';

const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

const CommentSection = ({ linkNews }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rssItems, setRssItems] = useState([]);
    const itemsPerPage = 5; // mỗi trang có 5 bài
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemFindByLink, setItemFindByLink] = useState(null);

    useEffect(() => {
        const fetchDataFromRssFeed = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}https://bongda24h.vn/RSS/1.rss`);
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
                }).filter((item) => item.link); // Lọc bỏ những item không có link

                if (parsedItems.length > 0) {
                    setItemFindByLink(parsedItems[0]); // Lấy phần tử đầu tiên
                }
                setRssItems(parsedItems);
                setPageCount(Math.ceil(parsedItems.length / itemsPerPage));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchDataFromRssFeed();
    }, []);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (newComment.trim() && currentUser) {
            const comment = {
                accountUsername: currentUser.username,
                link: linkNews,
                content: newComment,
                description: itemFindByLink?.description || "",
                pubDate: itemFindByLink ? new Date(itemFindByLink.pubDate) : new Date(),
                image: itemFindByLink?.mediaContent || "",
                title: itemFindByLink?.title || "",
                category: itemFindByLink?.category || "",
                status: true,
            };

            try {
                const response = await fetch("http://localhost:8087/api/comment/create", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(comment),
                });

                if (response.ok) {
                    const newCommentList = [...comments, comment];
                    setComments(newCommentList);
                    setNewComment('');
                } else {
                    console.error("Error submitting comment:", response.status);
                }
            } catch (error) {
                console.error("Error submitting comment:", error);
            }
        } else {
            alert("Bạn cần có tài khoản để bình luận bài viết");
        }
    };

    const findAllComments = async () => {
        try {
            const response = await fetch(`http://localhost:8087/api/comment/findCommentByLink?link=${encodeURIComponent(linkNews)}`, {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                console.error("Error fetching comments:", response.status);
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        if (linkNews) {
            findAllComments();
        }
    }, [linkNews]);

    return (
        <div className="mt-6 px-4">
            <h2 className="text-xl font-bold mb-4">Bình luận</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
                <input
                    type="text"
                    value={currentUser ? currentUser.username : ''}
                    readOnly
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tên của bạn"
                />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Nhập bình luận của bạn..."
                ></textarea>
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Gửi bình luận
                </button>
            </form>
            <div>
                {comments.map((comment, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
                        <p className="font-bold">{comment.accountUsername}</p>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
