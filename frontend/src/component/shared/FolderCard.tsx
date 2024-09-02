import {
  Avatar,
  Badge,
  Card,
  Divider,
  Flex,
  Switch,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { ReactNode } from "react";
import {
  DatabaseSyncIcon,
  DeleteIcon,
  EditIcon,
  MoreIcon,
  NavigationIcon,
  NoteIcon,
} from "../Icons/Icon";
import { ConditionalRender } from "./ConditionalRender";
import { IFOLDER } from "./types/folderType";

const FolderCard = (props: IFOLDER) => {
  const { name, config, collaborators } = props;

  const actions: ReactNode[] | undefined = [
    <ConditionalRender condition={collaborators?.length !== 0}>
      <Avatar.Group
        className="!p-0 -mt-1"
        size="small"
        max={{
          count: 1,
          style: { color: "#f56a00", backgroundColor: "#fde3cf" },
        }}
      >
        {collaborators?.map((user) => (
          <Avatar size="small" style={{ backgroundColor: "#f56a00" }}>
            {user.name.split("")[0]}
          </Avatar>
        ))}
      </Avatar.Group>
    </ConditionalRender>,

    <div className="text-center flex justify-center items-center">
      <Tooltip title="Share">
        <NavigationIcon />
      </Tooltip>
    </div>,
    <div className="text-center flex justify-center items-center">
      <Tooltip title="Edit">
        <EditIcon />
      </Tooltip>
    </div>,
    <div className="text-center flex justify-center items-center">
      <Tooltip title="Delete" color="red">
        <DeleteIcon />
      </Tooltip>
    </div>,
  ];

  return (
    <Card
      size="small"
      classNames={{ actions: "!p-0 !m-0 !h-10" }}
      loading={false}
      actions={actions}
      className="!w-full max-w-72 "
    >
      <Card.Meta
        title={
          <>
            <div className="flex justify-between items-center">
              <Avatar icon={config?.icon} />
              <Tag color="success">3 Days Ago</Tag>
            </div>
            <Typography.Paragraph
              ellipsis={{ rows: 1, tooltip: { title: name } }}
              className="!break-words cursor-pointer !m-0 p-0"
            >
              {name}
            </Typography.Paragraph>
            <Tag color="orange">20 Note</Tag>
          </>
        }
      />
      {/* <div className="h-12 overflow-auto mt-1 hide-scrollbar">
        <Typography.Paragraph ellipsis={{ rows: 2 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          unde ipsam laudantium eveniet ullam, quod corporis totam et
          voluptatem! Nam.
        </Typography.Paragraph>
      </div> */}
    </Card>
  );
};

export default FolderCard;
