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

const helmetData = new HelmetData({});

const Article = () => {
    const [comments, setComments] = useState([{
        name: 'Denis',
        text: 'Отличная новость, актуальная'
    },])
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [preview, setPreview] = useState('');
    const [number, setNumber] = useState(0);
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(state => state.posts);
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);
    const navigate = useNavigate();

    const isUserAdmin = isAuth && (user.fullName === 'admin')

    const onClickRemove = () => {
        if (id) {
            if (window.confirm('Вы действительно хотите удалить статью?')) {
                dispatch(fetchRemovePost(id));
                navigate('/');
            }
        }
    }

    useEffect(() => {
        dispatch(fetchPosts());
        setNumber(getRandomNumber(0, 20));
    }, [])

    const fetchArticleData = async (id: string | undefined) => {
        const { data } = await axios.get(`/posts/${id}`)
        setText(data.text);
        setTitle(data.title);
        setPreview(data.imageUrl)
    }

    useEffect(() => {
       fetchArticleData(id);
    }, [id])

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
                    <Link to={`/admin/${id}`} className={styles.adminButton}>Редактировать</Link>
                    <button className={styles.adminButton} onClick={onClickRemove}>Удалить</button>
                </div>}
                <ReactMarkdown children={text}  />
            </div>
            <div className={styles.tags}>
                <Tag text={'Gaming'}/>
                <Tag text={'Reviews'}/>
                <Tag text={'News'}/>
                <Tag text={'Gaming'}/>
                <Tag text={'Gaming'}/>
            </div>
            <div className={styles.related}>
                <h2 className={styles.Heading}>Related articles</h2>
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
                <h2 className={styles.Heading}>Write comment</h2>
                <div className={styles.separatorDown}/>
                <CommentForm comments={comments} setComments={setComments} />
            </div>
            <div className={styles.commentaries}>
                <h2 className={styles.Heading}>Comments ({comments.length})</h2>
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