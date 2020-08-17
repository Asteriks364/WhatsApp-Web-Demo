import React from 'react';

import { statusMessageIcon } from '../Icons/statusMessageIcon';
import { tailInIcon } from '../Icons/tailInIcon';
import { tailOutIcon } from '../Icons/tailOutIcon';
import './Message.css';

export default function Message({ message }) {
  return (
    <div className={`message message_${message.type}`}>
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
