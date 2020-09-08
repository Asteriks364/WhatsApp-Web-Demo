import * as React from 'react';

import { contentOverlayImg } from '../../Icons/contentOverlayImg';

export const ContentOverlay = (): JSX.Element => {
  return (
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
                <a
                  href="https://www.whatsapp.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
};
