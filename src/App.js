import React from 'react';
import FloatingBox from './FloatingBox';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import YellowArticle from './YellowArticle';
import FloatCombine from "./FloatCombine";
import FloatPart from "./FloatPart";
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 >Liverpool FC Homepage</h1>
      <Part1/>
      <Part2/>
      <Part3/>        
      <FloatCombine/>

      <YellowArticle/>
      <Part4/>
      <Footer/>
    </div>
  );
};

export default App;