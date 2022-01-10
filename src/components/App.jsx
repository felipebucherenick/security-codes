import React from 'react';

import { UseState } from './UseState';
import { ClassState } from './ClassState';
import { UseReducer } from './UseReducer';

import '../styles/Global.scss';

const App = () => {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
      <UseReducer name="UseReducer" />
    </div>
  );
};

export { App };
