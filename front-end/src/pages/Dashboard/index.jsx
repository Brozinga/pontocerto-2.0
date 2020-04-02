import React from 'react';

import './style.scss';

import Slidebar from '../Layout/Slidebar';

export default function Dashboard() {

  return (
    <div className="b-container">
      <Slidebar />
      <div className="container">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
