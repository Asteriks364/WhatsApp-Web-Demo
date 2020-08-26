import React, { useContext, useRef } from 'react';
import { Context } from '../../../context/AppContext';

import { arrowRight } from '../../Icons/arrowRight';
import { blocked } from '../../Icons/blocked';
import { dislike } from '../../Icons/dislike';
import { trash } from '../../Icons/trash';
import User from '../../User/User';

const profileBlockText = (className, text, icon = false, checkbox = false, ref = null) => {
  return (
    <div className={className} ref={ref}>
      <span className="title">{text}</span>
      {checkbox && <span className="checkbox"></span>}
      {icon && <span className="icon">{icon}</span>}
    </div>
  );
};

export default function RightPanelOpenProfile() {
  const {
    chats,
    contacts,
    openedChatID,
    setChats,
    setContacts,
    setOpenedChatID,
    setActionRightPanel,
  } = useContext(Context);
  const muteContactLink = useRef(null);

  const user = contacts.find((contact) => contact.id === openedChatID);

  /* Режим без звука для этого чата */
  const muteContact = () => {
    muteContactLink.current.classList.toggle('checked');
    /* Нужно доватить свойство isMuted в объект контакта */
  };

  const openFavoritesMessages = () => {
    alert('Открыть Избранные сообщения');
    /* Нужно доватить объект с избранными сообщениями в объект контакта */
  };

  const blockedContact = () => {
    alert('Заблокировать контакт');
    /* Нужно доватить свойство isBlocked в объект контакта */
  };

  const complainContact = () => {
    alert('Пожаловаться на контакт');
  };

  const deletedContact = () => {
    setActionRightPanel(false);
    setOpenedChatID(false);
    setChats(chats.filter((chat) => chat.id !== openedChatID));
    setContacts(contacts.filter((contact) => contact.id !== openedChatID));
  };

  return (
    <div className="contact-profile">
      <div className="contact-profile__block contact-profile__block_big-padding">
        <User user={user} props={true} avatarSize="big" />
      </div>

      <div className="contact-profile__block contact-profile__block_min-padding">
        <div className="">
          {profileBlockText('contact-profile__link', 'Медиа, ссылки и документы', arrowRight())}
          <div
            className={
              !contacts.files || contacts.files.length === 0
                ? 'file-list file-list_empty'
                : 'file-list'
            }
          >
            {contacts.files && contacts.files.length !== 0 ? (
              <div></div>
            ) : (
              <span>Медиа, ссылки и документы отсутствуют</span>
            )}
          </div>
        </div>
      </div>

      <div className="contact-profile__block">
        <div className="profile__link" role="button" onClick={muteContact}>
          {profileBlockText('profile__wrap', 'Без звука', false, true, muteContactLink)}
        </div>
        <div className="profile__link" role="button" onClick={openFavoritesMessages}>
          {profileBlockText('profile__wrap', 'Избранные сообщения', arrowRight())}
        </div>
      </div>

      <div className="contact-profile__block">
        {profileBlockText('contact-profile__link padding', 'Сведения и номер телефона')}
        <div className="profile__link">
          {profileBlockText('profile__wrap', 'Hey there! I am using WhatsApp.')}
        </div>
        <div className="profile__link">{profileBlockText('profile__wrap', '+7 999 035-15-48')}</div>
      </div>

      <div className="contact-profile__block">
        <div role="button" onClick={blockedContact}>
          {profileBlockText('profile__wrap revert', 'Заблокировать', blocked())}
        </div>
      </div>

      <div className="contact-profile__block">
        <div role="button" onClick={complainContact}>
          {profileBlockText('profile__wrap revert red', 'Пожаловаться на контакт', dislike())}
        </div>
      </div>

      <div className="contact-profile__block">
        <div role="button" onClick={deletedContact}>
          {profileBlockText('profile__wrap revert red', 'Удалить чат', trash())}
        </div>
      </div>
    </div>
  );
}
