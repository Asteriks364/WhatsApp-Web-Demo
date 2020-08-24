import React, { useContext, useState } from 'react';
import Context from '../../context/context';

import './Link.css';

export default function Link({ title, icon, action, onClick }) {
  const [isOpen, setOpen] = useState(false);

  const { setOpenRightPanel } = useContext(Context);

  const clickLink = () => {
    if (onClick) return onClick();
    if (action === 'openRightPanel') return setOpenRightPanel(true);
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
