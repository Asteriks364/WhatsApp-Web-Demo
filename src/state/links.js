import { statusIcon } from '../components/Icons/statusIcon';
import { newChatIcon } from '../components/Icons/newChatIcon';
import { menuIcon } from '../components/Icons/menuIcon';
import { searchIcon } from '../components/Icons/searchIcon';
import { attachIcon } from '../components/Icons/attachIcon';

export const links = {
  status: {
    title: 'Статус',
    icon: statusIcon(),
  },
  newChat: {
    title: 'Новый чат',
    icon: newChatIcon(),
  },
  menu: {
    title: 'Меню',
    icon: menuIcon(),
  },
  search: {
    title: 'Поиск...',
    icon: searchIcon(),
  },
  attach: {
    title: 'Приложить',
    icon: attachIcon(),
  },
};
