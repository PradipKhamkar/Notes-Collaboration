import {
  DatabaseSyncIcon,
  DeleteIcon,
  EditIcon,
  MoonIcon,
  NavigationIcon,
  ShareKnowledgeIcon,
  SunIcon,
} from "../Icons/Icon";

import {
  EditOutlined,
  FolderTwoTone,
  MoreOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Collapse, Dropdown, MenuProps, Segmented } from "antd";
import useTheme, { Mode } from "../../hooks/useTheme";
import { folders } from "../../data/dummyFolders";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <>
        <Button
          type="plain"
          icon={<EditIcon className="w-3 h-3" />}
          size="small"
        >
          Edit
        </Button>
      </>
    ),
  },
  { type: "divider" },
  {
    key: "2",
    label: (
      <>
        <Button
          type="plain"
          icon={<NavigationIcon className="w-3 h-3" />}
          size="small"
        >
          Share
        </Button>
      </>
    ),
  },
  { type: "divider" },
  {
    key: "3",
    label: (
      <>
        <Button
          type="plain"
          icon={<DeleteIcon className="w-3 h-3" />}
          size="small"
        >
          Delete
        </Button>
      </>
    ),
  },
  { type: "divider" },
  {
    key: "4",
    label: (
      <>
        <Button
          type="plain"
          icon={<DatabaseSyncIcon className="w-3 h-3" />}
          size="small"
        >
          Archived
        </Button>
      </>
    ),
  },
  { type: "divider" },
  {
    key: "5",
    label: (
      <>
        <Button
          type="plain"
          icon={<UserOutlined className="w-3 h-3" />}
          size="small"
        >
          Collaborate
        </Button>
      </>
    ),
  },
];

const Sidenav = () => {
  const { mode, toggleMode } = useTheme();
  return (
    <div className="p-3 flex flex-col justify-between !h-full !w-full">
      <div className="p-3 flex flex-col gap-3">
        <div>
          {/* FOLDER */}
          <Collapse
            bordered={false}
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
                    <FolderTwoTone className="!w-5 !h-5" />
                    <p className="text-sm">Folder</p>
                  </div>
                ),
                children: (
                  <div className="flex gap-5 flex-col max-h-52 overflow-auto hide-scrollbar">
                    {folders.map((item) => {
                      return (
                        <>
                          <div className="flex  justify-between items-center cursor-pointer">
                            <div className="flex justify-center items-center gap-2">
                              <Avatar size="small">{item.config.icon}</Avatar>
                              {item.name}
                            </div>
                            <Dropdown
                              menu={{ items }}
                              trigger={["click"]}
                              placement="bottomLeft"
                            >
                              <MoreOutlined />
                            </Dropdown>
                          </div>
                        </>
                      );
                    })}
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
