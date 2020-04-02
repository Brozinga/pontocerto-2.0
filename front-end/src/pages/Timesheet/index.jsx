import React from 'react';

import './style.scss';

import Slidebar from '../Layout/Slidebar';
import Loading from '../Layout/Loading';

export default function Timesheet() {

  return (
    <div className="b-container">
      <Loading visible={false} />
      <Slidebar />
      <div className="container">
        <h1>Timesheet</h1>
      </div>
    </div>
  );
}
