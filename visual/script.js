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
    {
        type: 'photo',
        date: 'April 12, 2026',
        url: 'photos/worldscutestdog.webp',
        content: formatCaption(`I just created this page because I hate Instagram. I hate Instagram. No shade to people who use it though.
Basically I:
1. Don't want to be tracked,
2. Don't want my data to be sold,
3. Don't want ads to be shoved down my throat,
4. Don't want to scroll, and
5. Don't want to train AI models.
I was thinking about what to post here, and I realized I don't have anythings on hand right now except for this picture of my dog. So this is my dog 흰둥이. He's 3 and also moderately obese. Every haircut ages him ten years. But I love him so it doesn't really matter.`)
    },
];

function renderFeed() {
    const feedElement = document.getElementById('feed');

    posts.forEach(post => {
        // create article element for each post
        const article = document.createElement('article');
        article.className = 'post';

        // date
        let postHTML = `
            <div class="post-meta">
                <span>${post.date}</span>
                <div class="line"></div>
            </div>
        `;

        // content
        if (post.type === 'photo') {
            postHTML += `
                <div class="photo-container">
                    <img src="${post.url}" alt="Post image">
                </div>
                <p class="caption">${post.content}</p>
            `;
        } else {
            postHTML += `
                <div class="text-post-content">
                    "${post.content}"
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

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
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
    button.textContent = theme === 'light' ? '~｡˚𖤓˚｡~' : '⋆｡˚⏾˚｡⋆ ';
}