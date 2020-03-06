import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg" alt="Avatar" />
            { props.message }
            <div>
                <span>likes </span>
                { props.like_counts }
            </div>
        </div>
    );
}

export default Post;