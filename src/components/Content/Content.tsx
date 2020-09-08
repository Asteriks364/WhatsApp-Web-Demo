import * as React from 'react';

import { links } from '../../state/links';
import { useApp } from '../../context/AppProvider';
import { Contact } from '../../model/Contact/Contact';

import { ILink } from '../Link/Interface/ILink';

import { ContentOverlay } from './ContentOverlay/ContentOverlay';
import { Header } from '../Header/Header';
import { ChatWindow } from '../ChatWindow/ChatWindow';
import { Footer } from '../Footer/Footer';

import './Content.css';

export const Content = (): JSX.Element => {
  const appContext = useApp();
  const { contacts, openedChatID } = appContext;

  const arLinks: Array<ILink> = [links.search, links.attach, links.menu];

  const user: Contact | undefined = contacts.find((contact) => contact.id === openedChatID);
  let profile: Contact | undefined = undefined;

  if (user) {
    profile = new Contact(user.id, user.name, user.avatar, user.lastVisit, (user.files = []));
  }

  return (
    <div className="content">
      {!openedChatID || !profile ? (
        <ContentOverlay />
      ) : (
        <div className="content__wrap content__wrap_open">
          <Header user={profile} profileContact={true} links={arLinks} />
          <ChatWindow />
          <Footer />
        </div>
      )}
    </div>
  );
};
