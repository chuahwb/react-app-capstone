import React from 'react'
import logo from '../assets/Logo.svg'
import '../App.css'
import CustomLink from './CustomLink'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useRef, useEffect } from 'react'

const Navbar = () => {
    const handleClick = (anchor) => () => {
        const sectionId = `${anchor}-section`;
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };
    };

    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])



    return (
        <>
            <header ref={headerRef}>
                <nav className='nav'>

                    <img src={logo} alt='nav-logo' className='nav-logo' />

                    <ul>
                        <CustomLink to="/" className='nav-item'>Home</CustomLink>
                        <li><a href='#about' className='nav-item' onClick={handleClick("about")}>About</a></li>
                        <li><a href='#menu' className='nav-item' onClick={handleClick("menu")}>Menu</a></li>
                        <CustomLink to="/reservations" className='nav-item'>Reservations</CustomLink>
                        <CustomLink to="/order-online" className='nav-item'>Order Online</CustomLink>
                        <li><a href='#login' className='nav-item'>Login</a></li>
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </>
    )
}


export default Navbar