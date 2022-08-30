import React from 'react';
import styles from './Login.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import {Link} from "react-router-dom";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Footer from "../components/Footer/Footer";

const Login = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        alert(JSON.stringify(data))
        reset();
    }

    return (
        <>
            <Header/>
            <WhiteHeading/>
            <div className={styles.screen}>
                <h1 className={styles.title}>Login And Register</h1>
            </div>
            <TextSlide/>
            <div className={styles.login}>
                <div className={styles.loginAndRegister}>
                    <div className={styles.loginBtn}>Login</div>
                    <Link to='/register' className={styles.registerBtn}>Register</Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.formCont}>
                    <h2 className={styles.Heading}>Login to your account</h2>
                    <div className={styles.separatorDown}/>
                    <label className={styles.label}>Email adress</label>
                    <input
                        type="email" className={styles.input} placeholder={'Enter your email adress'}
                        {...register('email', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: 'Минимальная длина 2 символа'
                            }
                        })}
                    />
                    <div style={{height: '40px'}}>{errors?.email && <p className={styles.formError}>{String(errors?.email?.message) || 'Error'}</p>}</div>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password" className={styles.input} placeholder={'Enter your password'}
                        {...register('password', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: 'Минимальная длина комментария 2 символа'
                            }
                        })}
                    />
                    <div style={{height: '40px'}}>{errors?.password && <p className={styles.formError}>{String(errors?.password?.message) || 'Error'}</p>}</div>
                    <button type='submit' className={styles.button}>
                        Login now!
                    </button>
                </form>
                <Footer />
            </div>
        </>
    );
};

export default Login;