import "./article.scss"
import currency from "/image-currency.jpg"
import confetti from "/image-confetti.jpg"
import plane from "/image-plane.jpg"
import resturant from "/image-restaurant.jpg"

export default function Article(){

    return (

        <div className="article">
            <h2 className="title">latest Articles</h2>
            <div className="wrapper">
                <div className="article-card">
                    <img src={currency} alt="article-img" className="article-img" />
                    <div className="content">
                        <p className="author">By Claire Robinson</p>
                        <h3 className="title">Receive money in any currency with no fees</h3>
                        <p className="desc">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>
                <div className="article-card">
                    <img src={resturant} alt="article-img" className="article-img" />
                    <div className="content">
                        <p className="author">By Wilson Hutton</p>
                        <h3 className="title">Treat yourself without worrying about money</h3>
                        <p className="desc">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div>
                </div>
                <div className="article-card">
                    <img src={plane} alt="article-img" className="article-img" />
                    <div className="content">
                        <p className="author">By Wilson Hutton</p>
                        <h3 className="title">Take your Easybank card wherever you go We want you to enjoy your travels.</h3>
                        <p className="desc">This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div>
                </div>
                <div className="article-card">
                    <img src={confetti} alt="article-img" className="article-img" />
                    <div className="content">
                        <p className="author">By Claire Robinson</p>
                        <h3 className="title">Our invite-only Beta accounts are now live!</h3>
                        <p className="desc">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}