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

const GuidesAdmin = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const inputFileRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();

    const isHeroIdExist = Boolean(id);

    const isUserAdmin = isAuth && (user.fullName === 'admin');

    const onChange = useCallback((value: React.SetStateAction<string>) => {
        setText(value);
    }, []);

    const fetchArticle = async () => {
        const { data } = await axios.get(`/guides/${id}`);
        setText(data.text);
        setTitle(data.title);
    };

    useEffect(() => {
        if (id) {
            fetchArticle();
        }
    }, []);

    const onSubmit = async () => {
        try {
            setIsLoading(true);

            const fields = {
                title,
                text,
                heroId: id,
            };
            const { data } = await axios.post('/guides', fields);
            setTitle('');
            setText('');
            setIsLoading(false);
        } catch (err) {
            console.warn(err);
            setError(true);
        }
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
            placeholder: 'Введите текст...',
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
                <input type="text" className={styles.titleInput} value={title} onChange={handleTitleChange} placeholder="Заголовок статьи..." />
                <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
                <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={isLoading}
                    className={`${styles.submitButton} ${isLoading ? styles.submitButtonDisabled : ''}`}
                >
                    Опубликовать статью
                </button>
            </div>
            <Footer />
            <InfoPopup isLoading={isLoading} error={error} setError={setError} />
        </>
    );
};

export default withErrorBoundary(GuidesAdmin, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.articleHeading}>
                <h1 className={styles.title}>
                    Что-то пошло не так
                </h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
