import React, { useContext } from 'react';
import Context from '../../context/context';

import { buttonClose } from '../Icons/buttonClose';
import RightPanelSearchMessage from './RightPanelContent/RightPanelSearchMessage';
import RightPanelOpenProfile from './RightPanelContent/RightPanelOpenProfile';
import './RightPanel.css';

export default function RightPanel() {
  const { actionRightPanel, setActionRightPanel } = useContext(Context);

  /* Закрытие правой панели */
  const closePanel = () => setActionRightPanel(false);

  /* Заголовок правой панели */
  const headerTitle = () => {
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
  const panelContent = () => {
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
}
