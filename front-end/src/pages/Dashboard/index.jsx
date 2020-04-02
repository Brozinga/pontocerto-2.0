import React from 'react';

import './style.scss';

import Slidebar from '../Layout/Slidebar';
import Loading from '../Layout/Loading';

export default function Dashboard() {
  return (
    <div className="b-container">
      <Loading visible={true} />
      <Slidebar />
      <div className="container">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
