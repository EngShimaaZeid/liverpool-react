import React from "react";
import "../../../css/Footer3.css"


const socialMedia = [
    { id: 1, src: 'http://www.w3.org/2000/svg', alt: 'Carlsberg' },
    { id: 2, src: 'https://uk.linkedin.com/company/liverpool-football-club', alt: 'EA Sports' },
    { id: 3, src: 'https://www.tiktok.com/@liverpoolfc', alt: 'Extreme Networks' },
    { id: 4, src: 'http://instagram.com/liverpoolfc/', alt: 'Google Pixel' },
    { id: 4, src: 'https://twitter.com/lfc', alt: 'Google Pixel' },
    { id: 4, src: 'http://www.youtube.com/liverpoolfc?sub_confirmation=1', alt: 'Google Pixel' },
    { id: 4, src: 'https://onefootball.com/en/team/liverpool-18/official', alt: 'Google Pixel' }
    
  ];
function Footer3() {
  return (
    <div class="footer3">
    <div class="footer3part0">
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
      </div>
      <div class="footer3Part0Right">
      <div class="socialMediaIcons">
        <a href="https://www.facebook.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 12.1c0-5.6-4.4-10-10-10S2 6.5 2 12.1c0 5.2 4 9.5 9.1 9.9v-7.1H7.1V12h4V9.9c0-4 2.4-6.2 6-6.2 1.7 0 3.6.3 3.6.3v4h-2c-1.6 0-2.1.9-2.1 1.8V12h4.1l-.7 4.9H14.1V22c5.1-.4 9.1-4.7 9.1-9.9z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 0 12H8a6 6 0 1 1 0-12h8zM2 9h4v12H2z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 0v12h4.2c1.3 0 2.4.6 3.2 1.5 1.5 1.5 1.5 3.5 0 5-1 1-2.5 1.5-4 1.5H10V0h2z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"/>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.68a4.29 4.29 0 001.88-2.37 8.61 8.61 0 01-2.72 1.04A4.29 4.29 0 0015.48 4c-2.37 0-4.29 1.93-4.29 4.31 0 .34.04.67.1 1a12.21 12.21 0 01-8.85-4.5A4.25 4.25 0 001.2 8.9a4.26 4.26 0 01-1.94-.54v.06c0 2.1 1.48 3.84 3.45 4.25-.36.1-.73.15-1.12.15-.28 0-.56-.03-.83-.07.56 1.7 2.16 2.93 4.06 2.97A8.61 8.61 0 010 20.29a12.18 12.18 0 006.63 1.95c7.96 0 12.31-6.59 12.31-12.31 0-.19 0-.38-.01-.57A8.78 8.78 0 0022.46 6z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22.54 6.42A2.99 2.99 0 0 0 20.15 5C18.48 5 12 5 12 5s-6.48 0-8.15.42A2.99 2.99 0 0 0 1.46 6.42C1 7.67 1 12 1 12s0 4.33.46 5.58A2.99 2.99 0 0 0 3.85 19c1.67.42 8.15.42 8.15.42s6.48 0 8.15-.42A2.99 2.99 0 0 0 22.54 18.58C23 17.33 23 12 23 12s0-4.33-.46-5.58zM9 15V9l6 3-6 3z"/>
          </svg>
        </a>
      </div>
      <div class="app">
      Download the official LFC app
  <a href="https://apps.apple.com/us/app/app-name/idXXXXXXXX">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store"  width=" 150px" height="70px" top="10px" />
  </a>
  
  <a href="https://play.google.com/store/apps/details?id=com.example.app">
    <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width=" 180px" height="70px" top="-45px"/>
  </a>

      </div>

      </div>
      
    </div>
    <p class="copyRights">
      © Copyright 2024 The Liverpool Football Club and Athletic Grounds Limited. All rights reserved. Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.
    </p>
  </div>
  
    
);
}

export default Footer3;
