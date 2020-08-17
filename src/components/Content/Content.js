import React, { useContext } from 'react';
import Context from '../../context/context';
import { links } from '../../state/links';

import Header from '../Header/Header';
import ChatWindow from '../ChatWindow/ChatWindow';
import Footer from '../Footer/Footer';
import './Content.css';

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18" width="21" height="18">
              <path
                fill="currentColor"
                d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"
              />
            </svg>
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
  const { chatOpened } = useContext(Context);

  const arLinks = [links.search, links.attach, links.menu];

  return (
    <div className="content">
      {chatOpened.length === 0 ? (
        contentOverlay()
      ) : (
        <div className="content__wrap content__wrap_open">
          <Header user={chatOpened[0].user} userPrors={true} links={arLinks} />
          <ChatWindow />
          <Footer />
        </div>
      )}
    </div>
  );
}
