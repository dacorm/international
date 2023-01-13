const express = require('express');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const { Readable } = require('stream');

const app = express();
let sitemap;

app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');

    if (sitemap) {
        res.send(sitemap);
        return;
    }

    try {
        const smStream = new SitemapStream({ hostname: 'https://example.com/' });
        const pipeline = smStream.pipe(createGzip());

        smStream.write({ url: '/', changefreq: 'daily', priority: 0.3 });
        smStream.write({ url: '/news', changefreq: 'monthly', priority: 0.7 });
        smStream.write({ url: '/heroes' });
        smStream.write({ url: '/players' });

        streamToPromise(pipeline).then((sm) => sitemap = sm);
        smStream.end();
        pipeline.pipe(res).on('error', (e) => { throw e; });
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

app.listen(3000, () => {
    console.log('listening');
});
