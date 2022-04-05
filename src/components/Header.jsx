import React, { useEffect, useRef } from 'react'

import { Link, useLocation } from 'react-router-dom'

import Logo from './Logo'

const mainNav = [
    {
        display_name: 'Trang chủ',
        path: '/',
    },
    {
        display_name: 'keyboard',
        path: '/keyboard',
    },
    {
        display_name: 'keycap',
        path: '/keycap',
    },
    {
        display_name: 'switch',
        path: '/switch',
    },
    {
        display_name: 'Liên hệ',
        path: '/contact',
    },
]

const Header = () => {
    const headerRef = useRef(null)
    const navbarRef = useRef(null)

    const { pathname } = useLocation()

    const activeMainNav = mainNav.find((item) => item.path === pathname)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop || document.documentElement.scrollTop) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })

        return () => window.removeEventListener('scroll')
    }, [])

    const navbarToggle = () => navbarRef.current.classList.toggle('active')

    return (
        <div ref={headerRef} className="header">
            <div className="container">
                <div
                    className="header__menu__mobile-toggle"
                    onClick={navbarToggle}
                >
                    <i className="bx bx-menu"></i>
                </div>
                <div className="header__logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div ref={navbarRef} className="header__navbar">
                    <div
                        className="header__navbar__close"
                        onClick={navbarToggle}
                    >
                        <i className="bx bx-x"></i>
                    </div>
                    {mainNav.map((item, index) => (
                        <div
                            key={index}
                            className={`header__navbar__item ${
                                activeMainNav?.path === item.path
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={navbarToggle}
                        >
                            <Link to={item.path}>
                                <span>{item.display_name}</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div
                    className="header__navbar__layer"
                    onClick={navbarToggle}
                ></div>
                <div className="header__actions">
                    <div className="header__actions__item">
                        <i className="bx bx-search"></i>
                    </div>
                    <div className="header__actions__item">
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="header__actions__item">
                        <i className="bx bx-cart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
