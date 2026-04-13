/**
 * note to myself
 * 1. to add photo entry: add object in posts with { type: 'photo', url: '...', caption: '...' }
 * 2. To add text entry: add object in posts with { type: 'text', content: '...' }
 */

function formatCaption(text) {
    return text.split('\n').map((line, index) => {
        line = line.trim();
        if (!line) return '';
        if (index === 0) return `<span class="enter-symbol">↳</span> ${line}`;
        return line;
    }).join('\n');
}

const posts = [
//     {
//         type: 'text',
//         date: 'January 1, 2026',
//         time: '00:00',
//         content: "text post example"
//     },

//     {
//         type: 'photo',
//         date: 'January 1, 2026',
//         time: '00:00',
//         url: 'photos/photo.webp',
//         content: formatCaption(`photo caption example`)
//     },
    {
        type: 'photo',
        date: 'April 13, 2026',
        time: '22:29',
        url: 'photos/20260413.webp',
        content: formatCaption("What. It works. I am writing JavaScript bro I am crying tears of joy. This is the joy of being a developer. I could write JavaScript until I die of old age. I will write JavaScript six feet under until humanity colonizes Mars. This is my life's purpose. It is to write JavaScript. I have dreamed of this moment since the moment I was conceived. I even feel a strong love for Chrome, which I actively hated until ten minutes ago. JavaScript. JavaScript. JavaScript. Through `${ERT} min read` I can once again feel my love for the world.")
    }
];

function renderFeed() {
    const feedElement = document.getElementById('feed');

    posts.forEach(post => {
        // create article element for each post
        const article = document.createElement('article');
        article.className = 'post';

        // date/time
        let postHTML = `
            <div class="post-meta">
                <span class="post-date">${post.date}</span>
                <span class="post-time">${post.time}</span>
                <div class="line"></div>
            </div>
        `;

        // content
        if (post.type === 'photo') {
            postHTML += `
                <div class="photo-container">
                    <img src="${post.url}" alt="Post image" loading="lazy">
                </div>
                <p class="caption">${post.content}</p>
            `;
        } else {
            postHTML += `
                <div class="text-post-content">
                    ${post.content}
                </div>
            `;
        }

        article.innerHTML = postHTML;
        feedElement.appendChild(article);
    });
}

window.onload = function() {
    renderFeed();
    initThemeToggle();
};

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('light-mode', currentTheme === 'light');
    updateToggleIcon(themeToggle, currentTheme);

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.contains('light-mode');
        const newTheme = isLight ? 'dark' : 'light';
        
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(themeToggle, newTheme);
    });
}

function updateToggleIcon(button, theme) {
    button.textContent = theme === 'light' ? '~｡˚𖤓˚｡~' : '⋆.｡˚⏾˚｡.⋆ ';
}