import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Headline from './components/Headline';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Food />
      <Category/>
    </div>
  );
}

export default App;
