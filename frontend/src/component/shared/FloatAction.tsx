import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { AddCircleIcon, FolderIcon, NoteIcon } from "../Icons/Icon";

const FloatAction = () => {
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      className="mb-6"
      icon={<PlusOutlined />}
    >
      <FloatButton tooltip={<div>Add Folder</div>} icon={<FolderIcon />} />
      <FloatButton tooltip={<div>Add Note</div>} icon={<NoteIcon />} />
    </FloatButton.Group>
  );
};

export default FloatAction;
