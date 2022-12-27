import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../assets/hooks';
import { fetchPosts } from '../redux/slices/posts';
import { convertDate } from '../helpers/convertDate';

const Rss = () => {
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector((state) => state.posts);

    useEffect(() => {
        if (posts!.items!.length === 0) {
            dispatch(fetchPosts());
        }
    }, []);
    const getItem = (title: string, link: string, description: string, image: string, date: string, text: string) => `<item>
        <title>${title}</title>
        <link>${link}</link>
        <description>${description}</description>
        <author>Admin</author>
        <category>Киберспорт</category>
          <media:thumbnail 
            url="https://dota2.press/${image}" />
        </media:group>        
        <pubDate>${date}</pubDate>
        <yandex:genre>message</yandex:genre>
        <yandex:full-text>${text}</yandex:full-text>
       </item>`;

    return (
        <div dangerouslySetInnerHTML={{
            __html: `<?xml version="1.0" encoding="windows-1251"?>
  <rss 
    xmlns:yandex="https://dota2.su/news" 
    xmlns:media="https://dota2.su/rss"
    version="2.0">
    <channel>
      <title>Киберспортивные новости Dota2.su</title>
      <link>https://dota2.su/</link>
      <description>Главные новости Dota2 киберспорт</description>
     ${posts.items?.map((item) => getItem(item.title, `dota2.su/${item._id}`, item.text, item.imageUrl, convertDate(String(item.createdAt)), item.text))}
     </channel>
  </rss>`,
        }}
        />
    );
};

export default Rss;
