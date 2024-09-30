import React from "react";
import Card2 from "../ui/Card2"

function App() {
  return (

    <div class="part2">
        <button class="blackHeadButton title">LFC Retail</button>

     <ul>
        <li><Card2 imgSrc="https://store.liverpoolfc.com/media/catalog/product/cache/324c73bbe7651ff6517cbfbb775eee20/a/u/aurora_fz8774-011_phsfm001-2000.jpg?width=1680"/></li>
        <li><Card2 imgSrc="https://store.liverpoolfc.com/media/catalog/product/cache/324c73bbe7651ff6517cbfbb775eee20/a/u/aurora_fq2502-078_phsfm001-2000.jpg?width=1680"/></li>
        <li><Card2 imgSrc="https://store.liverpoolfc.com/media/catalog/product/cache/324c73bbe7651ff6517cbfbb775eee20/a/u/aurora_fq2318-078_phsfm001-2000.jpg?width=1680"/></li>
        <li><Card2 imgSrc="https://store.liverpoolfc.com/media/catalog/product/cache/324c73bbe7651ff6517cbfbb775eee20/a/u/aurora_fq2659-078_phsfm001-2000.jpg?width=1680"/></li>
        <li><Card2 imgSrc="https://store.liverpoolfc.com/media/catalog/product/cache/324c73bbe7651ff6517cbfbb775eee20/a/u/aurora_fq2631-078_phsfm001-2000.jpg?width=1680"/></li>

     </ul>
     <center>
     <button class="button2">
     Visit the LFC Store now
     </button>
     </center>

    </div>
);
}

export default App;
