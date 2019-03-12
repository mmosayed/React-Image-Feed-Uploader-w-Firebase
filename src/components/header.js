import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mo Feed</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/upload">Upload</Link>
        </li>
      </ul>
    </nav>
  )
}