import React, { useState } from 'react';

import './Link.css';

export default function Link({ title, icon, onClick }) {
  const [isOpen, setOpen] = useState(false);

  const clickLink = () => {
    if (onClick) return onClick();
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
