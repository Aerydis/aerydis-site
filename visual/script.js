/**
 * note to myself
 * 1. to add photo entry: add object in posts with { type: 'photo', url: '...', caption: '...', author: '...' }
 * 2. To add text entry: add object in posts with { type: 'text', content: '...', author: '...' }
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
//         type: 'when u try to read your korean friends chat talk about the hsitory belike',
//         date: 'July 26, 2026',
//         time: '02:00',
//         content: "When the sun did not rise and the people of the Thebes have suffered from a heated mist, they prayed to the Gods and their mercy. Celestial ship descended from the stars, building the pyramids over the holy of the pharaohs. These pyramids symbols of Egypt's majesty, hold the divine that power the Nile flow, set the heavens in motions, and restore life to the Earth, let future generations know their lives are a gift from the Gods of the stars, preserved within the sacred monuments. I stand at the end of my days, for 60 years I have walked this Earth. But now, sickness consumes me. Soon, the breath of life will leave my body, and my time will be over. When Ramadan died, he ascended to Amenti, the land of the dead. Yet, in my dreams, I have seen his spirit suffering, trapped in chains of pain, in that curse, that place. I do not trust in Heavens or their Gods. I reject their judgement, and I refuse to go to Amenti. Do not embalm my body. Do not trap me in their rituals. Let my body stay here, with these sacred walls, in this stone chamber. Let my soul remain in a chamber. Let my soul remain in the shadowed halls of this pyramid, to wander forever. Free, from the torment of the afterlife"
//     },

//     {
//         type: 'photo',
//         date: 'May 21, 2026',
//         time: '',
//         url: 'photos/photo.webp',
//         content: formatCaption(`photo caption example`)
//     }, 
//     paste after here!
    {
        type: 'text',
        author: 'friss',
        date: 'July13, 2026',
        time: '09:16 KST',
        content: "It always started with your single glaze in the quiet place. As you turned your head and saw me straight, I always turned my head and stared off into space. As I slowly turned my head to see you straight, you waited for me. That was where I could get to know what 'loving someone' is like. I will never stop loving someone even if my winter's last snowman melts into the ground and cherry blossoms greet my sorrowful visitation."
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'July 1, 2026',
        time: '18:41 KST',
        content: "my free will is costing me"
    },
    {
        type: 'text',
        author: 'jeanguyz',
        date: 'June 29, 2026',
        time: '6:37 VST',
        content: "Hey, I know your exams are coming up in July. Good luck with studying—you've got this. Don't forget to rest too. I'm rooting for you."
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'June 29, 2026',
        time: '12:54 KST',
        content: "no amount of eye-winking, curiosity-begging, concern-provoking digitally implicit hints will inform me enough to be able to make educated guesses on your feelings."
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'June 21, 2026',
        time: '19:48 KST', 
        url: 'photos/202606211948.webp',
        content: formatCaption("")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'June 18, 2026',
        time: '21:59 KST', // check time again
        url: 'photos/202606180759.webp',
        content: formatCaption(`i saw a cat while waiting for you. when you tell me i have cat eyes, i hope this is what you mean.`)
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'June 18, 2026',
        time: '00:07 KST',
        url: 'photos/202606180007.webp',
        content: formatCaption('and they talk about the environment')
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'June 12, 2026',
        time: '18:46 KST',
        url: 'photos/202606121846.webp',
        content: formatCaption('i told my boy go roll like ten blunts for me')
    },
    {
        type: 'text',
        author: 'friss',
        date: 'June 5, 2026',
        time: '01:20 KST',
        content: "I'll make you happy even when we are not on the bus"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'June 4, 2026',
        time: '20:38 KST',
        content: "I like going on walks because I envy people sitting inside buses. I miss the feeling of going somewhere, having a sense of purpose while essentially doing nothing. To me, taking walks to think is boring and exceedingly depressing because it makes me think about the same things over and over again, which is probably a problem in itself. But people sitting inside buses look happy."
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 29, 2026',
        time: '21:01 KST',
        content: "why are microbits so hard to connect to scratch this cannot be it i cannot have lived 17 years just to fail at connecting a microbit to scratch please"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 28, 2026',
        time: '14:35 KST',
        content: "cannot is one word"
    },
    {
        type: 'text',
        author: 'friss',
        date: 'May 26, 2026',
        time: '13:33 KST',
        content: "I think baby is quite nice name to call"
    },
    {
        type: 'text',
        author: 'kingwangjjang',
        date: 'May 26, 2026',
        time: '13:02 KST',
        content: "YUNA is babomancheni kingwangjjang was here im back yes heheheehehehehhewehheheheheh"
    },
    {
        type: 'text',
        author: 'friss',
        date: 'May 26, 2026',
        time: '11:55 KST',
        content: "hello my name is friss, this is for testing"
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 24, 2026',
        time: '22:37 KST',
        url: 'photos/202605242237.webp',
        content: formatCaption("where did our shadows go")
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 25, 2026',
        time: '18:53 KST',
        content: "the website is back up. amen"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 24, 2026',
        time: '13:36 KST',
        content: "i love you"
    },
    {
        type: 'text',
        author: 'jeanguyz',
        date: 'May 23, 2026',
        time: '11:00 ICT',
        content: `When twilight wept with silver rain,<br>
And lonely roads grew dim with pain,<br>
You stood beneath the grieving sky,<br>
While careless laughter passed you by.<br>
<br>
No faithful hand, no voice replied,<br>~
No shelter waited by your side;<br>
And I, though called a friend sincere,<br>
Became the cause of sorrow near.<br>
<br>
Forgive the jest, so cold, so vain,<br>
That deepened more the storm and rain.<br>
For now my heart bears quiet shame,<br>
And trembles softly at your name.<br>
<br>
Had I but known the weight you bore,<br>
I would have walked beside you more;<br>
And held above your weary head<br>
The warmth and kindness left unsaid.<br>
<br>
So let these humble verses prove<br>
The truth of my regret and love.<br>
May gentler days our hearts restore,<br>
And heal the hurt I caused before.<br>`
    },  
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 21, 2026',
        time: '16:46 KST',
        content: "help me"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 21, 2026',
        time: '08:51 KST',
        content: "you are euphoria"
    },
    {
        type: 'text',
        author: 'jeanguyz',
        date: 'May 21, 2026',
        time: '17:43 ICT',
        content: "say hello to jeanguyz!! - jeanguyz"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 21, 2026',
        time: '17:35 KST',
        content: "i love vagueposting sorry"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 21, 2026',
        time: '17:33 KST',
        content: "i must have liked you a lot, to have hated you for so long"
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 19, 2026',
        time: '21:29 KST',
        content: "i love python so much python is awesome"
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 17, 2026',
        time: '12:20 KST',
        url: 'photos/202605171220.webp',
        content: formatCaption("danced to redred in front of 250 people thank you mark")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 15, 2026',
        time: '13:49 KST',
        url: 'photos/202605151349.webp',
        content: formatCaption("delayed")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 15, 2026',
        time: '10:05 KST',
        url: 'photos/202605151005.webp',
        content: formatCaption("stone museum")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 13, 2026',
        time: '14:58 KST',
        url: 'photos/202605131458.webp',
        content: formatCaption("?")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 13, 2026',
        time: '10:01 KST',
        url: 'photos/202605131001.webp',
        content: formatCaption("osulloc with my friends")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 12, 2026',
        time: '13:50 KST',
        url: 'photos/202605121350.webp',
        content: formatCaption("sea2")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 12, 2026',
        time: '13:42 KST',
        url: 'photos/202605121342.webp',
        content: formatCaption("sea")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 12, 2026',
        time: '08:16 KST',
        url: 'photos/202605120816.webp',
        content: formatCaption("jeju island")
    },
    {
        type: 'text',
        author: 'aerydis',
        date: 'May 11, 2026',
        time: '14:04 KST',
        content: "Mark you're a real one. If I survive The Masquerade(dancing to REDRED in front of 250 people for not 2 minutes) I will peel you mangos for four hours each day and owe you my firstborn child and build a minecraft shrine in your honor."
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 5, 2026',
        time: '19:23 KST',
        url: 'photos/2026050502.webp',
        content: formatCaption("a cafe I went to. It's actually so pretty wtf.")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'May 5, 2026',
        time: '18:53 KST',
        url: 'photos/2026050501.webp',
        content: formatCaption("white azalea")
    },
    {
        type: 'photo',
        author: 'aerydis',
        date: 'April 13, 2026',
        time: '22:29 KST',
        url: 'photos/20260413.webp',
        content: formatCaption("What. It works. I am writing JavaScript bro I am crying tears of joy. This is the joy of being a developer. I could write JavaScript until I die of old age. I will write JavaScript six feet under until humanity colonizes Mars. This is my life's purpose. It is to write JavaScript. I have dreamed of this moment since the moment I was conceived. I even feel a strong love for Chrome, which I actively hated until ten minutes ago. JavaScript. JavaScript. JavaScript. Through `${ERT} min read` I can once again feel my love for the world.")
    }
];

const selectedAuthors = new Set();

function getAuthorCounts() {
    return posts.reduce((counts, post) => {
        if (post.author) {
            counts[post.author] = (counts[post.author] || 0) + 1;
        }
        return counts;
    }, {});
}

function renderAuthorFilters() {
    const authorListElement = document.getElementById('author-list');
    const authorCounts = getAuthorCounts();

    authorListElement.innerHTML = '';

    Object.entries(authorCounts)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([author, count]) => {
            const label = document.createElement('label');
            label.className = 'author-filter-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = author;
            checkbox.checked = selectedAuthors.has(author);
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    selectedAuthors.add(author);
                } else {
                    selectedAuthors.delete(author);
                }
                renderFeed();
            });

            const text = document.createElement('span');
            text.textContent = `${author} (${count})`;

            label.appendChild(checkbox);
            label.appendChild(text);
            authorListElement.appendChild(label);
        });
}

function renderFeed() {
    const feedElement = document.getElementById('feed');
    const filteredPosts = posts.filter(post => {
        return selectedAuthors.size === 0 || selectedAuthors.has(post.author);
    });

    feedElement.innerHTML = '';

    if (filteredPosts.length === 0) {
        const emptyState = document.createElement('p');
        emptyState.className = 'empty-feed';
        emptyState.textContent = 'No posts from the selected authors.';
        feedElement.appendChild(emptyState);
        return;
    }

    filteredPosts.forEach(post => {
        // create article element for each post
        const article = document.createElement('article');
        article.className = 'post';

        const authorHTML = post.author ? `<span class="post-author">${post.author}</span>` : '';
        const timeHTML = post.time ? `<span class="post-time">${post.time}</span>` : '';

        // date/time
        let postHTML = `
            <div class="post-meta">
                ${authorHTML}
                <div class="line"></div>
                <div class="post-meta-right">
                    <span class="post-date">${post.date}</span>
                    ${timeHTML}
                </div>
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
    renderAuthorFilters();
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
