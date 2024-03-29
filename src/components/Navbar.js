import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

