import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar sticky-top navbar-custom">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="./index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  );
}