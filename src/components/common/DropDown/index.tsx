import DropDownButton from './ui/DropDownButton';
import DropDownMain from './ui/DropDownMain';
import DropDownMenuItem from './ui/DropDownMenuItem';
import DropDownMenus from './ui/DropDownMenus';

export const DorpDown = Object.assign(DropDownMain, {
  Button: DropDownButton,
  Menus: DropDownMenus,
  MenuItem: DropDownMenuItem,
});
