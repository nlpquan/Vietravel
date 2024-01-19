import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../http-common';
import { INewsApiResponse, INewsArticle } from '../types/news';

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<INewsArticle[]>([]);

  useEffect(() => {
    axios.get<INewsApiResponse>('')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">News List</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img src={article.urlToImage || 'default-placeholder.png'} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <Link to={`/news/${index}`} state={{ article: article }}>Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
