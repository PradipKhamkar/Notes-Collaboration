import { Avatar } from "antd";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-3 ">
      <p className="text-sm">Made IN</p>
      <Avatar
        shape="square"
        size="small"
        src="https://images.emojiterra.com/twitter/v14.0/512px/1f1ee-1f1f3.png"
      />
    </div>
  );
};

export default Footer;
