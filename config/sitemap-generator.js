const { writeFileSync } = require('fs');
const prettier = require('prettier');

const unixTimeStampConverter = (unix) => {
    const miliseconds = unix * 1000;
    return String(new Date(miliseconds).getDate());
};

async function generate() {
    const getDate = () => {
        const day = unixTimeStampConverter(Date.now());
        const month = new Date().getMonth();
        const formattedMonth = Number(month) > 10 ? Number(month) + 1 : `0${Number(month) + 1}`;
        return `2023-${formattedMonth}-${day}`;
    };

    const date = getDate();

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
            <loc>https://dota2.su/</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
       <url>
            <loc>https://dota2.su/heroes</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
       <url>
            <loc>https://dota2.su/players</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
       <url>
            <loc>https://dota2.su/calendar</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
       <url>
            <loc>https://dota2.su/tournament</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://dota2.su/login</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://dota2.su/register</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://dota2.su/profile</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://dota2.su/news</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://dota2.su/live</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    </urlset>
    `;

    const formatted = prettier.format(sitemap, { semi: false, parser: 'html' });

    writeFileSync('build/sitemap.xml', formatted);
}

generate();
