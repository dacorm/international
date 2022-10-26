import React, {useCallback, useEffect, useRef, useState} from 'react';
import Article from "../Article/Article";
import styles from './MainContent.module.css';
import LittleArticle from "../LittleArticle/LittleArticle";
import search from '../../assets/images/searchwhite.svg';
import youtube from '../../assets/images/socials/youtube-svgrepo-com.svg';
import facebook from '../../assets/images/socials/facebook-svgrepo-com3.svg';
import twitter from '../../assets/images/socials/twitter-svgrepo-com (1).svg';
import twitch from '../../assets/images/socials/twitch-svgrepo-com.svg';
import _debounce from 'lodash/debounce';
import BigPost from "../BigPost/BigPost";
import BigArticle from "../BigArticle/BigArticle";
import Post from "../Post/Post"
import Comment from "../Comment/Comment";
import TextArticle from "../TextArticle/TextArticle";
import {
    commentData,
    geekyPostData,
    newsPostData,
    reviewsPostData,
    smallPostsData,
    videoData
} from "../../assets/mainContentData";
import drop from "../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import Video from "../Video/Video";
import Tag from "../Tag/Tag";
import {useAppDispatch, useAppSelector} from "../../assets/hooks";
import {fetchPosts} from "../../redux/slices/posts";
import {convertTextIntoPreview} from "../../helpers/convertTextIntoPreview";
import {convertDate} from "../../helpers/convertDate";


const MainContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const slider = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(state => state.posts);
    
    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchPosts());
        setIsLoading(false);
    }, [])

    let position = 0;

    const prevHandler = () => {
        position += 280
        if (position > 350) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const debouncePrev = useCallback(_debounce(prevHandler, 150), [position]);

    const nextHandler = () => {
        position -= 280
        if (position < -1299) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const debounceNext = useCallback(_debounce(nextHandler, 150), [position]);


    return (
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(9, 10).map((article) => (
                            <Article
                                className={styles.area}
                                image={article.imageUrl}
                                id={article._id}
                                title={article.title}
                                key={article._id}
                            />
                        ))
                    }
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(10, 13).map((article) => (
                            <LittleArticle
                                labelText={'Dota2'}
                                titleText={article.title}
                                key={article._id}
                                id={article._id}
                                image={article.imageUrl}
                            />))
                    }
                </div>
                <div className={styles.articles}>
                    <div className={styles.bigArticles}>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(5, 8).map((article) => (
                                <BigArticle title={article.title}
                                            labelText={'Dota2'}
                                            author={'Admin'}
                                            textPreview={convertTextIntoPreview(article.text)}
                                            commentsCount={article.viewsCount}
                                            date={convertDate(article.createdAt.toString())}
                                            key={article._id}
                                            id={article._id}
                                            image={article.imageUrl}
                                />))
                        }
                    </div>
                    <div className={styles.littleArticles}>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(0, 5).map((post) => (<BigPost
                                title={post.title}
                                author={'Admin'}
                                date={convertDate(post.createdAt.toString())}
                                textPreview={convertTextIntoPreview(post.text)}
                                labelText={'Dota2'}
                                key={post._id}
                                id={post._id}
                                image={post.imageUrl}
                            />))
                        }
                    </div>
                </div>
                <div className={styles.textPreviews}>
                    <div className={styles.newsReviews}>
                        <h2 className={styles.Heading}>Обзоры игр</h2>
                        <div className={styles.separatorDown}/>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(15, 18).map((post) => (<TextArticle
                                color={'blue'}
                                name={'Admin'}
                                title={post.title}
                                date={convertDate(post.createdAt.toString())}
                                key={post._id}
                                id={post._id}
                            />))
                        }
                    </div>
                    <div className={styles.gameReviews}>
                        <h2 className={styles.Heading}>Новости Dota2</h2>
                        <div className={styles.separatorPurple}/>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(10, 13).map((post) => (<TextArticle
                                color={'blue'}
                                name={'Admin'}
                                title={post.title}
                                date={convertDate(post.createdAt.toString())}
                                key={post._id}
                                id={post._id}
                            />))
                        }
                    </div>
                    <div className={styles.geekyReviews}>
                        <h2 className={styles.Heading}>Из мира киберспорта</h2>
                        <div className={styles.separatorYellow}/>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(18, 21).map((post) => (<TextArticle
                                color={'blue'}
                                name={'Admin'}
                                title={post.title}
                                date={convertDate(post.createdAt.toString())}
                                key={post._id}
                                id={post._id}
                            />))
                        }
                    </div>
                </div>
                <div className={styles.latestVideos}>
                    <div className={styles.videosHeading}>
                        <div>
                            <h2 className={styles.Heading}>Последние трансляции метчей</h2>
                            <div className={styles.separatorVid}/>
                        </div>
                        <div>
                            <button className={styles.button} onClick={debouncePrev}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropLeft}/>
                            </button>
                            <button className={styles.button} onClick={debounceNext}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.videoContainer} ref={slider}>
                        {
                            videoData.map((video, index) => (<Video
                                text={video.text}
                                textSmall={video.textSmall}
                                key={`${index}+5`}
                            />))
                        }
                    </div>
                    <div className={styles.faq}>
                        <div>
                            <h2 className={styles.Heading}>The international 2022</h2>
                            <div className={styles.separatorVid}/>
                        </div>
                        <div className={styles.quest}>
                            <p className={styles.question}>The international 2022 – уже одиннадцатый по счету турнир серии</p>
                            <div className={isOpen ? styles.remove : styles.add} onClick={() => setIsOpen(!isOpen)}/>
                        </div>
                        {
                            isOpen && (
                                <div className={styles.answer}><p>The international 2022 &ndash; уже одиннадцатый по счету турнир серии The International. Каждый год организаторы анонсируют новый город для проведения соревнований, и на этот раз это Сингапур. Впервые турнир пройдет в юго-восточной Азии!</p>

                                    <p>Призовой фонд турнира уже превысил отметку в двенадцать миллионов долларов, и это не предел. Победители прошлого турнира получили 45% от общей суммы фонда &ndash; предполагается, что в этом году распределение призовых будет идентичным.</p>

                                    <h2>Уникальность одиннадцатого the international 2022</h2>

                                    <p>Формат проведения соревнований остается прежним, но на этот раз организаторы решили изменить количество участников &ndash; вместо привычных восемнадцати команд нас ждет двадцать.</p>

                                    <p>Место проведения турнира на этот раз не одна, а две площадки &ndash; плей-офф будет проходить на стадионе Suntec Singapore, когда как матчи финальной стадии соревнований примет у себя крытый стадион Сингапура.</p>

                                    <p>Впервые в истории за последних два места на турнире будет идти борьба на последней квалификации, которая пройдет непосредственно в Сингапуре - Last Chance Qualifier.</p>

                                    <h2>Отбор команд и пара слов об участниках</h2>

                                    <p>В первую очередь в главный киберспортивный турнир года попадают двенадцать команд, признанные лучшими по итогам профессионального сезона Dota Pro Circuit. Такие команды поучают прямое приглашение на турнир по доте international 2022 и попадают сразу в групповую стадию. В этом году командами, получившими прямой инвайт, стали:</p>

                                    <ul>
                                        <li>TeamSpirit</li>
                                        <li>OG</li>
                                        <li>Team Aster</li>
                                        <li>beastcoast</li>
                                        <li>BOOM Esports</li>
                                        <li>Thunder Awaken</li>
                                        <li>TSM</li>
                                        <li>PSG.LGD</li>
                                        <li>Gaimin Gladiators</li>
                                        <li>OG</li>
                                        <li>Evil Geniuses</li>
                                        <li>Tundra Esports</li>
                                    </ul>

                                    <p>Более половины из списка принимали участие в предыдущем интернейшеле.</p>

                                    <p>Русскоязычная команда Team Spirit, как мы все прекрасно помним, являясь аутсайдерами, неожиданно для всех вырвали у фаворитов турнира PSG.LGD первое место, пройдя по нижней сетке соревнований. забрав приз в $18,208,300 команда обещала вернуться в следующем году. Смогут ли они повторить свой феноменальный успех на the international 2022? Это мы узнаем совсем скоро.</p>

                                    <p>После этой неожиданной победы многие задались вопросом: не случайна ли победа team spirit? Может, это банально везенье? Но прямое приглашение организаторов по результатам профессионального сезона показало, что нет &ndash; это не случайность. Примечательно, что Спириты вырвали приглашение на PGL Arlington Major обыграв своих соперников из финала Ti 10 &ndash; китайскую команду PSG.LGD.</p>

                                    <p>Следующие, кто получил место на Ti 11 &ndash; шесть команд, прошедших региональные квалификации. Шесть регионов &ndash; шесть команд.</p>

                                    <p>В СНГ-регионе изначально намечались интересные квалификации &ndash; команда virtus pro не смогла получить прямого приглашения на the international 2022 и была вынуждена сражаться за выход в турнир на квалификациях. Являясь фаворитом региона все были уверены в победе &laquo;медведей&raquo; но&hellip; СНГ-команды умеют удивлять. Никому ранее не известная команда без громкого прошлого BetBoom вырвала место в Инте у Virtus Pro, не дав им забрать и одной карты в гранд-финале.</p>

                                    <p>Ходят разговоры, что это случайность и дело не в BetBoom а в самих &laquo;медведях&raquo;, которые не смогли взять себя в руки и собраться для победы.</p>

                                    <p>Без неожиданностей не прошли и квалификации Европейского региона. Ожидалось, что свое место на Ti 11 заберет Team Secret, но что-то пошло не так и молодая команда Entity победила в финале со счетом 3-0.</p>

                                    <p>Entity показывало потрясающие результаты и многие уверены, что команда отлично покажет себя на главном соревновании года, попадая, как минимум, в топ 10.</p>

                                    <p>Итак, все шесть команд, кто получает &laquo;билет&raquo; на прохождение в групповой этап Ti 11 по итогам квалификаций:</p>

                                    <ul>
                                        <li>BetBoom</li>
                                        <li>Hokori</li>
                                        <li>Royal Never Give Up</li>
                                        <li>Entity Gaming</li>
                                        <li>Soniqs</li>
                                        <li>Talon Esports</li>
                                    </ul>

                                    <p>Двенадцать плюс шесть &ndash; восемнадцать, а участников группового этапа запланировано двадцать. Это не ошибка, и пока что, действительно, команды, которые займут последние слоты турнира, используя последний шанс, неизвестны.</p>

                                    <p>Последний шанс &ndash; это Last Chance Qualifier, который пройдет с 8 по 12 октября. По результатам соревнований станет известно, кто займет последние два слота the international 2022.</p>

                                    <p>Бороться будут команды, которые не смогли пройти региональные квалификации и заняли на них 2-3 места. Участие примут 12 команд:</p>

                                    <ul>
                                        <li>Natus Vincere</li>
                                        <li>Nouns</li>
                                        <li>Polaris Esports</li>
                                        <li>Team Secret</li>
                                        <li>Tempest</li>
                                        <li>Vici Gaming</li>
                                        <li>Infamous</li>
                                        <li>T1</li>
                                        <li>Team Liquid</li>
                                        <li>Virtus.pro</li>
                                        <li>Wildcard Gaming</li>
                                        <li>Xtreme Gaming</li>
                                    </ul>

                                    <h2>Система и время проведения</h2>

                                    <p>Уже известны точные даты the international 2022 по доте. Last Chance Qualifier будет проходить непосредственно в Сингапуре с 8 по 12 числа октября.</p>

                                    <p>Недавно стало известно, что система проведение будет такова:</p>

                                    <p>Участники будут поделены на две группы по шесть коллективов. После этого команды будут бороться по круговой системе, играя best-of-2 &ndash; то есть, по две игры с каждым соперником. Далее ожидается сетка плей-офф стадии Last Chance, где в верхней сетке окажутся четыре состава, занявшие первые места групповой стадии, и в нижней &ndash; остальные. В групповую стадию непосредственно the international 2022 попадут две команды-победители верхней и нижней сетки.</p>

                                    <p>С 15 по 18 октября пройдет групповая стадия. На ней все двадцать команд разделятся на две группы. По результатам групповой стадии выбывают четыре команды, набравшие наименьшее количество очков.</p>

                                    <p>Основная стадия плей-офф пройдет сс 20 по 23 октября, и после перерыва на новом стадионе пройдет финал &ndash; с 29 по 20 октября.</p></div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.inputWrap}>
                    <input type='text' placeholder='Поиск статей' className={styles.input}/>
                    <div className={styles.blueRound}>
                        <img src={search} alt="Search icon" className={styles.search}/>
                    </div>
                </div>
                <h2 className={styles.Heading}>Социальные сети</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.socialWrapper}>
                    <div className={styles.social1}>
                        <img src={facebook} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>2560</p>
                    </div>
                    <div className={styles.social2}>
                        <img src={twitter} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>1945</p>
                    </div>
                    <div className={styles.social3}>
                        <img src={youtube} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>835</p>
                    </div>
                    <div className={styles.social4}>
                        <img src={twitch} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>9632</p>
                    </div>
                </div>
                <h2 className={styles.Heading}>Популярные посты</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.popularPosts}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).sort((a, b) => {
                            return b.viewsCount - a.viewsCount
                        }).slice(0, 4).map((post) => (<Post
                            title={post.title}
                            author={'Admin'}
                            date={convertDate(post.createdAt.toString())}
                            key={post._id}
                            id={post._id}
                            image={post.imageUrl}
                        />))
                    }
                </div>
                <h2 className={styles.Heading}>Последние статьи</h2>
                <div className={styles.separatorPurple}/>
                <div className={styles.popularPosts}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(0, 4).map((post) => (<Post
                            title={post.title}
                            author={'Admin'}
                            date={convertDate(post.createdAt.toString())}
                            key={post._id}
                            id={post._id}
                            image={post.imageUrl}
                        />))
                    }
                </div>
                <h2 className={styles.Heading}>Последние комментарии</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.comments}>
                    {
                        commentData.map((comment, index) => (<Comment
                            name={comment.name}
                            title={comment.title}
                            comment={comment.comment}
                            key={`${index}+2`}
                            color={comment.color}
                        />))
                    }
                </div>
                <div>
                    <h2 className={styles.Heading}>Облако тегов</h2>
                    <div className={styles.separatorDown}/>
                    <div className={styles.tags}>
                        <Tag text={'Gaming'}/>
                        <Tag text={'Video Reviews'}/>
                        <Tag text={'Previews'}/>
                        <Tag text={'Movie Reviews'}/>
                        <Tag text={'eSports'}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;