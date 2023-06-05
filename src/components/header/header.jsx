import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <section className="top-nav">
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li className='nav--text'>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Home
                        </Link>
                    </li>
                    <li className='nav--text'>
                        <Link to={'./nonInteractive/projects'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav--text'>
                        <Link to={'/contact'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav--text'>
                        <Link to={'/interactive'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Interactive
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Header;