import React, { useContext } from 'react';
import { Context } from '../../context/AppContext';
import { links } from '../../state/links';

import ContentOverlay from './ContentOverlay/ContentOverlay';
import Header from '../Header/Header';
import ChatWindow from '../ChatWindow/ChatWindow';
import Footer from '../Footer/Footer';
import './Content.css';

export default function Content() {
  const { contacts, openedChatID } = useContext(Context);

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
