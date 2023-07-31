import React from 'react'
import './styles/Footer.css'
import logo from '../assets/images/logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='logo-footer'>
                <img src={logo} alt="" />
            </div>
            <div className='menu-footer'>
                <div className='list-footer'>
                    <h3>Product</h3>
                    <ul className='list'>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='list-footer'>
                    <h3>Company</h3>
                    <ul className='list'>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='list-footer'>
                    <h3>Connect</h3>
                    <ul className='list'>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer