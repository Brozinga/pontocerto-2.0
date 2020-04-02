import '../src/assets/styles/scss/global.scss';
import React, { Fragment } from 'react';
import Routes from './routes';

import Loading from './pages/Layout/Loading';

export default function App() {

  return (
    <Fragment>
      <Loading />
      <Routes />
    </Fragment>
  );
}
