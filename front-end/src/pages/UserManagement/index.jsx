import React from 'react';

import './styles.scss';

import Sidebar from '../Layout/Sidebar';

export default function UserManagement() {

  return (
    <div className="b-container">
      <Sidebar />
      <div className="container um-container">
        <h2>Gerenciamento de Usuários</h2>
      </div>
    </div>
  );
}
