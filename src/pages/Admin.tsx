import React, {
    useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SimpleMDE from 'react-simplemde-editor';
import { withErrorBoundary } from 'react-error-boundary';
import { useAppSelector } from '../assets/hooks';
import { selectIsAuth, selectName } from '../redux/slices/auth';
import styles from './Admin.module.css';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import Footer from '../components/Footer/Footer';
import 'easymde/dist/easymde.min.css';
import axios from '../axios';
import InfoPopup from '../components/InfoPopup/InfoPopup';
import TextSlide from '../components/TextSlide/TextSlide';

type Options = {
    spellChecker: boolean;
    maxHeight: string;
    autofocus: boolean;
    placeholder: string;
    status: boolean;
    autosave: {
        enabled: boolean;
        delay: number;
        uniqueId: string
    }
}

const Admin = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const inputFileRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isArticle, setIsArticle] = useState(false);
    const { id } = useParams();

    const isEditing = Boolean(id);

    const isUserAdmin = isAuth && (user.fullName === 'admin');

    const onChange = useCallback((value: React.SetStateAction<string>) => {
        setText(value);
    }, []);

    const togglePostState = () => {
        setIsArticle((prevState) => !prevState);
    };

    const fetchArticle = async () => {
        const { data } = await axios.get(`/posts/${id}`);
        setText(data.text);
        setTitle(data.title);
        setImageUrl(data.imageUrl);
    };

    useEffect(() => {
        if (id) {
            fetchArticle();
        }
    }, []);

    const handleChangeFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (!evt.target.files) return;
            const formData = new FormData();
            const file = evt.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/upload', formData);
            setImageUrl(data.url);
        } catch (err) {
            console.warn(err);
            alert('???? ?????????????? ?????????????????? ????????');
        }
    };

    const onSubmit = async () => {
        try {
            setIsLoading(true);

            const fields = {
                title,
                tags: '',
                imageUrl,
                text,
                isArticle,
            };
            const { data } = isEditing ? await axios.patch(`/posts/${id}`, fields) : await axios.post('/posts', fields);
            setTitle('');
            setText('');
            setImageUrl('');
            setIsLoading(false);
        } catch (err) {
            console.warn(err);
            setError(true);
        }
    };

    const onClickRemoveImage = () => {
        setImageUrl('');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        if (!isUserAdmin) {
            navigate('/');
        }
    }, [isUserAdmin]);

    const options: Options = useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '400px',
            autofocus: true,
            placeholder: '?????????????? ??????????...',
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
                uniqueId: 'article',
            },
        }),
        [],
    );

    return (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.editorContainer}>
                <div className={styles.inputWrapper}>
                    <input
                        type="file"
                        ref={inputFileRef}
                        name="input__file"
                        id="input__file"
                        onChange={handleChangeFile}
                        className={styles.inputFile}
                    />
                    <label htmlFor="input__file" className={styles.inputFileLabel}>???????????????? ????????????</label>
                </div>
                {imageUrl && (
                    <>
                        <button type="button" className={styles.buttonRemove} onClick={onClickRemoveImage}>
                            ??????????????
                        </button>
                        <img className={styles.image} src={`https://dota2.press/${imageUrl}`} alt="Uploaded" />
                    </>
                )}
                <input type="text" className={styles.titleInput} value={title} onChange={handleTitleChange} placeholder="?????????????????? ????????????..." />
                <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
                {!isEditing && (
                    <>
                        <p>
                            ???????? ?????????????? -
                            {isArticle ? '????????????' : '??????????????'}
                        </p>
                        <button type="button" onClick={togglePostState} className={styles.submitButton}>???????????????? ??????</button>
                    </>
                )}
                <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={isLoading}
                    className={`${styles.submitButton} ${isLoading ? styles.submitButtonDisabled : ''}`}
                >
                    ???????????????????????? ????????????
                </button>
            </div>
            <Footer />
            <InfoPopup isLoading={isLoading} error={error} setError={setError} />
        </>
    );
};

export default withErrorBoundary(Admin, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.articleHeading}>
                <h1 className={styles.title}>
                    ??????-???? ?????????? ???? ??????
                </h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
