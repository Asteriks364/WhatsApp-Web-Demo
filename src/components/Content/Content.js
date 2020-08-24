import React, { useContext } from 'react';
import Context from '../../context/context';
import { links } from '../../state/links';

import { contentOverlayImg } from '../Icons/contentOverlayImg';
import Header from '../Header/Header';
import ChatWindow from '../ChatWindow/ChatWindow';
import Footer from '../Footer/Footer';
import './Content.css';

/* Фон окна сообщений при первом открытии */
const contentOverlay = () => (
  <div className="content__overlay">
    <div className="content__overlay-wrap">
      <div className="content__overlay-img" />
      <div>
        <h1 className="content__overlay-title">Не отключайте свой телефон</h1>
        <div className="content__overlay-text">
          WhatsApp подключается к вашему телефону, чтобы синхронизировать сообщения. Чтобы снизить
          трафик данных, подключите телефон к Wi-Fi.
        </div>
        <div className="content__overlay-link">
          <div className="content__overlay-link-hr" />
          <div className="content__overlay-link-block">
            <span>{contentOverlayImg()}</span>
            <div className="content__overlay-link-text">
              WhatsApp доступен для Windows.{' '}
              <a href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer">
                Скачайте здесь
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Content() {
  const { contacts, openedChatID } = useContext(Context);

  const arLinks = [links.search, links.attach, links.menu];

  return (
    <div className="content">
      {!openedChatID ? (
        contentOverlay()
      ) : (
        <div className="content__wrap content__wrap_open">
          <Header
            user={contacts.find((contact) => contact.id === openedChatID)}
            userPrors={true}
            links={arLinks}
          />
          <ChatWindow />
          <Footer />
        </div>
      )}
    </div>
  );
}
