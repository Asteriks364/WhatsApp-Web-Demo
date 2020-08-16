import React from 'react';

import Link from '../components/Link';
import AvatarImg from './AvatarImg';
import '../css/Header.css';

export default function Header({ user, userPrors = false, links }) {
  const openUserCard = () => {
    alert('Открыть профиль пользователя');
  };

  return (
    <header className="header">
      <div className="user" role="button" onClick={openUserCard}>
        <div className="user__avatar">
          <AvatarImg avatar={user.avatar} size="small" />
        </div>
        {userPrors && (
          <div className="user__info">
            <span title={user.name} className="user__name">
              {user.name}
            </span>
            <span title={user.lastVisit} className="user__visit">
              был(-а) {user.lastVisit}
            </span>
          </div>
        )}
      </div>
      <div className="link-block">
        {links.map((link, index) => (
          <Link key={index} title={link.title} icon={link.icon} />
        ))}
      </div>
    </header>
  );
}
