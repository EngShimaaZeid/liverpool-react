import React, { useState, useEffect } from "react";
import '../css/Menu.css';
import LongCard from "../ui/LongCard";

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
        <div class="dropdown">
            <header className={`menu ${isSticky ? 'sticky' : ''}`}>
                <div id="menu">
                    <span className="menuToggle" onClick={toggleMenu}>
                        {/* Icon for dropdown */}
                        
                    </span>
                    <div >
        <div class=" nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
          </div>
          <div class="menu-items menuToggle" >
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div>
        </div>
      </div>
                    <span>
                        <img className="leftLogo" src="https://www.liverpoolfc.com/liverpoolfc_crest.webp" alt="Liverpool FC Crest" />
                    </span>

                    <ul id="menuList" className={isOpen ? 'show' : ''}>
                        <li><a href="#" class="dropbtn">News</a></li>
                        <li><a href="#" class="dropbtn">Fixtures & Teams</a></li>
                        <li><a href="#" class="dropbtn">Tickets & Booking</a></li>
                        <li><a href="#"class="dropbtn">Shop</a></li>
                        <li><a href="#" class="dropbtn">Retail App</a></li>
                        <li><a href="#" class="dropbtn">Video</a></li>
                        <li><a href="#" class="dropbtn">More</a></li>
                    </ul>
                    <div class="dropdown-content">
                        
                    <div class="footer3Part1">
        <ul>
          <li>Privacy policy</li>
          <li>Terms and conditions</li>
          <li>Anti-Slavery</li>
          <li>Cookies</li>
          <li>Help</li>
        </ul>
        <ul class="ul2">
          <li>Contact Us</li>
          <li>Accessibility</li>
          <li>Cookie Settings</li>
        </ul>
        <LongCard/>

      </div>
                    </div>
                    <span>
                        <img className="rightLogo"src="https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg" alt="Liverpool FC Logo" />
                    </span>
                </div>
            </header>
        </div>
    );
}

export default Menu;
