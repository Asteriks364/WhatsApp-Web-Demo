import * as React from 'react';

import { useApp } from '../../context/AppProvider';

import { ILink } from './Interface/ILink';

import './Link.css';

export const Link = (props: ILink): JSX.Element => {
  const appContext = useApp();
  const { setActionRightPanel } = appContext;

  const [isOpen, setOpen] = React.useState<boolean>(false);

  const clickLink = React.useCallback(() => {
    if (props.onClick) return props.onClick();
    if (props.action === 'searchMessage') return setActionRightPanel('searchMessage');
    setOpen(!isOpen);
    alert(!isOpen ? 'открыть ' + props.title : 'закрыть ' + props.title);
  }, [isOpen, props, setActionRightPanel]);

  return (
    <div className={`link ${isOpen ? 'link_active' : ''}`}>
      <div role="button" title={props.title} onClick={clickLink}>
        <span>{props.icon}</span>
      </div>
    </div>
  );
};
