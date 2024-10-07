import React, { useEffect, useRef } from "react";

function SquareAds() {
  const imgRef = useRef(null); // Create a ref to hold the image element

  useEffect(() => {
    const myImages = [
      "https://tpc.googlesyndication.com/simgad/13279867605339036140",
      "https://tpc.googlesyndication.com/simgad/18104630861067988173"
    ];

    // Functiona to change the image
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
    <span>
      <img ref={imgRef}   class="squareAds" src="" alt="Image Here" />
    </span>
  );
}

export default SquareAds;
