import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className="coding addict" alt="coding addict" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      {/* mapping through the data shows all links in data folder */}
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      
      {/* mapping through the data shows all links in data folder */}
      <ul className="social-icons">
        { social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
