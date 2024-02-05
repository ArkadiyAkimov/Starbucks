import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google"; 
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="content-view">
      <Post/>
      <Post alternate={true}/>
      <Post/>
      <Post alternate={true}/>
      <Post/>
      <Post alternate={true}/>
    </div>
  );
}
