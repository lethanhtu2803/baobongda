import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const NewsDetails = () => {
    const { articleId } = useParams();
    const iframeRef = useRef(null);
    const [url, setUrl] = useState(articleId);
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [showCommentSection, setShowCommentSection] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const navigate = useNavigate();
    const baobongda24h = `https://bongda24h.vn${url}`;
 

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`https://thingproxy.freeboard.io/fetch/${encodeURIComponent(baobongda24h)}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                }
                const text = await response.text();

                // Parse the HTML and remove header, footer, and navigation
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');
                const header = doc.querySelector('header');
                const footer = doc.querySelector('footer');
                const nav = doc.querySelector('nav');
                if (header) header.remove();
                if (footer) footer.remove();
                if (nav) nav.remove();

                // Extract styles and scripts
                const styles = Array.from(doc.querySelectorAll('link[rel="stylesheet"], style'))
                    .map(style => style.outerHTML)
                    .join('\n');
                const scripts = Array.from(doc.querySelectorAll('script'))
                    .map(script => script.outerHTML)
                    .join('\n');

                // Get the remaining content
                const bodyContent = doc.body.innerHTML;
                
                // Combine styles, content, and scripts with additional styles to prevent overflow
                const fullContent = `
                    <html>
                    <head>
                        ${styles}
                        <style>
                            body, html {
                                margin: 0;
                                padding: 0;
                                overflow-x: hidden;
                                width: 100%;
                            }
                            body > * {
                                max-width: 100%;
                               
                            }
                            #aswift_1_host, .adscontent, .breadcrumb2 {
                                display: none !important;
                            }
                        </style>
                    </head>
                    <body>
                        ${bodyContent}
                        ${scripts}
                        <script>
                            function sendHeight() {
                                window.parent.postMessage({ type: 'resize', height: document.body.scrollHeight }, '*');
                            }
                            window.addEventListener('load', sendHeight);
                            window.addEventListener('resize', sendHeight);
                            
                            // Intercept link clicks and send URL to parent
                            document.addEventListener('click', function(event) {
                                // Find the nearest anchor element in case the click is on a child element
                                const anchor = event.target.closest('a');
                                if (anchor) {
                                    event.preventDefault();
                                    const url = new URL(anchor.href, document.baseURI).href; // Resolve relative URLs
                                    console.log(url);
                                    window.parent.postMessage({ type: 'navigate', url: url }, '*');
                                }
                            });
                            
                        </script>
                    </body>
                    </html>
                `;
                
                setContent(fullContent);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Failed to fetch content', error);
                setError(error.message);
            }
        };

        fetchContent();
    }, [url]);

    useEffect(() => {
        const handleResize = (event) => {
            if (event.data.type === 'resize') {
                if (iframeRef.current) {
                    iframeRef.current.style.height = `${event.data.height}px`;
                }
            }
        };

        // Handle link clicks from iframe
        const handleLinkClick = (event) => {
            if (event.data.type === 'navigate') {
                const baseUrl = 'https://bongda24h.vn';
                const urlPath = new URL(event.data.url).pathname;
                // const finalPath = urlPath.substring(urlPath.indexOf("/", urlPath.indexOf("/") + 3))
                // console.log(finalPath);
                const fullUrl = `${baseUrl}${urlPath}`;
                setUrl(urlPath);
                // setLinkNews(fullUrl);
                // setLinkNews(urlPath)
                navigate(`/news-details/${encodeURIComponent(urlPath)}`);
            }
        };

        // Listen for resize messages from iframe
        window.addEventListener('message', handleResize);

        // Listen for link click messages from iframe
        window.addEventListener('message', handleLinkClick);

        return () => {
            window.removeEventListener('message', handleResize);
            window.removeEventListener('message', handleLinkClick);
        };
    }, []);
    const handleIframeLoad = () => {
        setIframeLoaded(true);
        setTimeout(() => {
            setShowCommentSection(true);
        }, 15000); 
    };
    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };
    return (
        <div className='iframe-container' style={{ marginRight: 0 }}>
                {error ? (
                    <div className='alert alert-danger'>
                        {error}
                    </div>
                ) : (
                    <>
                    <div>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <iframe
                        ref={iframeRef}
                        srcDoc={content}
                        style={{ width: '100%', border: 'none' }}
                        onLoad={handleIframeLoad}
                    ></iframe>
                    <button
                        onClick={handleSaveClick}
                        className={`heart-button ${isSaved ? 'saved' : ''}`}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            fontSize: '24px',
                            color: isSaved ? 'red' : 'gray',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        ♥
                    </button>
                    {showCommentSection  &&  <CommentSection linkNews={url}></CommentSection>}
                    </>
                )}
        </div>
    );
};

export default NewsDetails;