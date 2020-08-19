import React, { useContext, useEffect, useRef } from 'react';
import { Context } from './context';
import Message from './components/Message';

export default function ChatWindow() {
  const { chatOpened } = useContext(Context);
  const messages = chatOpened[0].messages;

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ block: 'end' });
  }, [messages, messages.length]);

  return (
    <div className="chat-window">
      <div className="chat-window__wrap" id="block">
        <div className="chat-window__indent"></div>
        <div className="chat-window__list">
          {chatOpened[0].messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <span ref={messagesEndRef} />
      </div>
    </div>
  );
}
