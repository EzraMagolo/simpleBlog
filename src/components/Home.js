import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json'; // Import blog.json

const Home = () => {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <div className="container">
      <h2 className='home-heading'>Latest Blog Entries</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-item" key={blog.id}>
            <Link to={`/blogs`} className="blog-title">{blog.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

