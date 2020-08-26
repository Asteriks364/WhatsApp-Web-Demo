import React, { useContext } from 'react';
import { Context } from '../../context/AppContext';

import User from '../User/User';
import Link from '../Link/Link';
import './Header.css';

export default function Header({ user, userContact = false, links }) {
  const { setActionRightPanel } = useContext(Context);

  const openUserCard = () => {
    return userContact ? setActionRightPanel('openContactProfile') : console.log('open');
  };

  return (
    <header className="header">
      <div className="header__user" role="button" onClick={openUserCard}>
        <User user={user} props={userContact} avatarSize="small" />
      </div>
      <div className="header__link-block">
        {links.map((link, index) => (
          <Link key={index} title={link.title} icon={link.icon} action={link.action} />
        ))}
      </div>
    </header>
  );
}
