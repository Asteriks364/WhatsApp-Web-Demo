import * as React from 'react';

import { useApp } from '../../../context/AppProvider';
import { Contact } from '../../../model/Contact/Contact';

import { arrowRight } from '../../Icons/arrowRight';
import { blocked } from '../../Icons/blocked';
import { dislike } from '../../Icons/dislike';
import { trash } from '../../Icons/trash';
import { Profile } from '../../Profile/Profile';

const profileBlockText = (
  className: string | undefined,
  text: string | null | undefined,
  icon?: JSX.Element | false,
  checkbox = false,
  ref: React.RefObject<any> | null = null,
) => {
  return (
    <div className={className} ref={ref}>
      <span className="title">{text}</span>
      {checkbox && <span className="checkbox" />}
      {icon && <span className="icon">{icon}</span>}
    </div>
  );
};

export const RightPanelOpenProfile = (): JSX.Element => {
  const appContext = useApp();
  const {
    chats,
    contacts,
    openedChatID,
    setChats,
    setContacts,
    setOpenedChatID,
    setActionRightPanel,
  } = appContext;

  const muteContactLink = React.useRef<HTMLDivElement>(null);

  const contact: Contact | undefined = contacts.find((contact) => contact.id === openedChatID);

  /* Режим без звука для этого чата */
  const muteContact = React.useCallback(() => {
    if (muteContactLink.current !== null) muteContactLink.current.classList.toggle('checked');
    /* Нужно добавить свойство isMuted в объект контакта */
  }, []);

  const openFavoritesMessages = React.useCallback(() => {
    alert('Открыть Избранные сообщения');
    /* Нужно доватить объект с избранными сообщениями в объект контакта */
  }, []);

  const blockedContact = React.useCallback(() => {
    alert('Заблокировать контакт');
    /* Нужно доватить свойство isBlocked в объект контакта */
  }, []);

  const complainContact = React.useCallback(() => {
    alert('Пожаловаться на контакт');
  }, []);

  const deletedContact = React.useCallback(() => {
    setActionRightPanel(false);
    setOpenedChatID(-1);
    setChats(chats.filter((chat) => chat.id !== openedChatID));
    setContacts(contacts.filter((contact) => contact.id !== openedChatID));
  }, [chats, contacts, openedChatID, setActionRightPanel, setChats, setContacts, setOpenedChatID]);

  return (
    <div className="contact-profile">
      <div className="contact-profile__block contact-profile__block_big-padding">
        {contact && <Profile profile={contact} profileContact avatarSize="big" />}
      </div>

      <div className="contact-profile__block contact-profile__block_min-padding">
        <div className="">
          {profileBlockText('contact-profile__link', 'Медиа, ссылки и документы', arrowRight())}
          <div
            className={
              contact && (!contact.files || contact.files.length === 0)
                ? 'file-list file-list_empty'
                : 'file-list'
            }
          >
            {contact && contact.files && contact.files.length !== 0 ? (
              <div>files</div>
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
};
