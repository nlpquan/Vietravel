import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
  
  );
};

export default App;
