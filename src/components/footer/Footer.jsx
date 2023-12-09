import "./footer.scss"
import logo from "/footer-logo.svg"
import twitter from "/icon-twitter.svg"
import youtube from "/icon-youtube.svg"
import pinterest from "/icon-pinterest.svg"
import instagram from "/icon-instagram.svg"
import facebook from "/icon-facebook.svg"

export default function Footer() {
    
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="left">
                   <img src={logo} alt="logo" className="logo" />
                   <div className="icons-container">
                        <img src={facebook} alt="icon" className="icon" />
                        <img src={youtube} alt="icon" className="icon" />
                        <img src={twitter} alt="icon" className="icon" />
                        <img src={pinterest} alt="icon" className="icon" />
                        <img src={instagram} alt="icon" className="icon" />
                   </div>
                </div>
                <div className="middle">
                    <div className="links">
                        <span className="footer-link">About Us</span>
                        <span className="footer-link">Contact</span>
                        <span className="footer-link">Blog</span>
                    </div>
                    <div className="links">
                        <span className="footer-link">Careers</span>
                        <span className="footer-link">Support</span>
                        <span className="footer-link">Privacy Policy</span>
                    </div>
                </div>
                <div className="right">
                    <div className="div">
                        <button className="footer-btn">Request invite</button>
                    </div>
                    <span className="copyright">©Easybank All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}