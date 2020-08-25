import React, { useContext } from 'react';
import Context from '../../../context/context';

import { statusMessageIcon } from '../../Icons/statusMessageIcon';

export default function RightPanelMessage({ message }) {
  const { setSelectMessage } = useContext(Context);

  /* Выюор сообщения в поиске */
  const findMessage = () => {
    setSelectMessage(message.id);
    setTimeout(() => {
      setSelectMessage(false);
    }, 750);
  };

  return (
    <div className="message-list__item" onClick={findMessage}>
      <div className="message-list__item-time">{message.time}</div>
      <div className="chat__last-message">
        {message.type === 'out' && (
          <div className={`message__status ${message.isRead ? 'message__status_read' : ''}`}>
            {statusMessageIcon()}
          </div>
        )}
        <span className="chat__last-message-text">{message.text}</span>
      </div>
    </div>
  );
}
