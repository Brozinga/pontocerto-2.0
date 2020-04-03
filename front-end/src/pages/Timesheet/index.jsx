import React, { useEffect } from 'react';

import './style.scss';

import Sidebar from '../Layout/Sidebar';

import { EventEmitter } from '../../services/event';
import api from '../../services/api';
export default function Timesheet() {

  useEffect(() => {
    EventEmitter.dispatch('loading', true);
    api.get('/jokes').then(response => {
      EventEmitter.dispatch('loading', false);

    })
  }, []);

  return (
    <div className="b-container">
      <Sidebar />
      <div className="container">
        <h1>Timesheet</h1>
      </div>
    </div>
  );
}