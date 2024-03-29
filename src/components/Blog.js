import React, { useState, useEffect } from 'react';
import blogData from '../data/blog.json'; // Import blog.json

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <div className="container">
      <h2 className="blog-heading">Blogs</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-item" key={blog.id}>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-body">{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
