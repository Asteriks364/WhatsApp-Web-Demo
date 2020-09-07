import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { statusMessageIcon } from '../Icons/statusMessageIcon';

import AvatarImg from '../AvatarImg/AvatarImg';
import './Chat.css';

export default function Chat({ contact, chat }) {
  const appContext = useApp();
  const { openChat } = appContext;

  return (
    <div className={`chat ${chat.isOpen ? 'chat_open' : ''}`} onClick={() => openChat(chat.id)}>
      <div className="chat__user" title={chat.messages[chat.messages.length - 1].text}>
        <div className="chat__avatar">
          <AvatarImg avatar={contact.avatar} />
        </div>
        <div className="chat__info">
          <div className="chat__top-info">
            <div className="chat__top-info-wrap">
              <span title={contact.name} className="chat__user-name">
                {contact.name}
              </span>
            </div>
            <div className="chat__time-last-message">
              {chat.messages[chat.messages.length - 1].time}
            </div>
          </div>
          <div className="chat__last-message">
            {chat.messages[chat.messages.length - 1].type === 'out' && (
              <div
                className={`message__status ${
                  chat.messages[chat.messages.length - 1].isRead ? 'message__status_read' : ''
                }`}
              >
                {statusMessageIcon()}
              </div>
            )}
            <span className="chat__last-message-text">
              {chat.messages[chat.messages.length - 1].text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
