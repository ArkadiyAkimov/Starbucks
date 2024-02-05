import styles from "@/styles/Home.module.scss";

export default function Post({alternate}:any){

    const imgUrl = "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88469.jpg"
    const title = "Next-level luxurious"
    const text = "Velvety smooth, deliciously lush. Try the new Oleato Golden Foam™ Iced Shaken Espresso with Toffeenut and the Oleato™ Caffè Latte with Oatmilk."
    const color = "#cfd84d"
    const btnText = "Order now"

    return(
        <div className={`post ${alternate && `post-reverse`}`} style={{backgroundColor:color}}>
            <img className="post-image" src={imgUrl} alt="No Image" />
            <div className="post-content">
                <div className="post-title">{title}</div>
                <div className="post-text">{text}</div>
                <button className="post-button">{btnText}</button>
            </div>
        </div>
    )
}