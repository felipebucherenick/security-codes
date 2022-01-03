import React from 'react';

import { UseState } from './UseState';
import { ClassState } from './ClassState';

import '../styles/Global.scss';

const App = () => {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
};

export { App };
