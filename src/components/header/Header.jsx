import "./header.scss"
import logo from "/logo.svg"
import hamburger from "/icon-hamburger.svg"

export default function Header() {

    return (
        <header>
            <div className="wrapper">
                <div className="left">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="middle">
                    <a className="header-link" href="#">Home</a>
                    <a className="header-link" href="#">About</a>
                    <a className="header-link" href="#">Contact</a>
                    <a className="header-link" href="#">Blog</a>
                    <a className="header-link" href="#">Careers</a>
                </div>
                <div className="right">
                    <button className="header-btn">Request Invite</button>
                    <img src={hamburger} alt="hamburger" className="hamburger" />
                </div>
            </div>
        </header>
    )
}