import React from 'react';
import HeadLines from './components/HeadLines';
import LfcRetail from './components/LfcRetail';
import Fixtures from './components/Fixtures';
import LfcWomen from './components/LfcWomen';
import ClubAndCommunity from './components/ClubAndCommunity';
import YellowArticle from './components/YellowArticle';
import TopScores from './components/TopScores';

import Ads from "./ui/Ads.js";
import Ads2 from "./components/Ads2.js"; 
import './App.css';


import FloatCombine from "./components/FloatCombine";
import MainFooter from './layouts.js/Footer/MainFooter';
import Menu from './layouts.js/Menu.js';


const App = () => {
  return (
    <div>
      <div class="space1">
        <Ads/>
      </div>   
      <HeadLines/>
      <Fixtures/>
      
      <LfcRetail/>
      <div class="space2">
        <Ads/>
      </div>
      <LfcWomen/>
      <Ads2/>        
      <FloatCombine/>

      <YellowArticle/>
      <TopScores/>
      <ClubAndCommunity/>
      <MainFooter/>
    </div>
  );
};

export default App;