import React from 'react';
import { useLocation } from 'react-router-dom';
import { INewsArticle } from '../types/news';

const NewsDetails: React.FC = () => {
  const location = useLocation();
  const article = (location.state as { article: INewsArticle })?.article;

  return (
    <div className="container mt-4">
      {article ? (
        <div>
          <h1 className="mb-3">{article.title}</h1>
          <img src={article.urlToImage || 'default-placeholder.png'} className="img-fluid mb-3" alt={article.title} />
          <p className="text-muted">Published at: {article.publishedAt}</p>
          <p className="text-muted">Author: {article.author || 'Unknown'}</p>
          <div className="mb-3">
            <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read Full Article</a>
          </div>
          <p>{article.content}</p>
        </div>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
};

export default NewsDetails;
