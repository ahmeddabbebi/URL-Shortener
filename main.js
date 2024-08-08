document.getElementById('shorten-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;
    const shortUrl = generateShortUrl();
    saveUrlMapping(shortUrl, originalUrl);
    displayShortUrl(shortUrl);
  });
  
  function generateShortUrl() {
    return Math.random().toString(36).substring(2, 8);
  }
  
  function saveUrlMapping(shortUrl, originalUrl) {
    localStorage.setItem(shortUrl, originalUrl);
  }
  
  function displayShortUrl(shortUrl) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Short URL: <a href="#" onclick="redirectToUrl('${shortUrl}')">${shortUrl}</a></p>`;
  }
  
  window.redirectToUrl = function(shortUrl) {
    const originalUrl = localStorage.getItem(shortUrl);
    if (originalUrl) {
      window.location.href = originalUrl;
    } else {
      alert('URL not found');
    }
  };
  