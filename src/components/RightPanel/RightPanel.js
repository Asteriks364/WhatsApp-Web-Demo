import React, { useState } from 'react';

import Search from '../Search/Search';
import './RightPanel.css';

export default function RightPanel() {
  const [searchMessage, setSearchMessage] = useState('');

  return (
    <div className="right-panel">
      <div className="right-panel__header"></div>
      <Search search={searchMessage} setSearch={setSearchMessage} />
    </div>
  );
}
