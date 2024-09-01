import { Avatar, Button, Divider, Input, Popover } from "antd";
import {
  MoonIcon,
  NotificationIcon,
  SearchIcon,
  SidebarRightIcon,
} from "../Icons/Icon";

interface IPROPS {
  toggleSideNav: Function;
  sideNavOpen: boolean;
}
const Header = (props: IPROPS) => {
  const { toggleSideNav, sideNavOpen } = props;
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <SidebarRightIcon
            onClick={() => toggleSideNav(!sideNavOpen)}
            className="w-5 h-5 cursor-pointer"
          />
          <div className="items-center hidden md:flex gap-2">
            <Avatar
              size="small"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <p className="text-base">Notemate</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Input placeholder="Type to search..!" suffix={<SearchIcon />} />
          <NotificationIcon className="w-6 h-6 cursor-pointer" />
          <Popover content={<>JUST OPEN</>} title="Title" trigger="click">
            <Avatar
              className="cursor-pointer"
              src="https://avatars.githubusercontent.com/u/119717646?v=4"
              size="default"
            />
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
