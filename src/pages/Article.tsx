import React, {useEffect, useState} from 'react';
import styles from './Article.module.css';
import Header from "../components/Header/Header";
import TextSlide from "../components/TextSlide/TextSlide";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import {useParams} from "react-router-dom";
import {arrayOfDataArrays} from "../assets/arrayOfData";
import Footer from "../components/Footer/Footer";
import Tag from "../components/Tag/Tag";
import {postsData} from "../assets/mainContentData";
import BigPost from "../components/BigPost/BigPost";
import CommentForm from "../components/CommentForm/CommentForm";
import Commentary from "../components/Commentary/Commentary";
import {withErrorBoundary} from "react-error-boundary";

export const commentsData = [{
    name: 'Elizabeth Valentine',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
},{
    name: 'Thomas Stevens',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
},{
    name: 'Megan Lebeu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}]

const Article = () => {
    const [comments, setComments] = useState([{
        name: 'Elizabeth Valentine',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
            '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
            '                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
            '                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },{
        name: 'Thomas Stevens',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
            '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
            '                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
            '                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },{
        name: 'Megan Lebeu',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
            '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
            '                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
            '                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }])
    const [text, setText] = useState('');
    const {id} = useParams();

    const articleChecker = (array: any[]) => {
        for (let i = 0; i < array.length; i++) {
            if (Number(id) === array[i]?.id) {
                setText(array[i]?.title)
            }
        }
    }

    useEffect(() => {
        articleChecker(arrayOfDataArrays);
    }, [id])

    return (
        <div className={styles.article}>
            <Header/>
            <WhiteHeading/>
            <TextSlide/>
            <div className={styles.articleHeading}>
                <h1 className={styles.title}>
                    {text ? text : 'Article text not found'}
                </h1>
            </div>
            <div className={styles.articleMainText}>
                <h2 className={styles.textTitle}>Lets talk about that {text ? text : 'this article not exists'}</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem riam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam e quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratitate sequi nesciunt. Neque porro quisquam est, qui dolorem
                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas ullamco laboris nisi ut aliquip
                    ex ea commodonulla pariatur?
                </p>
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