import React from 'react';
import { NavLink } from "react-router-dom";

import { links } from "../test.js";

import "./style.css";


const Nav = () => {
  return (
    <div className="hello">
    {links.map((item) => (
      <div key={item.title}>
        <p className="another">{item.title}</p>
        {item.links.map((link) => (
          <NavLink to={`/${link.name}`} key={link.name}>
           <span>{link.icon}</span> 
            <span className="capitalize">{link.name}</span>
          </NavLink>
        ))}
      </div>
    ))}
  </div>
  )
}

export default Nav;