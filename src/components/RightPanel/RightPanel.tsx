import * as React from 'react';

import { useApp } from '../../context/AppProvider';

import { buttonClose } from '../Icons/buttonClose';
import { RightPanelSearchMessage } from './RightPanelContent/RightPanelSearchMessage';
import { RightPanelOpenProfile } from './RightPanelContent/RightPanelOpenProfile';

import './RightPanel.css';

export const RightPanel = (): JSX.Element => {
  const appContext = useApp();
  const { actionRightPanel, setActionRightPanel } = appContext;

  /* Закрытие правой панели */
  const closePanel = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => setActionRightPanel(false),
    [setActionRightPanel],
  );

  /* Заголовок правой панели */
  const headerTitle: () => string | boolean = () => {
    switch (actionRightPanel) {
      case 'searchMessage':
        return 'Поиск сообщений';
      case 'openContactProfile':
        return 'Данные контакта';
      default:
        return false;
    }
  };

  /* Контент правой панели */
  const panelContent: () => JSX.Element | boolean = () => {
    switch (actionRightPanel) {
      case 'searchMessage':
        return <RightPanelSearchMessage />;
      case 'openContactProfile':
        return <RightPanelOpenProfile />;
      default:
        return false;
    }
  };

  return (
    <div className="right-panel">
      {actionRightPanel && (
        <div className="right-panel__wrap">
          <div className="right-panel__header">
            <div className="right-panel__close">
              <button onClick={closePanel}>{buttonClose()}</button>
            </div>
            <div className="right-panel__title">{headerTitle()}</div>
          </div>
          <div className="right-panel__content">{panelContent()}</div>
        </div>
      )}
    </div>
  );
};
