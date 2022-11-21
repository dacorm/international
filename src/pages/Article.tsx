import React, {useCallback, useEffect, useState} from 'react';
import styles from './Article.module.css';
import Header from "../components/Header/Header";
import TextSlide from "../components/TextSlide/TextSlide";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import {Link, useNavigate, useParams} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Tag from "../components/Tag/Tag";
import BigPost from "../components/BigPost/BigPost";
import CommentForm from "../components/CommentForm/CommentForm";
import Commentary from "../components/Commentary/Commentary";
import {withErrorBoundary} from "react-error-boundary";
import {Helmet, HelmetData} from 'react-helmet-async';
import axios from "../axios";
import ReactMarkdown from "react-markdown";
import {useAppDispatch, useAppSelector} from "../assets/hooks";
import {fetchPosts, fetchRemovePost} from "../redux/slices/posts";
import {convertDate} from "../helpers/convertDate";
import {convertTextIntoPreview} from "../helpers/convertTextIntoPreview";
import {getRandomNumber} from "../helpers/getRandomNumber";
import {selectIsAuth, selectName} from "../redux/slices/auth";
import {translit} from "../helpers/translateText";
import drop from "../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";

const helmetData = new HelmetData({});

interface ArticleProps {
    isOpen?: boolean
}

const matchedSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const Article: React.FC<ArticleProps> = ({ isOpen }) => {
    const [comments, setComments] = useState([{
        name: 'Denis',
        text: 'Отличная новость, актуальная'
    },])
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [preview, setPreview] = useState('');
    const [number, setNumber] = useState(0);
    const [isOpened, setIsOpened] = useState(isOpen || false);
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(state => state.posts);
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);
    const navigate = useNavigate();
    const [memoizedId, setMemoizedId] = useState('');

    const isUserAdmin = isAuth && (user.fullName === 'admin')

    useEffect(() => {
        let bool = true;
        if (id) {
            for (let i = 0; i < id.length; i++) {
                if (id.startsWith(matchedSymbols[i])) {
                    bool = false;
                    break;
                }
            }
        }
        setIsOpened(bool);
    }, [id])

    useEffect(() => {
      if (!isOpened) {
          if (id) {
              setMemoizedId(id);
          }
      }
      setIsOpened(true);
    }, [isOpened])

    const onClickRemove = () => {
        if (memoizedId) {
            if (window.confirm('Вы действительно хотите удалить статью?')) {
                dispatch(fetchRemovePost(memoizedId));
                navigate('/');
            }
        }
    }

    useEffect(() => {
        dispatch(fetchPosts());
        setNumber(getRandomNumber(0, 20));
    }, [])

    useEffect(() => {
        if (posts && title && !id?.includes('-')) {
            navigate(`/article/${id}-${translit(title)}`)
        }
    }, [posts, title])

    const fetchArticleData = async (id: string | undefined) => {
        let fetchId = id;
        if (id?.includes('-')) {
            fetchId = id.slice(0, 24);
        }
        try {
                const { data } = await axios.get(`/posts/${fetchId}`)
                setText(data.text);
                setTitle(data.title);
                setPreview(data.imageUrl);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
       if (memoizedId) {
           fetchArticleData(memoizedId);
       }
    }, [memoizedId])

    const checkImageValidity = useCallback((preview: string | undefined) => {
        if (preview?.includes('https://dota2.press/')) return
        if (preview) {
            setPreview(`url(https://dota2.press/${preview})`)
        } else {
            setPreview('')
        }
    }, [preview])

    useEffect(() => {
        checkImageValidity(preview);
    }, [preview])

    return (
        <div className={styles.article}>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content={`Последние новости по dota 2 - ${title} - на сайте international11.com`}
                />
                <title> {title} - последние новости на нашем сайте international11.com</title>
                <link rel='canonical' href={`https://dota2.su/article/${id}`} />
            </Helmet>
            <Header/>
            <WhiteHeading/>
            <TextSlide/>
            <div className={styles.articleHeading}
                 style={{
                     backgroundImage: `${preview}`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center'
                 }}
            >
                <h1 className={styles.title}>
                    {title ? title : 'Загрузка...'}
                </h1>
            </div>
            <div className={styles.articleMainText}>
                <h2 className={styles.textTitle}>{title ?? 'Загрузка...'}</h2>
                {isUserAdmin && <div className={styles.buttons}>
                    <Link to={`/admin/${memoizedId}`} className={styles.adminButton}>Редактировать</Link>
                    <button className={styles.adminButton} onClick={onClickRemove}>Удалить</button>
                </div>}
                <ReactMarkdown children={text}  />
                <Link to={'/'} className={styles.button} type='submit'>
                    <p className={styles.buttonText}>На главную</p>
                    <div className={styles.dropWrapper}>
                        <img src={drop} alt={drop} className={styles.drop}/>
                    </div>
                </Link>
            </div>
            <div className={styles.tags}>
                <Tag text={'News'}/>
            </div>
            <div className={styles.related}>
                <h2 className={styles.Heading}>Рекомендованные статьи</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.bigPosts}>
                    {
                        posts?.items?.slice(number, number + 3).map((post) => (<BigPost
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
            <div className={styles.comments}>
                <h2 className={styles.Heading}>Написать комментарий</h2>
                <div className={styles.separatorDown}/>
                <CommentForm comments={comments} setComments={setComments} />
            </div>
            <div className={styles.commentaries}>
                <h2 className={styles.Heading}>Комментарии ({comments.length})</h2>
                <div className={styles.separatorDown}/>
                {
                    comments.map((comment, index) => ( <Commentary
                        name={comment.name}
                        text={comment.text}
                        key={index + 4}
                    />))
                }
            </div>
            <Footer/>
        </div>
    );
};

export default withErrorBoundary(Article, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.articleHeading}>
            <h1 className={styles.title}>
                Что-то пошло не так
            </h1>
        </div>
        <TextSlide/>
        <Footer />
    </>)
});