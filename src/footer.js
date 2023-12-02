import footerLogo from './images/logo.svg';
import phoneIcon from './images/icon-phone.svg';
import mailIcon from './images/icon-email.svg';
import twitterIcon from './images/twitter.png';
import facebookIcon from './images/facebook.png';
import instagramIcon from './images/instagram.png';

const Footer = ()=> {
    return(
        <footer>
            <div className='footer-logo-div'><a href='#'><img className='footer-logo' src={footerLogo} alt="footer-logo"/></a></div>
            <div className='footer-sub'>
                <div>
                    <ul>
                        <li>
                            <img src={phoneIcon} alt='phone-icon' />
                            <span className='contact'>Phone: +1-543-123-4567</span>
                        </li>
                        <li>
                            <img src={mailIcon} alt='mail-icon' />
                            <span className='contact'>example@fylo.com</span>
                        </li>
                    </ul>
                    
                </div>
                <div>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Jobs</a></li>
                        <li><a href='#'>Press</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Terms</a></li>
                        <li><a href='#'>Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <a href='#'><img className='footer-icon' src={facebookIcon} alt='facebook-icon'/></a>
                    <a href='#'><img className='footer-icon' src={twitterIcon} alt='twitter-icon'/></a>
                    <a href='#'><img className='footer-icon' src={instagramIcon} alt='insta-icon'/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;