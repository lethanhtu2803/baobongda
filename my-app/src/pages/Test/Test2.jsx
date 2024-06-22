import React, { useEffect, useRef } from 'react';

const Test2 = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
      const handleLoad = () => {
        const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        const targetDiv = iframeDocument.getElementById('6il5mu2rgs');
        if (targetDiv) {
          console.log(targetDiv.innerHTML);
        } else {
          console.log("Không tìm thấy phần tử div với id '6il5mu2rgs' trong iframe.");
        }
      };
  
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.addEventListener('load', handleLoad);
      }
  
      return () => {
        if (iframe) {
          iframe.removeEventListener('load', handleLoad);
        }
      };
    }, []);
  
    return (
      <div className="iframe-container">
        <iframe
          id="myIframe"
          ref={iframeRef}
          src="https://bongda24h.vn/tin-nong/diem-tin-bong-da-toi-5-6-bruno-fernandes-doi-tang-luong-o-mu-279-389663.html"
          className="cropped-iframe"
        ></iframe>
      </div>
    );
};

export default Test2;