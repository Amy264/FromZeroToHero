// loadFavicon.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('favicon.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const links = doc.querySelectorAll('link');
            links.forEach(link => document.head.appendChild(link));
        })
        .catch(error => console.error('Error loading favicon:', error));
});
