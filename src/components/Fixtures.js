import React from "react";
import Card3 from "../ui/Card3"

function App() {
  return (

    <div class="part2">
      <button class="blackHeadButton ">Fixtures</button>
      <ul>
        <li ><Card3  imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/kieran-morrison-u21s-promo-27092024.webp?itok=IpamwwHQ&width=1680"/></li>
        <li><Card3 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/team-news-v-wolves-alisson-27092024.webp?itok=x9Dlu7yR&width=1680"/></li>
        <li ><Card3 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/ea-fc-25-ratings-270924.webp?itok=Ed9EivKq&width=1680"/></li>
       
      </ul>
    </div>
);
}

export default App;
