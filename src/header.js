import logo from './images/logo.svg'

const Header = ()=> {
    return(
        <header>
            
            <a href='#' className='pc-link'><img src={logo} alt='logo'/></a>
            <ul className='pc-menu'>
                <li><a href='#' className='pc-link'>Features</a></li>
                <li><a href='#' className='pc-link'>Team</a></li>
                <li><a href='#' className='pc-link'>Sign In</a></li>
            </ul>

            {/* hamburger */}
            <input type="checkbox" id="navi-toggle" className="checkbox" />
            <label htmlFor="navi-toggle" className="button">
                <span className="icon">&nbsp;</span>
            </label>
            <div className="background">&nbsp;</div>

            {/* tablet and mobile view */}
            <nav className="nav">
                <ul className="list">
                    <li className="item"><a href="#" className="link">Features</a></li>
                    <li className="item"><a href="#" className="link">Team</a></li>
                    <li className="item"><a href="#" className="link">Sign In</a> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

