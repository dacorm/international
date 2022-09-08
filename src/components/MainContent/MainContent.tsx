import React, {useRef, useState} from 'react';
import Article from "../Article/Article";
import styles from './MainContent.module.css';
import LittleArticle from "../LittleArticle/LittleArticle";
import search from '../../assets/images/searchwhite.svg';
import youtube from '../../assets/images/socials/youtube-svgrepo-com.svg';
import facebook from '../../assets/images/socials/facebook-svgrepo-com3.svg';
import twitter from '../../assets/images/socials/twitter-svgrepo-com (1).svg';
import twitch from '../../assets/images/socials/twitch-svgrepo-com.svg';
import magimons from '../../assets/images/unnamed.png'
import BigPost from "../BigPost/BigPost";
import BigArticle from "../BigArticle/BigArticle";
import Post from "../Post/Post"
import Comment from "../Comment/Comment";
import TextArticle from "../TextArticle/TextArticle";
import {
    articlesData,
    bigArticlesData,
    commentData,
    geekyPostData,
    newsPostData,
    postsData,
    reviewsPostData,
    smallPostsData,
    videoData
} from "../../assets/mainContentData";
import drop from "../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import Video from "../Video/Video";
import Tag from "../Tag/Tag";


const MainContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const slider = useRef<HTMLDivElement>(null);

    let position = 0;

    const prevHandler = () => {
        position += 280
        if (position > 350) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const nextHandler = () => {
        position -= 280
        if (position < -1299) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    return (
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Article className={styles.area} image={magimons} id={1}/>
                    {
                        articlesData.map((article, index) => (<LittleArticle
                            labelText={article.labelText}
                            titleText={article.title}
                            color={article.color}
                            key={article.id}
                            id={article.id}
                        />))
                    }
                </div>
                <div className={styles.articles}>
                    <div className={styles.bigArticles}>
                        {
                            bigArticlesData.map((article, index) => (<BigArticle title={article.title}
                                                                                 labelText={article.labelText}
                                                                                 author={article.author}
                                                                                 textPreview={article.textPreview}
                                                                                 commentsCount={article.commentsCount}
                                                                                 date={article.date}
                                                                                 color={article.color}
                                                                                 key={article.id}
                                                                                 id={article.id}
                            />))
                        }
                    </div>
                    <div className={styles.littleArticles}>
                        {
                            postsData.map((post, index) => (<BigPost
                                title={post.title}
                                color={post.color}
                                author={post.author}
                                date={post.date}
                                textPreview={post.textPreview}
                                labelText={post.labelText}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                </div>
                <div className={styles.textPreviews}>
                    <div className={styles.newsReviews}>
                        <h2 className={styles.Heading}>Gaming news</h2>
                        <div className={styles.separatorDown}/>
                        {
                            newsPostData.map((post, index) => (<TextArticle
                                color={post.color}
                                name={post.author}
                                title={post.title}
                                date={post.data}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                    <div className={styles.gameReviews}>
                        <h2 className={styles.Heading}>Game Reviews</h2>
                        <div className={styles.separatorPurple}/>
                        {
                            reviewsPostData.map((post, index) => (<TextArticle
                                color={post.color}
                                name={post.author}
                                title={post.title}
                                date={post.data}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                    <div className={styles.geekyReviews}>
                        <h2 className={styles.Heading}>Geeky news</h2>
                        <div className={styles.separatorYellow}/>
                        {
                            geekyPostData.map((post, index) => (<TextArticle
                                color={post.color}
                                name={post.author}
                                title={post.title}
                                date={post.data}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                </div>
                <div className={styles.latestVideos}>
                    <div className={styles.videosHeading}>
                        <div>
                            <h2 className={styles.Heading}>Latest Videos</h2>
                            <div className={styles.separatorVid}/>
                        </div>
                        <div>
                            <button className={styles.button} onClick={prevHandler}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropLeft}/>
                            </button>
                            <button className={styles.button} onClick={nextHandler}>
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
                            <h2 className={styles.Heading}>FAQ</h2>
                            <div className={styles.separatorVid}/>
                        </div>
                        <div className={styles.quest}>
                            <p className={styles.question}>How do i create my forum account</p>
                            <div className={isOpen ? styles.remove : styles.add} onClick={() => setIsOpen(!isOpen)}/>
                        </div>
                        {
                            isOpen && (
                                <p className={styles.answer}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Adipisci corporis in itaque nobis quaerat quo saepe! Accusamus blanditiis culpa
                                    exercitationem minus placeat possimus quas quidem ratione temporibus! Ab beatae
                                    cumque, ducimus error esse eveniet magnam modi, necessitatibus pariatur quaerat
                                    quibusdam ratione repellat repellendus, rerum sequi ut vero! Aperiam, dolores in
                                    ipsum iure laudantium placeat suscipit voluptatibus. Animi illo ipsam minima quas,
                                    quibusdam sunt vel. A, ab accusantium asperiores delectus dolores ducimus eum
                                    impedit, maiores maxime mollitia nulla perspiciatis praesentium provident quia quo,
                                    similique temporibus. Ad adipisci commodi consectetur cupiditate dicta dolores ea
                                    earum est ex excepturi expedita facilis fuga ipsum laborum, laudantium, libero
                                    minima necessitatibus, odio pariatur perspiciatis possimus quis quisquam sapiente
                                    totam vitae voluptas voluptatem voluptatibus. Accusantium ad amet consequatur
                                    deserunt dignissimos excepturi exercitationem explicabo facilis fugit non quidem,
                                    quisquam sapiente similique sint sit, voluptate voluptates. Aliquam architecto
                                    dolorem ipsum laudantium magnam odit optio reprehenderit sit veritatis. A
                                    consequuntur debitis delectus deserunt dicta dolor doloribus eius error eum, facilis
                                    ipsam ipsum maiores, molestias neque nobis non officia omnis quis recusandae
                                    repellendus sed sequi similique sint sit sunt tempore, voluptatibus voluptatum.
                                    Architecto eligendi eveniet, fugiat incidunt obcaecati praesentium. Animi deserunt
                                    nisi quos soluta. Blanditiis commodi hic incidunt, laborum nihil nisi quaerat quam
                                    quasi ullam vel. Accusamus, accusantium adipisci assumenda atque delectus distinctio
                                    dolores ea est eum eveniet hic illum incidunt ipsum iusto magnam minus natus nemo
                                    nesciunt omnis pariatur perspiciatis provident quaerat quam quisquam quos rem
                                    repellat rerum sequi sunt suscipit totam veniam vitae voluptatem! Exercitationem
                                    fugiat odio porro! Dolor hic illum optio rem veniam. Animi at distinctio eius illum
                                    nostrum nulla odit quas tempore! Accusantium asperiores dignissimos ea fugit illo
                                    maxime nam natus quae sint voluptates? Et, quia, recusandae. Ad, alias aspernatur
                                    assumenda consectetur consequatur deleniti dolorem ea eius eos error est eum
                                    explicabo, impedit ipsa laborum magni minima minus nesciunt nostrum numquam, officia
                                    porro reprehenderit! Atque, facere, magnam? Amet aspernatur, consequuntur debitis
                                    delectus deleniti eligendi enim eos ex excepturi in incidunt laboriosam molestiae
                                    nemo nulla obcaecati officia quo sit ut veritatis voluptatum? Alias dolorum earum
                                    illo incidunt obcaecati pariatur quibusdam quidem sapiente ullam, ut! Dicta facilis
                                    illum labore minima nostrum repudiandae sequi tempora ut, vel voluptas? Alias
                                    aliquam assumenda atque aut consequatur cupiditate debitis dolor dolorem ea eligendi
                                    esse excepturi fugiat in ipsam labore laboriosam, laudantium mollitia nemo neque
                                    nihil obcaecati odio placeat quasi recusandae repellat repellendus sed similique
                                    soluta sunt veniam veritatis voluptas voluptatem voluptatibus. Ab blanditiis
                                    consequatur consequuntur culpa dolorem esse est eveniet, expedita harum illum ipsum
                                    libero molestias nulla odio quibusdam repellendus saepe, sit vitae voluptas
                                    voluptate! Cupiditate maiores nam quam quo reprehenderit. Blanditiis corporis eaque
                                    earum explicabo iusto nihil quibusdam temporibus ullam unde. Beatae commodi cum
                                    dolorum fugit, illum iste laboriosam quibusdam quidem quod totam. Accusamus ad
                                    adipisci atque blanditiis consequatur dignissimos doloremque ducimus, fuga harum
                                    illo impedit in ipsum iste, iusto maiores minima mollitia neque quas quidem quisquam
                                    sequi veritatis voluptatum. Accusamus aliquam aspernatur assumenda beatae delectus
                                    enim eveniet expedita inventore officiis quae, qui quia quibusdam saepe sequi sint,
                                    sit, sunt suscipit. Accusantium aliquam amet aperiam consequatur cum cumque
                                    cupiditate debitis deleniti dolores ducimus eaque eius, est facere fuga id illo
                                    minus neque optio perspiciatis porro praesentium provident quaerat quam quibusdam
                                    quos, reiciendis rem repellendus saepe ullam unde ut voluptate voluptates
                                    voluptatum? Dolores error facere itaque magni minus nemo odit officiis ratione
                                    suscipit vel? Aliquam corporis culpa cupiditate debitis, distinctio ex incidunt
                                    laborum laudantium nam pariatur porro ratione tempore vel. Accusantium aliquid animi
                                    architecto commodi consequuntur, cum earum eius harum laboriosam maiores odio
                                    possimus praesentium quia quisquam tempora veniam voluptatibus. Accusamus animi aut
                                    consectetur dicta ducimus labore laborum minus nemo neque, nobis obcaecati odio
                                    officia omnis quisquam, rem velit voluptatibus? Dolore fuga maiores nemo rem
                                    voluptates! Adipisci aliquid amet aperiam beatae consequatur corporis cum dicta
                                    dolores earum eum ex, excepturi fuga ipsum laudantium minima mollitia nam nemo
                                    officia officiis perspiciatis possimus praesentium quaerat quas qui quo repellendus
                                    soluta temporibus ut voluptas voluptatum. Ab, aliquid aut deserunt distinctio eius,
                                    eligendi enim eos esse harum laborum magni maxime minima nisi odit quidem quis sed,
                                    soluta temporibus. A, accusantium animi dicta distinctio ducimus iure minus neque
                                    nobis perferendis quibusdam suscipit totam veniam vitae. Ad amet asperiores commodi
                                    doloribus eius eligendi enim inventore iste magni minus molestiae odio possimus
                                    provident quaerat, quasi quo sunt suscipit tempora veritatis voluptate. Dolor
                                    dolores, et fugit inventore ipsum minus modi natus numquam ratione voluptate?
                                    Aliquam atque officia perferendis possimus repellendus. Aliquam cum deserunt dolore
                                    ex excepturi facere iusto nemo nesciunt odio perspiciatis porro quasi quibusdam
                                    suscipit temporibus totam, ullam voluptatum! Atque dolores explicabo labore quas
                                    vero? Adipisci amet dolorum eius esse nam reiciendis repellendus ut? Aut autem,
                                    minus modi molestiae numquam omnis possimus quaerat sed soluta suscipit totam ut.
                                    Corporis excepturi expedita inventore, ipsa laborum minima natus nesciunt sint
                                    ullam? Adipisci alias beatae fugit labore nisi non possimus sint, totam? Ab deserunt
                                    expedita ipsa ipsum maiores molestias odio omnis porro quae quos rerum, soluta
                                    tenetur voluptatum. Aliquam aspernatur debitis ducimus eveniet in ipsum iure
                                    laboriosam optio porro unde! Corporis dignissimos exercitationem ipsum laudantium
                                    natus nulla tempore! Accusamus alias aspernatur beatae cupiditate dignissimos
                                    doloremque doloribus eum eveniet excepturi id illo illum, inventore magni maiores
                                    minima modi necessitatibus odit omnis pariatur possimus ratione, repudiandae
                                    sapiente sequi tenetur unde vel veritatis. Ea earum eius enim eum explicabo ipsum
                                    magnam quo totam vel voluptates! Asperiores atque commodi consequuntur, distinctio
                                    earum enim est et excepturi explicabo facere ipsa ipsam iste labore laborum, magnam
                                    modi molestias natus nobis nulla quam quidem rem sapiente sequi sit soluta suscipit
                                    tempora veniam. Assumenda deleniti dignissimos enim excepturi harum nesciunt quae
                                    quos voluptates! Animi asperiores corporis cupiditate debitis doloribus, dolorum
                                    error est expedita facere fugit hic in officia placeat quae qui rem sed ut voluptate
                                    voluptatem voluptatibus? Ab accusamus aliquam at culpa cum deleniti deserunt dolore
                                    doloremque ducimus, eveniet fuga harum laboriosam magni minus molestiae nesciunt
                                    nihil nisi nostrum quam quia reiciendis sapiente sit soluta totam veritatis vero
                                    voluptates, voluptatum? Dicta incidunt natus ratione repellat? Ab accusamus
                                    architecto aspernatur consectetur cum, delectus deserunt dolores ducimus, ea enim ex
                                    id illum impedit inventore ipsam ipsum minima nemo nihil nostrum numquam officia
                                    omnis perferendis, quae quia quo quod ratione recusandae rem reprehenderit sapiente
                                    sequi similique sint soluta temporibus vel velit voluptatum! Aliquam dolorem esse
                                    quasi rem sit. Aliquam autem culpa doloribus esse labore placeat quos saepe!
                                    Adipisci animi atque cum cupiditate dolore explicabo numquam obcaecati, omnis quia
                                    totam. Autem corporis eveniet fugiat repellat soluta voluptatum? At aut autem
                                    corporis dignissimos explicabo harum inventore ipsam maiores, maxime minus molestiae
                                    mollitia porro quos, repudiandae tempora, vel velit? A animi aperiam, aspernatur
                                    commodi dignissimos et facilis labore molestias nemo obcaecati omnis placeat quas
                                    quos reiciendis sed, vel velit voluptatibus. Amet animi, aperiam autem beatae cum
                                    dolorum ducimus eos error eum id illo, impedit inventore ipsa labore magni maxime
                                    molestiae non nulla odio pariatur perspiciatis placeat porro quia quibusdam quo quod
                                    repellat repudiandae rerum saepe sapiente sint soluta temporibus tenetur ullam
                                    veniam vero voluptatibus? Amet architecto consequatur cumque dicta, dignissimos enim
                                    facere impedit, ipsa laboriosam minus possimus provident quisquam recusandae
                                    repellat sequi vel voluptatum. Aliquid amet assumenda blanditiis corporis facere
                                    facilis ipsum iure labore magni mollitia nemo odit officiis placeat, quisquam
                                    ratione repudiandae rerum sed suscipit vel voluptatum. Aspernatur nemo odit
                                    quibusdam vitae voluptatum. Aliquam, cum dolorem earum eligendi enim ex expedita
                                    fugit harum id, in ipsam magnam mollitia nulla obcaecati officiis perspiciatis quam
                                    quidem quod ratione recusandae repellendus sed sequi similique soluta totam veniam
                                    voluptates. Deleniti dicta dolor ducimus explicabo incidunt itaque modi molestiae
                                    nemo, numquam quae repellendus tempora temporibus tenetur unde velit? Consectetur
                                    deserunt doloremque doloribus ea eaque eius eligendi fugit illo incidunt laboriosam,
                                    magni necessitatibus odio optio perspiciatis repellendus similique vitae! Alias
                                    consectetur deleniti deserunt dignissimos dolore eaque, eius eveniet ex facere
                                    inventore, ipsam ipsum iste iusto laudantium minus modi natus nihil officia optio
                                    provident quas quisquam rerum vero! Blanditiis culpa cumque dolorem doloribus eius
                                    eligendi expedita explicabo facere, fuga fugiat laudantium, nam non nostrum officiis
                                    provident saepe sed voluptatem voluptates. Cupiditate delectus illum in iusto
                                    laborum ratione vel velit. Assumenda beatae ducimus eligendi fuga illum magni nemo
                                    sed veniam. Accusantium architecto blanditiis eaque inventore ipsam magni minus
                                    omnis quam repudiandae similique, tenetur unde veniam veritatis? Accusantium
                                    cupiditate maxime quam quo tenetur? Aspernatur debitis ea error, facilis fugit illum
                                    laudantium minima modi nemo placeat quasi reiciendis sequi. A accusamus ad adipisci
                                    aliquid aperiam architecto at blanditiis corporis culpa cumque debitis, delectus
                                    dicta eius esse eum exercitationem fugiat illo ipsa laborum maiores molestias nisi
                                    nostrum numquam officiis perferendis perspiciatis porro quibusdam recusandae rem
                                    sequi tempora tempore temporibus ullam veritatis voluptates voluptatibus voluptatum.
                                    Aut corporis distinctio doloremque est porro quod sapiente! Accusantium aperiam cum
                                    distinctio eum hic iusto libero nisi odio, possimus tempora. Aperiam eligendi esse
                                    expedita explicabo, fugit hic iure libero natus sed totam! Amet aperiam aspernatur
                                    assumenda consectetur delectus dolores, ducimus ipsum magni minima nesciunt nihil
                                    nostrum quam quos recusandae saepe sapiente soluta. Consequuntur dolor ea et facere
                                    ipsam laudantium libero mollitia neque nihil officia perferendis, quisquam rerum
                                    saepe sit sunt ut voluptates. Ad at blanditiis eum excepturi fugiat modi
                                    necessitatibus perferendis temporibus unde?</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.inputWrap}>
                    <input type='text' placeholder='Search for articles here' className={styles.input}/>
                    <div className={styles.blueRound}>
                        <img src={search} alt="Search icon" className={styles.search}/>
                    </div>
                </div>
                <h2 className={styles.Heading}>Social Pixel</h2>
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
                <h2 className={styles.Heading}>Popular Posts</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.popularPosts}>
                    {
                        smallPostsData.map((post, index) => (<Post
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            key={post.id}
                            id={post.id}
                        />))
                    }
                </div>
                <h2 className={styles.Heading}>Latest Reviews</h2>
                <div className={styles.separatorPurple}/>
                <div className={styles.popularPosts}>
                    {
                        smallPostsData.map((post, index) => (<Post
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            key={post.id}
                            id={post.id}
                        />))
                    }
                </div>
                <h2 className={styles.Heading}>Lastest comments</h2>
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
                    <h2 className={styles.Heading}>Pixel tags</h2>
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