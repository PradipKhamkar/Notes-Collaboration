import { ArrowRight02Icon, Cancel01Icon } from "hugeicons-react";
import * as React from "react";

interface IPSIDEBAR {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: IPSIDEBAR) => {
  return (
    <div className="w-full !h-full">
      <div className=" border-[#eeee] border-b-[0.2px] p-2 h-12 flex justify-between items-center">
        <p>Note Mate</p>
        <Cancel01Icon size={18} onClick={() => props.setVisible(false)} />
      </div>

      <div className="flex flex-col justify-between !h-[90%]">
        <div className="p-3 h-[100%] overflow-auto">options</div>
        <div className="border-t-[0.2px] p-1 px-3">FOOTER</div>
      </div>
    </div>
  );
};

export default Sidebar;
