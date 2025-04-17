import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const sampleArticles = [
    {
      id: 1,
      title: "Top 10 CS:GO Pro Strategies for 2024",
      excerpt: "Learn the most effective strategies used by professional CS:GO players in recent tournaments...",
      category: "CS:GO",
      author: "Alex Thompson",
      date: "March 15, 2024",
      image: "/images/csgo-strategies.jpg"
    },
    {
      id: 2,
      title: "Valorant's New Agent: Complete Analysis",
      excerpt: "Deep dive into the abilities and potential impact of Valorant's latest agent on the meta...",
      category: "Valorant",
      author: "Sarah Chen",
      date: "March 14, 2024",
      image: "/images/valorant-agent.jpg"
    }
  ];

  return (
    <div className="articles-page">
      <h1>All Articles</h1>
      <div className="articles-grid">
        {sampleArticles.map(article => (
          <div key={article.id} className="article-card">
            <div className="article-content">
              <span className="category">{article.category}</span>
              <h3><Link to={`/article/${article.id}`}>{article.title}</Link></h3>
              <p className="excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="author">By {article.author}</span>
                <span className="date">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles; 