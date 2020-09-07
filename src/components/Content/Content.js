import * as React from 'react';
import { links } from '../../state/links';

import { useApp } from '../../context/AppProvider';
import ContentOverlay from './ContentOverlay/ContentOverlay';
import Header from '../Header/Header';
import ChatWindow from '../ChatWindow/ChatWindow';
import Footer from '../Footer/Footer';
import './Content.css';

export default function Content() {
  const appContext = useApp();
  const { contacts, openedChatID } = appContext;

  const arLinks = [links.search, links.attach, links.menu];

  return (
    <div className="content">
      {!openedChatID ? (
        <ContentOverlay />
      ) : (
        <div className="content__wrap content__wrap_open">
          <Header
            user={contacts.find((contact) => contact.id === openedChatID)}
            userContact={true}
            links={arLinks}
          />
          <ChatWindow />
          <Footer />
        </div>
      )}
    </div>
  );
}
