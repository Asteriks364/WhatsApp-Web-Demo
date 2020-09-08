import * as React from 'react';

import { imgDefault } from '../Icons/imgDefault';

import './AvatarImg.css';

interface IAvatarImg {
  avatar: string | undefined;
  size?: string;
}

export const AvatarImg = (props: IAvatarImg): JSX.Element => {
  return (
    <div
      className={`avatar ${
        props.size === 'small' ? 'avatar_small' : props.size === 'big' ? 'avatar_big' : ''
      }`}
    >
      {props.avatar ? (
        <img alt="avatar" src={props.avatar} className="avatar__img" />
      ) : (
        <div className="avatar__img avatar-img_default">
          <span>{imgDefault()}</span>
        </div>
      )}
    </div>
  );
};
