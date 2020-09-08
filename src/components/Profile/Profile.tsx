import * as React from 'react';

import { User } from '../../model/User/User';
import { Contact } from '../../model/Contact/Contact';

import { AvatarImg } from '../AvatarImg/AvatarImg';

import './Profile.css';

interface IProfile {
  profile: User | Contact;
  profileContact?: boolean;
  avatarSize: string;
}

export const Profile = (props: IProfile): JSX.Element => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <AvatarImg avatar={props.profile.avatar} size={props.avatarSize} />
      </div>
      {props.profileContact && (
        <div className="profile__info">
          <span title={props.profile.name} className="profile__name">
            {props.profile.name}
          </span>
          {props.profile instanceof Contact && (
            <span title={props.profile.lastVisit} className="profile__visit">
              был(-а) {props.profile.lastVisit}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
