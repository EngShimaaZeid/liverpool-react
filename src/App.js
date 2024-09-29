import React from 'react';
import HeadLines from './components/HeadLines';
import LfcRetail from './components/LfcRetail';
import LfcWomen from './components/LfcWomen';
import ClubAndCommunity from './components/ClubAndCommunity';
import YellowArticle from './components/YellowArticle';
import FloatCombine from "./components/FloatCombine";
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 >Liverpool FC Homepage</h1>
      <HeadLines/>
      <LfcRetail/>
      <LfcWomen/>        
      <FloatCombine/>

      <YellowArticle/>
      <ClubAndCommunity/>
      <Footer/>
    </div>
  );
};

export default App;