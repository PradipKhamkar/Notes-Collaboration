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
} from "./component/Icons/Icon";
import {
  Divider,
  Collapse,
  Select,
  Dropdown,
  Button,
  MenuProps,
  Segmented,
} from "antd";
import { ConditionalRender } from "./component/shared/ConditionalRender";

const App = () => {
  const [closeSidebar, setCloseSideMenu] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex flex-col gap-3 p-0">
          <Button icon={<EditIcon />}>Edit</Button>
          <Button icon={<NavigationIcon />}>Share</Button>
          <Button icon={<DatabaseSyncIcon />}>Archvied</Button>
          <Button
            icon={<DeleteIcon className="text-white" />}
            type="primary"
            danger
          >
            Delete
          </Button>
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <div className="flex">
      <div
        className={`h-[100vh] overflow-auto border-r-[0.01px]  flex flex-col justify-between ${
          closeSidebar ? "max-w-9 overflow-hidden" : "!w-[25%]"
        }`}
      >
        <div>
          <div className="flex bg-white items-center justify-between gap-3 px-2 py-1 flex-wrap">
            <div className="flex gap-2 p-1">
              <NoteIcon className="w-5 h-5" />
              <p className="text-base">Notemate</p>
            </div>
            {/* <SidebarRightIcon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setCloseSideMenu(!closeSidebar)}
            /> */}
          </div>
          <Divider className="m-0 mt-1" />
          <div className="p-1 flex gap-5 flex-col  max-h-[90vh] overflow-auto">
            <div className="flex items-center p-2 gap-2 mt-3 justify-center bg-yellow-300 rounded-md cursor-pointer">
              <AddCircleIcon className="!w-5 !h-5" />
              <ConditionalRender condition={!closeSidebar}>
                <p className="text-sm">Add Note</p>
              </ConditionalRender>
            </div>

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
                      <ConditionalRender condition={!closeSidebar}>
                        <p className="text-sm">Folder</p>
                      </ConditionalRender>
                    </div>
                  ),
                  children: (
                    <div className="flex gap-3 flex-col">
                      <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                          <FolderIcon className="!w-5 !h-5" />
                          <p className="text-sm">Untitled</p>
                        </div>
                        <Dropdown trigger={["click"]} menu={{ items }}>
                          <Button size="small" ghost>
                            <EditIcon />
                          </Button>
                        </Dropdown>
                      </div>

                      <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                          <FolderIcon className="!w-5 !h-5" />
                          <p className="text-sm">Sciences</p>
                        </div>
                        <Dropdown trigger={["click"]} menu={{ items }}>
                          <Button size="small" ghost>
                            <EditIcon />
                          </Button>
                        </Dropdown>
                      </div>

                      <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                          <FolderIcon className="!w-5 !h-5" />
                          <p className="text-sm">Mathematcis</p>
                        </div>
                        <Dropdown trigger={["click"]} menu={{ items }}>
                          <Button size="small" ghost>
                            <EditIcon />
                          </Button>
                        </Dropdown>
                      </div>
                      <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                          <FolderIcon className="!w-5 !h-5" />
                          <p className="text-sm">Geography</p>
                        </div>
                        <Dropdown trigger={["click"]} menu={{ items }}>
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

            <div className="flex items-center gap-2 px-2 ">
              <ShareKnowledgeIcon className="!w-5 !h-5" />
              <ConditionalRender condition={!closeSidebar}>
                <p className="text-sm">Share With Me</p>
              </ConditionalRender>
            </div>

            <div className="flex items-center gap-2 px-2 ">
              <DatabaseSyncIcon className="!w-5 !h-5" />
              <ConditionalRender condition={!closeSidebar}>
                <p className="text-sm">Archived</p>
              </ConditionalRender>
            </div>
          </div>
        </div>

        {/* DARK LIGTH */}
        <div className="mx-auto pb-7">
          <Segmented
            options={[
              { icon: <MoonIcon className="mt-1" />, value: "moon" },
              { icon: <SunIcon className="mt-[0.35rem]" />, value: "sun" },
            ]}
            onChange={(value) => {
              console.log(value); // string
            }}
          />
        </div>
      </div>
      <div className="!w-full py-4">
        <div className="px-2">Header</div>
        <Divider className="m-0 mt-1" />
      </div>
    </div>
  );
};

export default App;
