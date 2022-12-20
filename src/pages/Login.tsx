import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { withErrorBoundary } from 'react-error-boundary';
import styles from './Login.module.css';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import TextSlide from '../components/TextSlide/TextSlide';
import Footer from '../components/Footer/Footer';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';
import { useAppDispatch, useAppSelector } from '../assets/hooks';
import Layout from '../components/Layout/Layout';

const Login = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(selectIsAuth);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true);
            const data = await dispatch(fetchAuth({
                email: values.email,
                password: values.password,
            }));

            if (!data.payload) {
                setIsLoading(false);
                return alert('Не удалось авторизоваться');
            }

            // @ts-ignore
            if ('token' in data.payload) {
                // @ts-ignore
                window.localStorage.setItem('token', data.payload.token);
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    return (
        <Layout seoDescription="Войти в аккаунт" seoTitle="Вход в аккаунт" title="Вход в аккаунт">
            <div className={styles.login}>
                <div className={styles.loginAndRegister}>
                    <div className={styles.loginBtn}>Войти</div>
                    <Link to="/register" className={styles.registerBtn}>Зарегистрироваться</Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.formCont}>
                    <h2 className={styles.Heading}>Вход</h2>
                    <div className={styles.separatorDown} />
                    <label className={styles.label}>E-mail адрес</label>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Enter your email adress"
                        {...register('email', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 2,
                                message: 'Минимальная длина 2 символа',
                            },
                        })}
                    />
                    <div
                        style={{ height: '40px' }}
                    >
                        {errors?.email && <p className={styles.formError}>{String(errors?.email?.message) || 'Error'}</p>}
                    </div>
                    <label className={styles.label}>Пароль</label>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Enter your password"
                        {...register('password', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 2,
                                message: 'Минимальная длина комментария 2 символа',
                            },
                        })}
                    />
                    <div
                        style={{ height: '40px' }}
                    >
                        {errors?.password && <p className={styles.formError}>{String(errors?.password?.message) || 'Error'}</p>}
                    </div>
                    <button type="submit" className={styles.button} disabled={isLoading}>
                        {isLoading ? 'Входим в систему...' : 'Войти'}
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Login, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.screen}>
                <h1 className={styles.title}>Что-то пошло не так</h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
