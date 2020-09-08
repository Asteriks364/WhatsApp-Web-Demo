import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { Message } from '../../model/Message/Message';

import { statusMessageIcon } from '../Icons/statusMessageIcon';
import { tailInIcon } from '../Icons/tailInIcon';
import { tailOutIcon } from '../Icons/tailOutIcon';

import './MessageItem.css';

interface IMessage {
  message: Message;
}

export const MessageItem = (props: IMessage): JSX.Element => {
  const appContext = useApp();
  const { selectMessage } = appContext;

  /* Классы для сообщения */
  const [messageClassName, setMessageClassName] = React.useState([
    'message',
    `message_${props.message.type}`,
  ]);

  const selectMessageRef = React.useRef<HTMLDivElement>(null);

  /* Скрол к выбраному сообщению в поиске */
  React.useEffect(() => {
    if (props.message.id === selectMessage && selectMessageRef.current !== null)
      selectMessageRef.current.scrollIntoView({ block: 'end' });
  }, [selectMessage, props.message]);

  /* Добавление/удаление класса при выборе сообщения в поиске */
  React.useEffect(() => {
    if (props.message.id === selectMessage) {
      setMessageClassName(['message', `message_${props.message.type}`, 'message_find']);
    } else {
      setMessageClassName(['message', `message_${props.message.type}`]);
    }
  }, [selectMessage, props.message]);

  return (
    <div
      className={messageClassName.join(' ')}
      id={`message-${props.message.id}`}
      ref={selectMessageRef}
    >
      <div className="message__wrap">
        <span className="message__wrap-triangle">
          {props.message.type === 'out' ? tailOutIcon() : tailInIcon()}
        </span>
        <div className="message__text selectable-text">
          <span>{props.message.text}</span>
          <span className="message__text-indent" />
        </div>
        <div className="message__data">
          <span className="message__time">{props.message.time}</span>
          {props.message.type === 'out' && (
            <div
              className={`message__status ${props.message.isRead ? 'message__status_read' : ''}`}
            >
              {statusMessageIcon()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
