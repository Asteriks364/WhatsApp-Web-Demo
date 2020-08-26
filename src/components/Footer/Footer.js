import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AppContext';

import { emojiIcon } from '../Icons/emojiIcon';
import { sendIcon } from '../Icons/sendIcon';
import { voiceIcon } from '../Icons/voiceIcon';
import Link from '../Link/Link';
import './Footer.css';

export default function Footer() {
  const { chats, openedChatID, sendMessageChat, writeNewMessageChat } = useContext(Context);

  const newMessage = chats.find((chat) => chat.id === openedChatID).newMessage;
  const [message, setMessage] = useState(newMessage);

  useEffect(() => {
    writeNewMessageChat(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    setMessage(newMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openedChatID]);

  const sendMessage = (event) => {
    if ((event && event.key !== 'Enter') || !message) return;
    sendMessageChat(message);
    setMessage('');
  };

  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__link">
          <Link title="emoji" icon={emojiIcon()} />
        </div>
        <label className="search__label">
          <input
            type="text"
            className="search__input"
            placeholder="Введите сообщение"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={sendMessage}
          />
        </label>
        <div className="footer__link">
          {message ? (
            <Link title="отправить" icon={sendIcon()} onClick={sendMessage} />
          ) : (
            <Link title="Голосовое сообщение" icon={voiceIcon()} />
          )}
        </div>
      </div>
    </footer>
  );
}
