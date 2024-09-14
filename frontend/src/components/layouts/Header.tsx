import { Avatar, Input, Tooltip, Button } from "antd";
import {
  ArrowDown01Icon,
  HangerIcon,
  Notification03Icon,
  Search01Icon,
  SidebarLeftIcon,
} from "hugeicons-react";

interface IPHEADER {
  sidebarVisible: boolean;
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: IPHEADER) => {
  const { setSidebarVisible, sidebarVisible } = props;
  return (
    <div className="p-2 flex justify-between items-center !w-full h-12">
      <div className="flex justify-center items-center gap-2">
        {!sidebarVisible && (
          <SidebarLeftIcon size={18} onClick={() => setSidebarVisible(true)} />
        )}
        {/* <div className="flex justify-center items-center gap-2">
          <Search01Icon size={16} />
          <input
            type="text"
            placeholder="Search"
            className="text-sm outline-none border-none"
          />
        </div> */}
      </div>
      <div className="flex justify-center items-center gap-3">
        <Notification03Icon size={20} />
        <Avatar
          size={28}
          src="https://images.livemint.com/img/2019/12/06/600x338/Apple-kAtG--621x414@LiveMint_1575619486988.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
