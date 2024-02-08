import { PostModel } from "@/models/PostModel";
import styles from "@/styles/Home.module.scss";

export interface PostProps {
    alternate:boolean,
    post:PostModel
}

export default function Post({alternate, post}:PostProps){


    

    return(
        <div className={`post ${alternate && `post-reverse`}`} style={{backgroundColor:post.color}}>
            <img className="post-image" src={post.imgUrl} alt="No Image" />
            <div className="post-content">
                <div className="post-title">{post.title}</div>
                <div className="post-text">{post.text}</div>
                <button className="post-button">{post.btnText}</button>
            </div>
        </div>
    )
}