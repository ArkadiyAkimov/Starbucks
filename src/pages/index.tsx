import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google"; 
import { useEffect, useState } from "react";
import { PostModel } from "@/models/PostModel";
import Post from "@/components/Post";
import styles from '../styles/post.module.scss';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const [posts,setPosts] = useState<PostModel[]>([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/posts.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setPosts(data.posts)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

  return (
    <div className={styles.page}>
      {
        posts.map((post, index) => <Post key={post.title} alternate={index % 2 !== 0} post={post}></Post>)
      }
    </div>
  );
}
