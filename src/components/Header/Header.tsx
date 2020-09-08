import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { User } from '../../model/User/User';
import { Contact } from '../../model/Contact/Contact';

import { ILink } from '../Link/Interface/ILink';

import { Profile } from '../Profile/Profile';
import { Link } from '../Link/Link';

import './Header.css';

export interface IHeader {
  user: User | Contact;
  links: Array<ILink>;
  profileContact?: boolean;
}

export const Header = (props: IHeader): JSX.Element => {
  const appContext = useApp();
  const { setActionRightPanel } = appContext;

  const openUserCard = React.useCallback((): void => {
    return props.profileContact ? setActionRightPanel('openContactProfile') : console.log('open');
  }, [props.profileContact, setActionRightPanel]);

  return (
    <header className="header">
      <div className="header__user" role="button" onClick={openUserCard}>
        <Profile profile={props.user} profileContact={props.profileContact} avatarSize="small" />
      </div>
      <div className="header__link-block">
        {props.links.map((link, index) => (
          <Link key={index} title={link.title} icon={link.icon} action={link.action} />
        ))}
      </div>
    </header>
  );
};
