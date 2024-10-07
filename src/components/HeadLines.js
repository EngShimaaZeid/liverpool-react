import React from "react";
import Card1 from "../ui/Card1"
import LongCard from "../ui/LongCard"

function App() {
  return (

    <div class="part1">
      <button class="redHeadButton ">Headlines</button>
      {/*<button class="card5Button">All News 
      <a class="moreArrow"> &gt;</a>
      </button>*/}
      <ul>
        <li ><Card1  imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/kieran-morrison-u21s-promo-27092024.webp?itok=IpamwwHQ&width=1680"/></li>
        <li><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/team-news-v-wolves-alisson-27092024.webp?itok=x9Dlu7yR&width=1680"/></li>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/ea-fc-25-ratings-270924.webp?itok=Ed9EivKq&width=1680"/></li>
        <li> <LongCard imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/ea-fc-25-ratings-270924.webp?itok=Ed9EivKq&width=1680"/></li>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-08/arne-slot-press-conference-liverpool-fc-_1.webp?itok=QK5uBlAZ&width=1680"/></li>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/arne-slot-liverpool-fc-260924.webp?itok=VFAqFA_y&width=1680"/></li>

      </ul>
    </div>
);
}

export default App;
