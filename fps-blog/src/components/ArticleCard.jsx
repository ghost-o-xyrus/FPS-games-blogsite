import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const { id, title, excerpt, image, author, date, category } = article;

  return (
    <div className="article-card">
      <div className="article-image">
        <img src={image} alt={title} />
      </div>
      <div className="article-content">
        <span className="category">{category}</span>
        <h3><Link to={`/article/${id}`}>{title}</Link></h3>
        <p className="excerpt">{excerpt}</p>
        <div className="article-meta">
          <span className="author">By {author}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 