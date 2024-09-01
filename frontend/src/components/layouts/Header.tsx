import {
  Avatar,
  Typography,
  Layout,
  Button,
  Dropdown,
  MenuProps,
  Divider,
  Input,
} from "antd";
import { NotificationIcon, SearchIcon } from "../Icons";

const Header = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: "hello",
    },
  ];

  return (
    <>
      <Layout.Header
        rootClassName="h-12"
        className="px-5 flex justify-between items-center h-12 bg-transparent"
      >
        <div className="flex gap-2 items-center">
          <Avatar src="https://cdn.iconscout.com/icon/premium/png-512-thumb/notes-10334125-8526949.png?f=webp&w=256" />
          <Typography.Text className="text-base font-medium hidden md:block">
            Note Mate
          </Typography.Text>
        </div>

        <div className="flex justify-center items-center gap-3">
          <Input
            suffix={<SearchIcon className="w-5 h-5 opacity-75" />}
            placeholder="Type to search"
          />
          <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
            <Button
              icon={<NotificationIcon className="w-5 h-5" />}
              ghost
              className="border-none"
            />
          </Dropdown>

          <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
            <Avatar
              shape="circle"
              size="large"
              src="https://avatars.githubusercontent.com/u/119717646?s=48&v=4"
            />
          </Dropdown>
        </div>
      </Layout.Header>
      <Divider className="mt-1" />
    </>
  );
};

export default Header;
