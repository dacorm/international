const { writeFileSync } = require('fs');
const prettier = require('prettier');
const axios = require('axios');

const unixTimeStampConverter = (unix) => {
    const miliseconds = unix * 1000;
    return String(new Date(miliseconds).getDate());
};

const getPosts = async () => {
    const { data } = await axios.get('https://dota2.press/posts');
    return data;
};

const createPostTemplate = (lastmod, url) => `<url>
            <loc>https://dota2.su/article/${url}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>`;

const createItemTemplate = (title, url, text, image, date) => `<item>
        <title>${title}</title>
        <link>https://dota2.su/article/${url}</link>
        <pdalink>https://dota2.su/article/${url}</pdalink>
        <description>${text.slice(0, 30)}</description>
        <author>admin</author>
        <category>Киберспорт</category>
        <enclosure 
          url="https://dota2.press/${image}" 
          type="image/jpeg"/>
        <media:group>
          <media:thumbnail 
            url="https://dota2.press/${image}"/> 
        </media:group>        
        <pubDate>${date}</pubDate>
        <yandex:genre>message</yandex:genre>
        <yandex:full-text>${text}</yandex:full-text>
       </item>`;

function translit(word) {
    const urlRegex = /\s/g;
    let answer = '';
    const converter = {
        а: 'a',
        б: 'b',
        в: 'v',
        г: 'g',
        д: 'd',
        е: 'e',
        ё: 'e',
        ж: 'zh',
        з: 'z',
        и: 'i',
        й: 'y',
        к: 'k',
        л: 'l',
        м: 'm',
        н: 'n',
        о: 'o',
        п: 'p',
        р: 'r',
        с: 's',
        т: 't',
        у: 'u',
        ф: 'f',
        х: 'h',
        ц: 'c',
        ч: 'ch',
        ш: 'sh',
        щ: 'sch',
        ь: '',
        ы: 'y',
        ъ: '',
        э: 'e',
        ю: 'yu',
        я: 'ya',

        А: 'A',
        Б: 'B',
        В: 'V',
        Г: 'G',
        Д: 'D',
        Е: 'E',
        Ё: 'E',
        Ж: 'Zh',
        З: 'Z',
        И: 'I',
        Й: 'Y',
        К: 'K',
        Л: 'L',
        М: 'M',
        Н: 'N',
        О: 'O',
        П: 'P',
        Р: 'R',
        С: 'S',
        Т: 'T',
        У: 'U',
        Ф: 'F',
        Х: 'H',
        Ц: 'C',
        Ч: 'Ch',
        Ш: 'Sh',
        Щ: 'Sch',
        Ь: '',
        Ы: 'Y',
        Ъ: '',
        Э: 'E',
        Ю: 'Yu',
        Я: 'Ya',
    };

    for (let i = 0; i < word.length; ++i) {
        if (converter[word[i]] === undefined) {
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }

    return answer.toLowerCase().replace(urlRegex, '-');
}

async function generate() {
    const getDate = () => {
        const day = unixTimeStampConverter(Date.now());
        const formattedDay = Number(day) > 10 ? day : `0${day}`;
        const month = new Date().getMonth();
        const formattedMonth = Number(month) > 10 ? Number(month) + 1 : `0${Number(month) + 1}`;
        return `2023-${formattedMonth}-${formattedDay}`;
    };

    const date = getDate();

    const posts = await getPosts();
    const templates = [];
    const items = [];

    const formatTemplates = posts.length
        ? posts.forEach((post) => templates.push(createPostTemplate(post.updatedAt.slice(0, 10), `${post._id}-${translit(post.title)}`)))
        : '';

    const formatItems = posts.length
        ? posts.forEach((post) => items.push(createItemTemplate(post.title, `${post._id}-${translit(post.title)}`, post.text, post.imageUrl, post.updatedAt.slice(0, 10))))
        : '';

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
        ${templates.join(' ')}
    </urlset>
    `;

    const formatted = prettier.format(sitemap, { semi: false, parser: 'html' });

    const rss = `<?xml version="1.0" encoding="windows-1251"?>
  <rss 
    xmlns:yandex="http://news.yandex.ru" 
    xmlns:media="http://search.yahoo.com/mrss/"
    version="2.0">
    <channel>
      <title>Все новости о dota2</title>
      <link>https://dota2.su/</link>
      <description>Новости, события, турниры по dota2</description>
      ${items}
     </channel>
  </rss>`;

    writeFileSync('build/sitemap.xml', formatted);
    writeFileSync('build/rss.xml', rss);
}

generate();
