import { PostModel } from "@/models/PostModel"; 
import styles from '../styles/post.module.scss';

export interface PostProps {
    alternate:boolean,
    post:PostModel
}

export default function Post({alternate, post}:PostProps){

    return(
        <div className={styles.post +' '+ (alternate && styles.reverse)} style={{backgroundColor:post.color, color:post.textColor}}>
            <img className={styles.image} src={post.imgUrl} alt="No Image" />
            <div className={styles.content}>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.text}>{post.text}</div>
                <button className={styles.button} style={{color:post.textColor, borderColor:post.textColor}}>{post.btnText}</button>
            </div>
        </div>
    )
}