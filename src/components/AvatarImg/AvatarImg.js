import React from 'react';

import { imgDefault } from '../Icons/imgDefault';
import './AvatarImg.css';

export default function AvatarImg({ avatar, size }) {
  return (
    <div
      className={`avatar ${size === 'small' ? 'avatar_small' : size === 'big' ? 'avatar_big' : ''}`}
    >
      {avatar ? (
        <img alt="avatar" src={avatar} className="avatar__img" />
      ) : (
        <div className="avatar__img avatar-img_default">
          <span>{imgDefault()}</span>
        </div>
      )}
    </div>
  );
}
