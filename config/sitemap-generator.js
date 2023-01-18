const { writeFileSync } = require('fs');

async function generate() {
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
            <loc>https://dota2.su/</loc>
            <lastmod>2023-01-12</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
       <url>
            <loc>https://dota2.su/heroes</loc>
            <lastmod>2023-01-12</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
       <url>
            <loc>https://dota2.su/players</loc>
            <lastmod>2023-01-12</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
       <url>
            <loc>https://dota2.su/calendar</loc>
            <lastmod>2023-01-12</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
       <url>
            <loc>https://dota2.su/tournament</loc>
            <lastmod>2023-01-12</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    </urlset>
    `;

    writeFileSync('build/sitemap.xml', sitemap);
}

generate();
