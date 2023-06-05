import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="top-nav">
                <input id="menu-toggle" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li className='nav--text'>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className='nav--text'>
                        <Link to={'./nonInteractive/projects'} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav--text'>
                        <Link to={'/contact'} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav--text'>
                        <Link to={'/interactive'} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsOpen(false)}>
                            Interactive
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Header;