import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the News Portal</h1>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/news" className="btn btn-primary">View News List</Link>
      </div>
    </div>
  );
};

export default HomePage;
