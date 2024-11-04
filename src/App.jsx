import React, { useState, useEffect } from 'react';
import { Layout, Input, Skeleton } from 'antd';
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
const { Search } = Input;

const AviatorApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [loadingDelay, setLoadingDelay] = useState(false); // State for delay management

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

  useEffect(() => {
    const asyncFilter = async () => {
      setLoading(true); // Set loading to true before filtering
      const results = titles
        .map((title, index) => ({ title, image: backgroundImages[index], link: links[index] }))
        .filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()));

      // Simulate a delay of 2 seconds before updating the filtered titles
      setTimeout(() => {
        setFilteredTitles(results);
        setLoading(false); // Set loading to false after filtering is complete
      }, 2000);
    };

    // Reset loading delay state before each new search
    setLoadingDelay(true);
    asyncFilter();

    // Clear the loading delay after 2 seconds to avoid flashing
    const delayTimer = setTimeout(() => {
      setLoadingDelay(false);
    }, 2000);

    return () => clearTimeout(delayTimer); // Cleanup on unmount
  }, [searchTerm]);

  return (
    <>
      <Layout style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#f0f2f5', fontFamily: 'Roboto, sans-serif' }}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Content style={{ padding: '20px', background: darkMode ? '#333' : '#fff' }}>
          <Search
            placeholder="Search games"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px', maxWidth: '300px' }}
          />
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {loading || loadingDelay ? (
              // Show skeleton loading when loading is true or loading delay is active
              [...Array(7)].map((_, index) => (
                <Skeleton key={index} active style={{ width: 200, height: 300 }} />
              ))
            ) : (
              // Show actual content when loading is false
              filteredTitles.map(({ title, image, link }, index) => (
                <AviatorCard key={index} backgroundImage={image} title={title} link={link} />
              ))
            )}
          </div>
        </Content>
        <AppFooter darkMode={darkMode} />
      </Layout>
    </>
  );
};

export default AviatorApp;
