import React, { useEffect, useRef } from "react";
//import Card3 from "./Card3";

function Ads() {
  const imgRef = useRef(null); // Create a ref to hold the image element

  useEffect(() => {
    const myImages = [
      "https://s0.2mdn.net/dfp/368211/5123769003/1727188059247/media/66a0af9f1d93cc165ccb6c8cdb214cb3.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtrYW5QTtvpW8AcX1jm464z33tiuaM8No_A&s"
    ];

    // Function to change the image
    const changeImg = () => {
      const randomNum = Math.floor(Math.random() * myImages.length);
      if (imgRef.current) {
        imgRef.current.src = myImages[randomNum];
      }
    };

    // Set the initial image
    changeImg(); // Call it once to set the first image

    const intervalId = setInterval(changeImg, 1000); // Change image every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <div >
      <img ref={imgRef} class="ad3" src="" alt="footballImage" />
    </div>
  );
}

export default Ads;
