import React from "react";
import Card1 from "../ui/Card1"

function App() {
  return (

    <div class="part1 part4">
      <button class="blackHeadButton title">Club and Community</button>
    <button class="card5Button">More 
      <a class="moreArrow"> &gt;</a>
      </button>
      <ul>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/forever-reds-250924.webp?itok=oo9QspmL&width=1680"/></li>
        <li><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/lfc-new-york-panel-270924.webp?itok=S8NBHBLI&width=1680"/></li>
        <li ><Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/run-to-anfield-round-up-24092024-cover.webp?itok=VffWFFHx&width=1680"/></li>
        

      </ul>
    </div>
);
}

export default App;
