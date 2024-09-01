import { Divider, Layout } from "antd";
import { useState } from "react";
import Footer from "../component/layouts/Footer";
import Header from "../component/layouts/Header";
import Sidenav from "../component/layouts/Sidenav";
import { ConditionalRender } from "../component/shared/ConditionalRender";
const { Sider, Content } = Layout;

const Layouts = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(true);
  return (
    <Layout className="h-[100vh] overflow-hidden">
      <Layout.Header className="bg-white flex flex-col justify-center items-center">
        <Header sideNavOpen={sideNavOpen} toggleSideNav={setSideNavOpen} />
      </Layout.Header>
      <Layout>
        <ConditionalRender condition={sideNavOpen}>
          <Sider width="23%" className="overflow-auto  !bg-white">
            <Sidenav />
          </Sider>
        </ConditionalRender>
        <Content className="px-2 bg-[#eee]">
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
      <Layout.Footer className="p-0 m-0 bg-white">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Layouts;
