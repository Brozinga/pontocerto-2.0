import React, { Fragment, useState } from 'react';
import { AiOutlineLogout, AiOutlineClockCircle, AiOutlinePieChart, AiOutlineUsergroupAdd, AiOutlineMenu } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';

import './style.scss';

export default function Sidebar() {

  let menu = React.useRef();
  let [visible, setVisible] = useState(false);

  function toggleMenu() {
    if (!visible) {
      menu.classList.add('visible');
    } else {
      menu.classList.remove('visible');
    }

    setVisible(!visible);
  }

  return (
    <Fragment>
      <nav className="menu-container" ref={ref => menu = ref}>
        <div className="links-container">
          <NavLink to="/timesheet" activeClassName="is-active"><AiOutlineClockCircle color="#8e8e8e" size={35} /><span>
            Timesheet
        </span></NavLink>
          <NavLink to="/dashboard" activeClassName="is-active"><AiOutlinePieChart color="#8e8e8e" size={35} /><span>Dashboard</span></NavLink>
          <NavLink to="/user-management" activeClassName="is-active"><AiOutlineUsergroupAdd color="#8e8e8e" size={35} /><span>Gerenciamento</span></NavLink>
        </div>
        <div className="exit">
          <NavLink to="/"><AiOutlineLogout color="#8e8e8e" size={35} /><span>Sair</span></NavLink>
        </div>
      </nav>

      <div className="float-button">
        <button onClick={toggleMenu}>
          <AiOutlineMenu color="#FFF" size={30}></AiOutlineMenu>
        </button>
      </div>
    </Fragment>
  );
}
