import React, { useContext } from 'react';
import Context from '../../context/context';
import { statusMessageIcon } from '../Icons/statusMessageIcon';

import AvatarImg from '../AvatarImg/AvatarImg';
import './Chat.css';

export default function Chat({ chat }) {
  const { openChat } = useContext(Context);

  return (
    <div className={`chat ${chat.isOpen ? 'chat_open' : ''}`} onClick={() => openChat(chat.id)}>
      <div className="chat__user" title={chat.messages[chat.messages.length - 1].text}>
        <div className="chat__avatar">
          <AvatarImg avatar={chat.user.avatar} />
        </div>
        <div className="chat__info">
          <div className="chat__top-info">
            <div className="chat__top-info-wrap">
              <span title={chat.user.name} className="chat__user-name">
                {chat.user.name}
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
