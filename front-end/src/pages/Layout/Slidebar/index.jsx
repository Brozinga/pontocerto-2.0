import React from 'react';
import { AiOutlineLogout, AiOutlineClockCircle, AiOutlinePieChart } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';

import './style.scss';

export default function Slidebar() {
  return (
    <nav className="menu-container">
      <div className="links-container">
        <NavLink to="/timesheet" activeClassName="is-active"><AiOutlineClockCircle color="#8e8e8e" size={50} /></NavLink>
        <NavLink to="/dashboard" activeClassName="is-active"><AiOutlinePieChart color="#8e8e8e" size={50} /></NavLink>
      </div>
      <div className="exit">
        <NavLink to="/"><AiOutlineLogout color="#8e8e8e" size={50} /></NavLink>
      </div>
    </nav>
  );
}
