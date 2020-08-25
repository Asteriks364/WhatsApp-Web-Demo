import React from 'react';

import AvatarImg from '../AvatarImg/AvatarImg';
import './User.css';

export default function User({ user, props, avatarSize }) {
  return (
    <div className="user">
      <div className="user__avatar">
        <AvatarImg avatar={user.avatar} size={avatarSize} />
      </div>
      {props && (
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
  );
}
