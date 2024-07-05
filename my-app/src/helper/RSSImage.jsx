export function extractImageUrl(htmlString) {
    // Create a new DOMParser instance
    const parser = new DOMParser();
    
    // Parse the HTML string into a document
    const doc = parser.parseFromString(htmlString, 'text/html');
    
    // Find the first <img> element
    const imgElement = doc.querySelector('img');
    
    // Return the src attribute or null if no <img> tag is found
    return imgElement ? imgElement.src : null;
  }