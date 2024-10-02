import React, { useState, useEffect } from "react";
import './css/Menu.css';

function Menu() {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > lastScrollY) {
                // Scrolling down
                setIsSticky(true);
              } else if (scrollTop < lastScrollY) {
                // Scrolling up
                setIsSticky(true);
              }
            // Update lastScrollY to the current scroll position
            setLastScrollY(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(prev => !prev); 
    };

    return (
        <div>
            <header className={`menu ${isSticky ? 'sticky' : ''}`}>
                <div id="menu">
                    <span className="menuToggle" onClick={toggleMenu}>
                        ☰ {/* Icon for dropdown */}
                    </span>
                    
                    <span>
                        <img className="leftLogo" src="https://www.liverpoolfc.com/liverpoolfc_crest.webp" alt="Liverpool FC Crest" />
                    </span>

                    <ul id="menuList" className={isOpen ? 'show' : ''}>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Fixtures & Teams</a></li>
                        <li><a href="#">Tickets & Booking</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Retail App</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">More</a></li>
                    </ul>

                    <span>
                        <img className="rightLogo"src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg" alt="Liverpool FC Logo" />
                    </span>
                </div>
            </header>
        </div>
    );
}

export default Menu;
