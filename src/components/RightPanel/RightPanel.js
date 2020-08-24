import React, { useContext, useState } from 'react';
import Context from '../../context/context';

import { buttonClose } from '../Icons/buttonClose';
import Search from '../Search/Search';
import RightPanelMessageList from './RightPanelMessageList';
import './RightPanel.css';

export default function RightPanel() {
  const { openRightPanel, setOpenRightPanel } = useContext(Context);

  /* строка поиска по сообщениям */
  const [searchMessage, setSearchMessage] = useState('');

  /* Закрытие правой панели */
  const closePanel = () => setOpenRightPanel(false);

  return (
    <div className="right-panel">
      {openRightPanel && (
        <div className="right-panel__wrap">
          <div className="right-panel__header">
            <div className="right-panel__close">
              <button onClick={closePanel}>{buttonClose()}</button>
            </div>
            <div className="right-panel__title">Поиск сообщений</div>
          </div>
          <div className="right-panel__content">
            <Search
              search={searchMessage}
              setSearch={setSearchMessage}
              searchPlaceholder="Поиск..."
            />
            <RightPanelMessageList searchMessage={searchMessage} />
          </div>
        </div>
      )}
    </div>
  );
}
