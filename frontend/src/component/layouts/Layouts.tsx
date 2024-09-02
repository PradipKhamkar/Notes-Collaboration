import { Divider, Layout } from "antd";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { ConditionalRender } from "../shared/ConditionalRender";
import NoteCard from "../shared/NoteCard";
import { dummyNotesData } from "../../data/dummyNote";
import { folderData } from "../../data/dummyFolders";
import FolderCard from "../shared/FolderCard";
const { Sider, Content } = Layout;

const Layouts = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(true);

  return (
    <Layout className="h-[100vh] overflow-hidden !bg-transparent">
      <Layout.Header className="dark:bg-[#2D3033] bg-white flex flex-col justify-center items-center">
        <Header sideNavOpen={sideNavOpen} toggleSideNav={setSideNavOpen} />
      </Layout.Header>
      <Layout className="!bg-transparent">
        <ConditionalRender condition={sideNavOpen}>
          <Sider
            width="23%"
            className="overflow-auto !bg-white dark:!bg-[#2D3033] "
          >
            <Sidenav />
          </Sider>
        </ConditionalRender>
        <Content className="p-2 overflow-auto">
          <div className="!rounded-lg flex justify-start items-center gap-2 flex-wrap !w-full overflow-auto">
            {folderData.map((data) => (
              <FolderCard
                collaborators={data.collaborators}
                config={data.config}
                created_by={data.created_by}
                pin_at={data.pin_at}
                name={data.name}
              />
            ))}

            {/* {dummyNotesData.map((data) => (
              <NoteCard
                data={data.data}
                title={data.title}
                config={data.config}
              />
            ))} */}
          </div>
        </Content>
      </Layout>
      <Layout.Footer className="p-0 m-0 dark:bg-[#2D3033] bg-white">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Layouts;
