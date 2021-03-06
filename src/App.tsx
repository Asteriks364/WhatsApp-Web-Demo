import * as React from 'react';

import { useApp } from './context/AppProvider';

import { Side } from './components/Side/Side';
import { Content } from './components/Content/Content';
import { RightPanel } from './components/RightPanel/RightPanel';

import './App.css';

export const App = (): JSX.Element => {
  const appContext = useApp();

  return (
    <div className="app__wrapper">
      <div className={`app__content ${appContext.actionRightPanel ? 'open-right' : ''}`}>
        <Side />
        <Content />
        <RightPanel />
      </div>
    </div>
  );
};
