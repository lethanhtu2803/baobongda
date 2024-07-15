import React, { useEffect, useState } from 'react';
import { extractImageUrl } from '../../helper/RSSImage';
import { format, formatDistanceToNow, formatRelative } from "date-fns";
import { vi } from "date-fns/locale";

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
    const cheerio = require('cheerio');

    const formatDateForBackend = (date) => {
        return format(date, 'yyyy/MM/dd HH:mm:ss');
    };
   

    useEffect(() => {
        const fetchDataFromRssFeed = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}https://bongda24h.vn${linkNews}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const text = await response.text();
                console.log(text);
                const $ = cheerio.load(text);
                const title = $('head > title').text();
                const imageUrl = $('meta[property="og:image"]').attr('content');
                const description = $('meta[name="description"]').attr('content');
                const category = JSON.parse($('script[type="application/ld+json"]').html()).articleSection;
                const detailsLink = {
                    title: title,
                    link: linkNews,
                    description: description,
                    pubDate: new Date(),
                    created: new Date(),
                    mediaContent: imageUrl,
                    category: category,
                };

                setItemFindByLink(detailsLink);
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
                pubDate: itemFindByLink ? formatDateForBackend(new Date(itemFindByLink.pubDate)) : formatDateForBackend(new Date()),
                created: itemFindByLink ? formatDateForBackend(new Date(itemFindByLink.created)) : formatDateForBackend(new Date()),
                image: itemFindByLink?.mediaContent || "",
                title: itemFindByLink?.title || "",
                category: itemFindByLink?.category || "",
                status: true,
            };
            console.log(comment);
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
                    console.error("Lỗi submit comment:", response.status);
                }
            } catch (error) {
                console.error("Lỗi submit comment:", error);
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
        <div className="mt-6 px-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Bình luận</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6 flex flex-col items-center">
            <input
                type="text"
                value={currentUser ? currentUser.username : ''}
                readOnly
                className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tên của bạn"
            />
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Nhập bình luận của bạn..."
            ></textarea>
            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
            >
                Gửi bình luận
            </button>
        </form>
        <div className="space-y-6 mb-10">
    {comments.sort((a, b) => new Date(b.created) - new Date(a.created)).map((comment, index) => (
        <div key={index} className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-4">
                    <span className="font-bold">{comment.accountUsername[0].toUpperCase()}</span>
                </div>
                <p className="font-bold text-xl text-gray-800">{comment.accountUsername}</p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{comment.content}</p>
        </div>
    ))}
</div>

    </div>
    );
};

export default CommentSection;
