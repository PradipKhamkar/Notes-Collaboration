import { Avatar, Badge, Button, Divider, Input, Popover } from "antd";
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
      <div className="w-full flex justify-between items-center dark:!text-white">
        <div className="flex justify-center items-center gap-3">
          <SidebarRightIcon
            onClick={() => toggleSideNav(!sideNavOpen)}
            className="w-5 h-5 cursor-pointer dark:text-white"
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
          <div className="flex relative">
            <Badge className="absolute -top-8 left-2" status="processing" />
            <NotificationIcon className="w-4 h-4 cursor-pointer dark:text-white" />
          </div>
          <Popover
            content={<>JUST OPEN</>}
            title="Title"
            trigger="click"
            className="dark:!bg-[#2D3033]"
          >
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
