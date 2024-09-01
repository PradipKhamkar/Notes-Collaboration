import { useState } from "react";
import {
  AddCircleIcon,
  DatabaseSyncIcon,
  DeleteIcon,
  EditIcon,
  FolderIcon,
  MoonIcon,
  NavigationIcon,
  NoteIcon,
  ShareKnowledgeIcon,
  SidebarRightIcon,
  SunIcon,
} from "../Icons/Icon";

import { Collapse, Select, Dropdown, Button, MenuProps, Segmented } from "antd";
import useTheme, { Mode } from "../../hooks/useTheme";

const Sidenav = () => {
  const { mode, toggleMode } = useTheme();
  return (
    <div className="p-3 flex flex-col justify-between !h-full !w-full">
      <div className="p-3 flex flex-col gap-3">
        <div className="flex justify-center items-center ">
          <Button
            icon={<AddCircleIcon className="text-white" />}
            ghost
            type="text"
            className="!bg-pink-500 text-white !hover:text-white !w-full"
          >
            Add Note
          </Button>
        </div>

        <div>
          {/* FOLDER */}
          <Collapse
            //collapsible="disabled"
            defaultActiveKey={["1"]}
            onChange={() => {}}
            size="small"
            expandIconPosition="end"
            items={[
              {
                key: "1",
                label: (
                  <div className="flex items-center gap-2 ">
                    <FolderIcon className="!w-5 !h-5" />
                    <p className="text-sm">Folder</p>
                  </div>
                ),
                children: (
                  <div className="flex gap-3 flex-col">
                    <div className="flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-2">
                        <FolderIcon className="!w-5 !h-5" />
                        <p className="text-sm">Untitled</p>
                      </div>
                      <Dropdown trigger={["click"]} menu={{}}>
                        <Button size="small" ghost>
                          <EditIcon />
                        </Button>
                      </Dropdown>
                    </div>
                  </div>
                ),
                extra: (
                  <div className="mt-[1.6px]">
                    <AddCircleIcon onClick={() => {}} />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="flex gap-3 flex-col">
        <div className="flex items-center gap-2 px-2 ">
          <ShareKnowledgeIcon className="!w-5 !h-5" />
          <p className="text-sm">Collbrations</p>
        </div>

        <div className="flex items-center gap-2 px-2 ">
          <DatabaseSyncIcon className="!w-5 !h-5" />
          <p className="text-sm">Archived</p>
        </div>

        <div className="mx-auto mt-5">
          <Segmented
            value={mode}
            options={[
              { icon: <MoonIcon className="mt-1" />, value: "dark" },
              { icon: <SunIcon className="mt-[0.35rem]" />, value: "light" },
            ]}
            onChange={(value: Mode) => toggleMode(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
