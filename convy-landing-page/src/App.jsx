import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import Categories from './components/Categories';
import Stats from './components/Stats';
import HowWeServeYou from './components/HowWeServeYou';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <AppPreview />
      <Categories />
      <Stats />
      <HowWeServeYou />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;