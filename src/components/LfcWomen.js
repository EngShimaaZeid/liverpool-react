import React from "react";
import Card1 from "../ui/Card1"

function App() {
  return (

    <div class="part1">
      <button class="redHeadButton title">LFC Women</button>

      <ul>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/liverpool-fc-women-fans-27092024.webp?itok=_qp953S3&width=1680"/></li>
        <li><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/matt-beard-thumbnail-v2-270924.webp?itok=D9sn4C9K&width=1680"/></li>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/lfc-women-training-27092024-cover.webp?itok=3i_CemFL&width=1680"/></li>
        

      </ul>
    </div>
);
}

export default App;
