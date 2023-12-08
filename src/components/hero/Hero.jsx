import "./hero.scss"
import mockup from "/image-mockups.png"

export default function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="left-hero">
                    <h3 className="hero-title">Next generation digital banking</h3>
                    <p className="hero-desc">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className="hero-btn">Request Invite</button>
                </div>
                <div className="right-hero">
                    <img src={mockup} alt="hero-img" className="hero-img" />
                </div>
            </div>
        </div>
    )
}