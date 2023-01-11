const sm = require('sitemap');
const path = require('path');
const fs = require('fs');

const OUTPUT_FILE = path.resolve(__dirname, '..', 'public', 'sitemap.xml');

// const postsUrls = getAllPostsForListing({ data })
//     .map((post) => {
//         const handle = [
//             post.handle.substring(0, 4),
//             post.handle.substring(5, 7),
//             post.handle.substring(8, 10),
//             post.handle.substring(11),
//         ].join('/');
//         return {
//             url: `${config.PUBLIC_URL}/${handle}`,
//             changefreq: 'weekly',
//             priority: 0.8,
//         };
//     });
//
// const categoriesUrls = getAllCategoriesForListing({ data })
//     .map((category) => ({
//         url: `${config.PUBLIC_URL}/category/${category.handle}`,
//         changefreq: 'weekly',
//         priority: 0.8,
//     }));

const sitemap = sm.createSitemap({
    hostname: 'https://dota2.su/',
    cacheTime: 600000,
    urls: [
        { url: '/', changefreq: 'weekly', priority: 1 },
        { url: '/login', changefreq: 'weekly', priority: 0.5 },
        { url: '/register', changefreq: 'weekly', priority: 0.5 },
        { url: '/profile', changefreq: 'monthly', priority: 0.5 },
        { url: '/calendar', changefreq: 'monthly', priority: 0.5 },
        { url: '/tournament', changefreq: 'monthly', priority: 0.5 },
        { url: '/players', changefreq: 'monthly', priority: 0.5 },
        { url: '/news', changefreq: 'monthly', priority: 0.5 },
        { url: '/live', changefreq: 'monthly', priority: 0.5 },
        { url: '/heroes', changefreq: 'monthly', priority: 0.5 },
    ],
});

fs.writeFileSync(OUTPUT_FILE, sitemap.toString());

console.log(`Sitemap written at ${OUTPUT_FILE}`);
