import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/AppContext';

import { statusMessageIcon } from '../Icons/statusMessageIcon';
import { tailInIcon } from '../Icons/tailInIcon';
import { tailOutIcon } from '../Icons/tailOutIcon';
import './Message.css';

export default function Message({ message }) {
  const { selectMessage } = useContext(Context);

  /* Классы для сообщения */
  const [messageClassName, setMessageClassName] = useState(['message', `message_${message.type}`]);

  const selectMessageRef = useRef(null);

  /* Скрол к выбраному сообщению в поиске */
  useEffect(() => {
    if (message.id === selectMessage) selectMessageRef.current.scrollIntoView({ block: 'end' });
  }, [selectMessage, message]);

  /* Добавление/удаление класса при выборе сообщения в поиске */
  useEffect(() => {
    if (message.id === selectMessage) {
      setMessageClassName(['message', `message_${message.type}`, 'message_find']);
    } else {
      setMessageClassName(['message', `message_${message.type}`]);
    }
  }, [selectMessage, message]);

  return (
    <div className={messageClassName.join(' ')} id={`message-${message.id}`} ref={selectMessageRef}>
      <div className="message__wrap">
        <span className="message__wrap-triangle">
          {message.type === 'out' ? tailOutIcon() : tailInIcon()}
        </span>
        <div className="message__text selectable-text">
          <span>{message.text}</span>
          <span className="message__text-indent" />
        </div>
        <div className="message__data">
          <span className="message__time">{message.time}</span>
          {message.type === 'out' && (
            <div className={`message__status ${message.isRead ? 'message__status_read' : ''}`}>
              {statusMessageIcon()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
