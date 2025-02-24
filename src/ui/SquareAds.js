import React, { useEffect, useRef } from "react";

function SquareAds() {
  const imgRef = useRef(null); // Create a ref to hold the image element

  useEffect(() => {
    const myImages = [
      "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/ea-fc-25-ratings-270924.webp?itok=Ed9EivKq&width=1680",
      "https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/liverpool-fc-women-fans-27092024.webp?itok=_qp953S3&width=1680"
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
      <img ref={imgRef}   class="squareAds" src="" alt="FootballImage" />
    </span>
  );
}

export default SquareAds;
