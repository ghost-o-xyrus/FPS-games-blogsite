import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const games = [
    { id: 1, name: 'CS:GO', image: '/images/csgo-banner.jpg' },
    { id: 2, name: 'Valorant', image: '/images/valorant-banner.jpg' },
    { id: 3, name: 'Call of Duty', image: '/images/cod-banner.jpg' },
    { id: 4, name: 'Apex Legends', image: '/images/apex-banner.jpg' },
    { id: 5, name: 'Overwatch 2', image: '/images/ow2-banner.jpg' },
    { id: 6, name: 'Rainbow Six Siege', image: '/images/r6-banner.jpg' }
  ];

  const topics = [
    { id: 1, name: 'Improving Aim', image: '/images/aim-banner.jpg' },
    { id: 2, name: 'Game Strategy', image: '/images/strategy-banner.jpg' },
    { id: 3, name: 'Incoming Games', image: '/images/new-games-banner.jpg' },
    { id: 4, name: 'Hardware Updates', image: '/images/hardware-banner.jpg' },
    { id: 5, name: 'Esports News', image: '/images/esports-banner.jpg' },
    { id: 6, name: 'Pro Player Insights', image: '/images/pro-insights-banner.jpg' }
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdowns(prev => {
      if (prev.includes(dropdown)) {
        return prev.filter(item => item !== dropdown);
      } else {
        return [...prev, dropdown];
      }
    });
  };

  return (
    <div className="categories-page">
      <h1>Categories</h1>
      
      <div className="categories-container">
        <div className="category-section">
          <button 
            className="category-dropdown"
            onClick={() => toggleDropdown('games')}
          >
            Games
          </button>
          <div className={`sliding-banner ${activeDropdowns.includes('games') ? 'active' : ''}`}>
            <div className="banner-content">
              {games.map(game => (
                <div key={game.id} className="banner-item">
                  <img src={game.image} alt={game.name} />
                  <Link to={`/category/games/${game.id}`}>{game.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="category-section">
          <button 
            className="category-dropdown"
            onClick={() => toggleDropdown('topics')}
          >
            Topics
          </button>
          <div className={`sliding-banner ${activeDropdowns.includes('topics') ? 'active' : ''}`}>
            <div className="banner-content">
              {topics.map(topic => (
                <div key={topic.id} className="banner-item">
                  <img src={topic.image} alt={topic.name} />
                  <Link to={`/category/topics/${topic.id}`}>{topic.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories; 