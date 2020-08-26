import React, { useContext } from 'react';
import { Context } from './context/AppContext';

import Side from './components/Side/Side';
import Content from './components/Content/Content';
import RightPanel from './components/RightPanel/RightPanel';
import './App.css';

export default function App() {
  const { actionRightPanel } = useContext(Context);

  return (
    <div className={`app__content ${actionRightPanel ? 'open-right' : ''}`}>
      <Side />
      <Content />
      <RightPanel />
    </div>
  );
}
