import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../assets/hooks";
import {selectIsAuth, selectName} from "../redux/slices/auth";
import {useNavigate} from "react-router-dom";
import SimpleMDE from 'react-simplemde-editor';
import styles from './Admin.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import Footer from "../components/Footer/Footer";
import 'easymde/dist/easymde.min.css';
import axios from "../axios";

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
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const inputFileRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const isUserAdmin = isAuth && (user.fullName === 'admin')

    const onChange = useCallback((value: React.SetStateAction<string>) => {
        setText(value);
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
            alert('Не удалось загрузить файл')
        }
    };

    const onSubmit = async () => {
        try {
            setIsLoading(true);

            const fields = {
                title,
                tags: '',
                imageUrl,
                text
            }
            const { data } = await axios.post('/posts', fields);
        } catch (err) {
            console.warn(err);
            alert('Не удалось создать статью');
        }
    };

    const onClickRemoveImage = () => {
        setImageUrl('');
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if (!isUserAdmin) {
            navigate('/')
        }
    }, [isUserAdmin])

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
            <Header/>
            <WhiteHeading/>
            <div className={styles.editorContainer}>
                <div className={styles.inputWrapper}>
                    <input type="file" ref={inputFileRef} name='input__file' id='input__file' onChange={handleChangeFile} className={styles.inputFile}/>
                    <label htmlFor="input__file" className={styles.inputFileLabel}>Выберите превью</label>
                </div>
                {imageUrl && (
                    <>
                        <button className={styles.buttonRemove} onClick={onClickRemoveImage}>
                            Удалить
                        </button>
                        <img className={styles.image} src={`https://mern-blog-dacorm.herokuapp.com/${imageUrl}`} alt="Uploaded" />
                    </>
                )}
                <input type="text" className={styles.titleInput} value={title} onChange={handleTitleChange} placeholder='Заголовок статьи...' />
                <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
                <button onClick={onSubmit} className={styles.submitButton}>
                    Опубликовать статью
                </button>
            </div>


            <Footer/>
        </>
    );
};

export default Admin;