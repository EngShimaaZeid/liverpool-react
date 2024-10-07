import React, { useEffect, useRef } from "react";
import Card3 from "./Card3";

function Ads() {
  const imgRef = useRef(null); // Create a ref to hold the image element

  useEffect(() => {
    const myImages = [
      "https://tpc.googlesyndication.com/simgad/16833327676687632350",
      "https://tpc.googlesyndication.com/simgad/9334605402723005980"
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
      <img ref={imgRef} class="ad3" src="" alt="Image Here" />
    </div>
  );
}

export default Ads;
