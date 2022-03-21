import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-logo'>
                        <h2 className='footer-company-logo'> AlphaStack</h2>
                        <p className='footer-company-subtitle'>Innovation & Transparency</p>
                        <p className='footer-countries'>india | singapore</p>
                    </div>
                    <div className='footer-links-title'>
                        <div className='footer-links'>
                            <h4 className='footer-link-title' >Company</h4>
                            <a className='footer-link' href="/">About</a>
                            <a className='footer-link' href="/">Clients</a>
                            <a className='footer-link' href="/">Team</a>
                            <a className='footer-link' href="/">Careers</a>
                            <a className='footer-link' href="/">Partners</a>
                            <a className='footer-link' href="/">NewsRoom</a>
                        </div>
                    </div>
                    <div className='footer-links-title'>
                        <div className='footer-links'>
                            <h4 className='footer-link-title' >Services</h4>
                            <a className='footer-link' href="/">Market Making</a>
                            <a className='footer-link' href="/">Crypto Liquidity</a>
                            <a className='footer-link' href="/">OTC Markets</a>
                            <a className='footer-link' href="/">Algorithmic Trading</a>
                            <a className='footer-link' href="/">Risk Mangament</a>
                            <a className='footer-link' href="/">Miner Hedging</a>
                        </div>
                    </div>
                    <div className='footer-links-title'>
                        <div className='footer-links'>
                            <h4 className='footer-link-title' >Support</h4>
                            <a className='footer-link' href="/">Contact us</a>
                            <a className='footer-link' href="/">Help Center</a>
                            <a className='footer-link' href="/">Terms of service</a>
                            <a className='footer-link' href="/">Privacy policy</a>
                            <a className='footer-link' href="/">Legal agreement</a>
                            <a className='footer-link' href="/">Risk Disclosure</a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className='copyright'>© 2022 Copyright AlphaStack Technologies</p>
                    <div className='footer-icons'>
                        <i className='fa-brands fa-twitter-square social-icons'></i>
                        <i className='fa-brands fa-linkedin social-icons'></i>
                        <i className='fa-brands fa-telegram social-icons'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer