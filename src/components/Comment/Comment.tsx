import React, { memo } from 'react';
import cn from 'classnames';
import styles from './Comment.module.css';

type CommentProps = {
    name: string
    title: string
    comment: string
    color?: string
}

const Comment: React.FC<CommentProps> = memo(({
    name, title, comment, color = 'yellow',
}: CommentProps) => (
    <div className={styles.comment}>
        <div className={styles.avatar} />
        <div className={styles.texts}>
            <h3 className={styles.name}>{name}</h3>
            <span className={cn(styles.title, {
                [styles.titleYellow]: color === 'yellow',
                [styles.titleBlue]: color === 'blue',
                [styles.titleGreen]: color === 'green',
            })}
            >
                {title}
            </span>
            <p className={styles.commentaryText}>{comment}</p>
        </div>
    </div>
));

export default Comment;
