import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { Chat } from '../../model/Chat/Chat';

import { emojiIcon } from '../Icons/emojiIcon';
import { sendIcon } from '../Icons/sendIcon';
import { voiceIcon } from '../Icons/voiceIcon';
import { Link } from '../Link/Link';

import './Footer.css';

export const Footer = (): JSX.Element => {
  const appContext = useApp();
  const { chats, openedChatID, sendMessageChat, writeNewMessageChat } = appContext;

  const openChat: Chat | undefined = chats.find((chat) => chat.id === openedChatID);

  const newMessage: string = openChat ? openChat.newMessage : '';

  const [message, setMessage] = React.useState(newMessage as string);

  React.useEffect(() => {
    writeNewMessageChat(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  React.useEffect(() => {
    setMessage(newMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openedChatID]);

  const sendMessage = React.useCallback(
    (event: { key: string }) => {
      if ((event && event.key !== 'Enter') || !message) return;
      sendMessageChat(message);
      setMessage('');
    },
    [message, sendMessageChat],
  );

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
};
