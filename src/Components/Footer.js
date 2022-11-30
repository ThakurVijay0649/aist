import React from 'react'
import "../Styles/Footer.scss"
import logo from "../images/logo.svg"
import codepenLogo from "../images/codepen.svg"
import patreonLogo from "../images/patreon.svg"
import githubLogo from "../images/github.svg"
import linkedInLogo from "../images/linkedin.svg"
import fbLogo from "../images/fb.svg"
import telegramLogo from "../images/telegram.svg"
import kofiLogo from "../images/kofi.svg"
import googleLogo from "../images/google.svg"
import trustPilotLogo from "../images/trustpilot.svg"
import paymentImg from "../images/payments.png"
import { ImArrowUpRight2 } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="upper-footer">
                <img src={logo} alt="" />
                <div className="social">
                    <h2>FOLLOW US ON SOCIAL MEDIA</h2>
                    <div className="social-links">
                        <a href="https://www.facebook.com/"><img src={codepenLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={patreonLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={githubLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={linkedInLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={fbLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={telegramLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={kofiLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={googleLogo} alt="" /></a>
                        <a href="https://www.facebook.com/"><img src={trustPilotLogo} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <h2>ABOUT</h2>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Learner Stories</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Internship</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-col join-col">
                    <h2>JOIN US TODAY</h2>
                    <p>Would you like earn profits by joining our team? Join with us without losing time and start earning money today!
                    </p>
                    <a href="/" className='join-btn'>Join with Us <ImArrowUpRight2 /></a>
                    <img src={paymentImg} alt="" />
                </div>
                <div className="footer-col">
                    <h2>SUPPORT</h2>
                    <ul>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Disclaimer</a></li>
                        <li><a href="/">AdBlock</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Pricing & Plans</a></li>
                        <li><a href="/">Privacy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h2>SUBSCRIBE OUR NEWSLETTER</h2>
                    <p>You can opt out of our newsletters at any time
                    </p>
                    <form>
                        <input type="text" placeholder='Email...' />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="bottom-para">
                <p><Link to={"/"}>Akash Institue of Science & Technology </Link>| &copy;2022 All Rights Reserved. <Link to={"/"}>Privacy Policy</Link></p>
            </div>
        </footer>
    )
}

export default Footer
