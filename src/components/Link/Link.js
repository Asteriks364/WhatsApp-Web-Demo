import React, { useContext, useState } from 'react';
import { Context } from '../../context/AppContext';

import './Link.css';

export default function Link({ title, icon, action, onClick }) {
  const [isOpen, setOpen] = useState(false);

  const { setActionRightPanel } = useContext(Context);

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
