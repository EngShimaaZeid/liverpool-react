import React, { useState, useEffect } from "react";
import './css/Menu.css'; // Your CSS file

function Menu() {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Check if user has scrolled down from the top or is near the bottom
            const isNearBottom = (documentHeight - scrollTop - windowHeight) < 100;

            setIsSticky(scrollTop > 0 || isNearBottom);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div>
            <header className={isSticky ? 'sticky' : ''}>
                <div id="menu">
                    <div className="menuToggle" onClick={toggleMenu}>
                        ☰ {/* Icon for dropdown */}
                    </div>
                    <ul id="menuList" className={isOpen ? 'show' : ''}>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Fixtures & Teams</a></li>
                        <li><a href="#">Tickets & Booking</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Retail App</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Menu;
