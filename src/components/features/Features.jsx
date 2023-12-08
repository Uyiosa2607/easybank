import "./features.scss"
import online from "/icon-online.svg"
import budget from "/icon-budgeting.svg"
import onboard from "/icon-onboarding.svg"
import api from "/icon-api.svg"

export default function Features() {
    
    return (

        <div className="features">
            <div className="container">
                <h1 className="title">Why choose Easybank?</h1>
                <p className="desc">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>

                <div className="wrapper">
                    <div className="item-container">
                        <img className="item-img" src={online} alt="online icon" />
                        <h3 className="item-title">Online Banking</h3>
                        <p className="item-info">
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. Simple Budgeting See exactly where your money goes each month.
                        </p>
                    </div>
                    <div className="item-container">
                        <img className="item-img" src={budget} alt="budget icon" />
                        <h3 className="item-title">Simple Budgeting</h3>
                        <p className="item-info">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div className="item-container">
                        <img className="item-img" src={onboard} alt="onboard icon" />
                        <h3 className="item-title">Fast Onboarding</h3>
                        <p className="item-info">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className="item-container">
                        <img className="item-img" src={api} alt="api icon" />
                        <h3 className="item-title">Open API</h3>
                        <p className="item-info">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier</p>
                    </div>
                </div>
            </div>
        </div>

    )
}