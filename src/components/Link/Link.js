import React, { useState } from 'react';

import { useApp } from '../../context/AppProvider';
import './Link.css';

export default function Link({ title, icon, action, onClick }) {
  const appContext = useApp();
  const { setActionRightPanel } = appContext;

  const [isOpen, setOpen] = useState(false);

  const clickLink = () => {
    if (onClick) return onClick();
    if (action === 'searchMessage') return setActionRightPanel('searchMessage');
    setOpen(!isOpen);
    alert(!isOpen ? 'открыть ' + title : 'закрыть ' + title);
  };

  return (
    <div className={`link ${isOpen ? 'link_active' : ''}`}>
      <div role="button" title={title} onClick={clickLink}>
        <span>{icon}</span>
      </div>
    </div>
  );
}
