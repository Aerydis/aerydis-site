/**
 * note to myself
 * 1. to add photo entry: add object in posts with { type: 'photo', url: '...', caption: '...' }
 * 2. To add text entry: add object in posts with { type: 'text', content: '...' }

 */

const posts = [
    {
        type: 'photo',
        date: 'April 12, 2026',
        url: 'pictures/worldscutestdog.webp',
        content: "I just created this webpage because I hate Instagram. I hate Instagram. No shade to people who use it though.\nI was thinking about what to post here, and I realized I don't have anything on hand right now except for this picture of my dog. So this is my dog 흰둥이. He's 3 and also moderately obese."
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

window.onload = renderFeed;