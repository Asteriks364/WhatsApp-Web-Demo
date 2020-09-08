import * as React from 'react';

import { useApp } from '../../../context/AppProvider';
import { Message } from '../../../model/Message/Message';

import { statusMessageIcon } from '../../Icons/statusMessageIcon';

interface IRightPanelMessage {
  message: Message;
}

export const RightPanelMessage = (props: IRightPanelMessage): JSX.Element => {
  const appContext = useApp();
  const { setSelectMessage } = appContext;

  /* Выюор сообщения в поиске */
  const findMessage = React.useCallback(() => {
    setSelectMessage(props.message.id);
    setTimeout(() => {
      setSelectMessage(false);
    }, 750);
  }, [props.message.id, setSelectMessage]);

  return (
    <div className="message-list__item" onClick={findMessage}>
      <div className="message-list__item-time">{props.message.time}</div>
      <div className="chat__last-message">
        {props.message.type === 'out' && (
          <div className={`message__status ${props.message.isRead ? 'message__status_read' : ''}`}>
            {statusMessageIcon()}
          </div>
        )}
        <span className="chat__last-message-text">{props.message.text}</span>
      </div>
    </div>
  );
};
