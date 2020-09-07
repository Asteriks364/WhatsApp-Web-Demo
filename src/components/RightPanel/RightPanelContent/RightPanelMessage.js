import * as React from 'react';

import { useApp } from '../../../context/AppProvider';
import { statusMessageIcon } from '../../Icons/statusMessageIcon';

export default function RightPanelMessage({ message }) {
  const appContext = useApp();
  const { setSelectMessage } = appContext;

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
