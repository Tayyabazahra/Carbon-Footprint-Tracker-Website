// Category.js
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div>
      <h2>Select a Category</h2>
      <ul>
        <li><Link to="/question/transport/1">Transport</Link></li>
        <li><Link to="/question/electricity/1">Electricity</Link></li>
        <li><Link to="/question/home/1">Home</Link></li>
      </ul>
    </div>
  );
};

export default Category;
