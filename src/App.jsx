import React, { useState } from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import AviatorCard from './components/AviatorCard';
import AppFooter from './components/Footer';
import Aviator from './src/aviator.png';
import Di from './src/Di.png';
import Hi from './src/Hi.png';
import Ho from './src/Ho.png';
import Ke from './src/Ke.png';
import Mr from './src/Mr.png';
import Pi from './src/Pl.png';

const { Content } = Layout;

const AviatorApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backgroundImages = [Aviator, Di, Hi, Ho, Ke, Mr, Pi];
  const titles = ["Aviator", "Dice", "Hilo", "Hotline", "Keno", "Mini Roulette", "Plinko"];
  const links = [
    "https://demo.spribe.io/launch/aviator?currency=USD&lang=EN&return_url=https://spribe.co/games",
    "https://demo.spribe.io/launch/dice?currency=USD&lang=EN&return_url=https://spribe.co/games",
    "https://demo.spribe.io/launch/hi-lo?currency=USD&lang=EN&return_url=https://spribe.co/games",
    "https://demo.spribe.io/launch/hotline?currency=USD&lang=EN&return_url=https://spribe.co/games",
    "https://demo.spribe.io/launch/keno?currency=USD&lang=EN&return_url=https://spribe.co/games",
    "https://demo.spribe.io/launch/mini-roulette?currency=USD&lang=EN&return_url=https://spribe.co/games",
    "https://demo.spribe.io/launch/plinko?currency=USD&lang=EN&return_url=https://spribe.co/games",
  ];

  return (
    <>
      {/* Add Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`}
      </style>

      <Layout style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#f0f2f5', fontFamily: 'Roboto, sans-serif' }}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Content style={{ padding: '20px', background: darkMode ? '#333' : '#fff' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {backgroundImages.map((image, index) => (
              <AviatorCard key={index} backgroundImage={image} title={titles[index]} link={links[index]} />
            ))}
          </div>
        </Content>
        <AppFooter darkMode={darkMode} />
      </Layout>
    </>
  );
};

export default AviatorApp;
