import { Divider, Layout } from "antd";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { ConditionalRender } from "../shared/ConditionalRender";
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
        <Content className="p-2">
          <div className="!rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            atque repellendus maxime reprehenderit ducimus quaerat aspernatur
            totam, magnam rerum nobis, officia eveniet consectetur? Perspiciatis
            maxime sapiente, saepe dicta, doloremque hic sequi consequuntur sed
            excepturi aut consequatur odit ipsa. Nisi aut est mollitia
            cupiditate doloribus quia aliquid eum, error ut consequatur quas
            nemo non quisquam atque blanditiis magnam fugiat aliquam quo labore
            cum impedit, explicabo vero quibusdam rerum. Sequi similique ducimus
            dolores quod, voluptatem numquam quas pariatur aperiam
            necessitatibus! Dolor quaerat soluta consequatur, molestiae natus id
            debitis saepe. Eveniet laborum accusamus debitis placeat voluptates.
            Iusto eius ipsam eum et mollitia in.
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
