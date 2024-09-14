import { ArrowRight02Icon, Cancel01Icon } from "hugeicons-react";
import * as React from "react";

interface IPSIDEBAR {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: IPSIDEBAR) => {
  return (
    <div className="w-full !h-full bg-purple-600 text-white">
      <div className=" border-[#eeee] p-2 h-10 flex justify-between items-center bg-purple-900">
        <p>Note Mate</p>
        <Cancel01Icon size={18} onClick={() => props.setVisible(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
