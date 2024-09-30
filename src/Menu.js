import React, { useState, useEffect } from "react";
import './App.css';  // Assuming you have a CSS file

function Menu() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Change this value as per your need
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <section id="menu" className={isSticky ? 'sticky' : ''}>
        <div>
          <ul>
            <a href="#">News</a>
            <a href="#">Fixtures & Teams</a>
            <a href="#">Tickets & Booking</a>
            <a href="#">Shop</a>
            <a href="#">Retail App</a>
            <a href="#">Video</a>
            <a href="#">More</a>
            

          </ul>
          

          </div>
        </section>

      </header>

      
    </div>
  );
}

export default Menu;
