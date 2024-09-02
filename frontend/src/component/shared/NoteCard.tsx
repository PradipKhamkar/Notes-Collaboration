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
import { INOTE } from "./types/noteType";

const NoteCard = (props: INOTE) => {
  const { title, data, config } = props;
  const actions: ReactNode[] | undefined = [
    <Avatar.Group
      className="!p-0 -mt-1"
      size="small"
      max={{
        count: 1,
        style: { color: "#f56a00", backgroundColor: "#fde3cf" },
      }}
    >
      <Avatar
        size="small"
        src="https://avatars.githubusercontent.com/u/119717646?s=48&v=4"
      />
      <Avatar size="small" style={{ backgroundColor: "#f56a00" }}>
        K
      </Avatar>
      <Tooltip title="Pradip Khamkar" placement="top">
        <Avatar
          size="small"
          src="https://avatars.githubusercontent.com/u/119717646?s=48&v=4"
          style={{ backgroundColor: "#87d068" }}
          // icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{ backgroundColor: "#1677ff" }}
        src="https://avatars.githubusercontent.com/u/119717646?s=48&v=4"
        // icon={<AntDesignOutlined />}
      />
    </Avatar.Group>,
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
      classNames={{ actions: "!p-0 !m-0 !h-10", body: "!pb-1 !m-0" }}
      loading={false}
      actions={actions}
      className="!w-full max-w-72 "
    >
      <Card.Meta
        title={
          <>
            <div className="flex justify-between items-center">
              <Avatar src={config?.theme?.icon} />
              <Tag color="success">5 Days Ago</Tag>
            </div>
            <Typography.Paragraph
              ellipsis={{ rows: 1, tooltip: { title } }}
              className="!break-words cursor-pointer !m-0 p-0"
            >
              {title}
            </Typography.Paragraph>
          </>
        }
      />
      <div className="h-12 overflow-auto mt-1 hide-scrollbar">
        <Typography.Paragraph ellipsis={{ rows: 2 }}>
          {data}
        </Typography.Paragraph>
      </div>
    </Card>
  );
};

export default NoteCard;

// <Card
// //extra={<p>jnj</p>}
// size="small"
// // cover={<p>Cover</p>}
// classNames={{ actions: "!p-0 !m-0 !h-10", body: "!pb-1 !m-0" }}
// loading={false}
// actions={actions}
// className="!w-full max-w-72"
// >
// <Card.Meta
//   avatar={<Avatar src={config?.theme?.icon} />}
//   title={
//     <>
//       <Typography.Paragraph
//         ellipsis={{ rows: 1, tooltip: { title } }}
//         className="!break-words cursor-pointer !m-0 p-0"
//       >
//         {title}
//       </Typography.Paragraph>
//     </>
//   }
// />
// {/* <div className="max-h-48 overflow-auto mt-1 hide-scrollbar">
//   <Typography.Text>{data}</Typography.Text>
// </div> */}
// </Card>
