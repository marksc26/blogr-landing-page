import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import './styles/Header.css'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'

const Header = () => {

    const [menuMobile, setMenuMobile] = useState(false)
    const [menu, setMenu] = useState(false)
    const [menu2, setMenu2] = useState(false)
    const [menu3, setMenu3] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
        setMenu2(false)
        setMenu3(false)

    }

    const handleMenu2 = () => {
        setMenu2(!menu2)
        setMenu(false)
        setMenu3(false)


    }

    const handleMenu3 = () => {
        setMenu3(!menu3)
        setMenu(false)
        setMenu2(false)

    }

    const mainMenu = () => {
        setMenuMobile(!menuMobile)
    }



    return (
        <header className='header'>
            <div className='logo-menu'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="" />
                </div>

                <div className={!menuMobile ? "menu" : "show-menu"}>
                    <p onClick={handleMenu}>Product <span className='arrow'>{!menu ? <i className='bx bx-chevron-down'></i> : <i className='bx bx-chevron-up'></i>}</span></p>
                    {
                        !menu ? "" : (
                            <ul className='list-header'>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                            </ul>
                        )
                    }
                    <p onClick={handleMenu2}>Company <span className='arrow' >{!menu2 ? <i className='bx bx-chevron-down'></i> : <i className='bx bx-chevron-up'></i>}</span></p>
                    {
                        !menu2 ? "" : (
                            <ul className='list-header2'>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        )
                    }
                    <p onClick={handleMenu3}>Connect <span className='arrow'>{!menu3 ? <i className='bx bx-chevron-down'></i> : <i className='bx bx-chevron-up'></i>}</span></p>
                    {
                        !menu3 ? "" : (
                            <ul className='list-header3'>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li>LinkedIn</li>
                            </ul>
                        )
                    }
                    <hr />
                    <div className='login2'>

                        <button >Login</button>
                        <button >Sign Up</button>
                    </div>

                </div>
            </div>

            <div className='buttonsHeader'>
                <div className='login'>
                    <button className='buttonh'>Login</button>
                    <button className='buttonh'>Sign Up</button>
                </div>

                <div className='icons-menu'>
                    {
                        !menuMobile ? <img onClick={mainMenu} src={hamburgerIcon} alt="" className='hamburger' /> : <img onClick={() => setMenuMobile(!menuMobile)} src={closeIcon} className='close' />
                    }

                </div>
            </div>
        </header>
    )
}

export default Header