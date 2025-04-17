import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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

  const sampleBlogs = [
    {
      id: 1,
      title: "My Journey from Silver to Global Elite",
      excerpt: "A personal story of growth, dedication, and the lessons learned climbing CS:GO's competitive ladder...",
      category: "Personal Story",
      author: "Mike 'Headshot' Wilson",
      date: "March 13, 2024",
      image: "/images/rank-journey.jpg"
    },
    {
      id: 2,
      title: "Life as a Professional FPS Player",
      excerpt: "Behind the scenes look at what it takes to compete at the highest level in professional FPS gaming...",
      category: "Lifestyle",
      author: "Emma 'Ace' Rodriguez",
      date: "March 12, 2024",
      image: "/images/pro-life.jpg"
    }
  ];

  return (
    <div className="home">
      <h1>Welcome to FPS Gaming Hub</h1>
      
      <section className="featured-articles">
        <h2>Latest Articles</h2>
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
      </section>

      <section className="featured-blogs">
        <h2>Latest Blog Posts</h2>
        <div className="blogs-grid">
          {sampleBlogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="article-content">
                <span className="category">{blog.category}</span>
                <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
                <p className="excerpt">{blog.excerpt}</p>
                <div className="article-meta">
                  <span className="author">By {blog.author}</span>
                  <span className="date">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 