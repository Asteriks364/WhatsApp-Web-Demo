import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { Chat } from '../../model/Chat/Chat';
import { Contact } from '../../model/Contact/Contact';

import { statusMessageIcon } from '../Icons/statusMessageIcon';
import { AvatarImg } from '../AvatarImg/AvatarImg';

import './ChatItem.css';

interface IChat {
  contact: Contact;
  chat: Chat | undefined;
}

export const ChatItem = (props: IChat): JSX.Element => {
  const appContext = useApp();
  const { openChat } = appContext;

  const openChatWindow = React.useCallback(() => {
    if (props.chat) openChat(props.chat.id);
  }, [openChat, props.chat]);

  return (
    <div>
      {props.chat && (
        <div className={`chat ${props.chat.isOpen ? 'chat_open' : ''}`} onClick={openChatWindow}>
          <div
            className="chat__user"
            title={props.chat.messages[props.chat.messages.length - 1].text}
          >
            <div className="chat__avatar">
              <AvatarImg avatar={props.contact.avatar} />
            </div>
            <div className="chat__info">
              <div className="chat__top-info">
                <div className="chat__top-info-wrap">
                  <span title={props.contact.name} className="chat__user-name">
                    {props.contact.name}
                  </span>
                </div>
                <div className="chat__time-last-message">
                  {props.chat.messages[props.chat.messages.length - 1].time}
                </div>
              </div>
              <div className="chat__last-message">
                {props.chat.messages[props.chat.messages.length - 1].type === 'out' && (
                  <div
                    className={`message__status ${
                      props.chat.messages[props.chat.messages.length - 1].isRead
                        ? 'message__status_read'
                        : ''
                    }`}
                  >
                    {statusMessageIcon()}
                  </div>
                )}
                <span className="chat__last-message-text">
                  {props.chat.messages[props.chat.messages.length - 1].text}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
