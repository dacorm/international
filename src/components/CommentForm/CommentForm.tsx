import React, {Dispatch, SetStateAction} from 'react';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import styles from './CommentForm.module.css';
import drop from "../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";

type CommentType = {
    name: string
    text: string
}

type CommentFormProps = {
    comments: CommentType[]
    setComments: Dispatch<SetStateAction<CommentType[]>>
}

const CommentForm: React.FC<CommentFormProps> = ({ comments, setComments }) => {
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
        setComments([...comments, { name: data.firstName, text: data.commentText }]);
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='input' className={styles.label}>Ваше имя</label>
            <input
                className={styles.input} type='text' placeholder={'Введите имя'} id='input'
                {...register('firstName', {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 2,
                        message: 'Минимальная длина 2 символа'
                    }
                })}
            />
            <div style={{height: '40px'}}>{errors?.firstName && <p className={styles.formError}>{String(errors?.firstName?.message) || 'Error'}</p>}</div>
            <label htmlFor='textarea' className={styles.label}>Комментарий</label>
            <textarea
                className={styles.textarea} placeholder={'Введите текст комментария'} id='textarea'
                {...register('commentText', {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 2,
                        message: 'Минимальная длина комментария 2 символа'
                    }
                })}
            />
            <div style={{height: '40px'}}>{errors?.commentText && <p className={styles.formError}>{String(errors?.commentText?.message) || 'Error'}</p>}</div>
            <button className={styles.button} type='submit'>
                <p className={styles.buttonText}>Post Your Comment</p>
                <div className={styles.dropWrapper}>
                    <img src={drop} alt={drop} className={styles.drop}/>
                </div>
            </button>
        </form>
    );
};

export default CommentForm;