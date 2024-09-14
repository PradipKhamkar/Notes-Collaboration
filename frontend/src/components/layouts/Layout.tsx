import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sideBarVisible, setSidebarVisible] = useState<boolean>(true);

  return (
    <div className="flex  relative">
      {sideBarVisible && (
        <div className="h-screen  bg-white z-10 !w-full md:min-w-[20%]  absolute border-r-[0.2px]  md:relative">
          <Sidebar setVisible={setSidebarVisible} />
        </div>
      )}
      <div className="">
        <div
          className={`${
            sideBarVisible ? "!w-[80%]" : "!w-full"
          }  fixed border-b-[#eeee] border-b-[0.2px] bg-white`}
        >
          <Header
            setSidebarVisible={setSidebarVisible}
            sidebarVisible={sideBarVisible}
          />
        </div>
        <div className="overflow-auto !h-screen pt-16 px-3 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          necessitatibus nemo atque deleniti enim odio? Porro consectetur soluta
          animi quis. Doloribus dolorem perferendis iste ducimus beatae nihil
          perspiciatis! Numquam qui cumque accusantium optio aperiam odit velit,
          recusandae, dolores deleniti sunt, eum eaque praesentium quibusdam!
          Ullam tenetur nemo deleniti vero quidem obcaecati eos! Corrupti
          accusantium laborum quas a vero ea eos doloremque eaque, quo nesciunt
          maxime ut, earum exercitationem eveniet modi minima ad aliquid
          doloribus deserunt id impedit ipsa? Enim repudiandae dicta dolores
          aperiam! Unde obcaecati perspiciatis est dolores sint, hic eligendi
          cum impedit facilis recusandae alias omnis corporis totam voluptatum
          maiores eveniet cupiditate voluptas accusamus sunt excepturi nam
          tempora doloribus, enim deleniti? Repudiandae maxime asperiores
          praesentium assumenda dolores quae excepturi quidem at quas a,
          reprehenderit eligendi sequi iure consequuntur dolor neque tempore cum
          ut earum numquam adipisci doloremque doloribus reiciendis. Blanditiis
          voluptatem non fugit perspiciatis animi eum inventore, quo sit
          architecto qui corrupti voluptatum explicabo nesciunt! Voluptatibus
          reiciendis sunt inventore quia totam earum alias voluptate blanditiis
          natus, laborum neque aspernatur hic magni ut dolore repellendus
          aperiam in dolor! Eius commodi, enim a cumque expedita at perspiciatis
          quae eveniet dolorem provident quos ducimus quibusdam vero dicta
          deleniti reiciendis atque eligendi et nihil distinctio. Natus atque
          neque, laudantium quas veniam accusamus cupiditate vero aperiam labore
          assumenda obcaecati dolorem a perferendis similique blanditiis eos ex
          in quos. Natus ullam explicabo minima delectus qui deleniti, eveniet
          odit dolor atque. Dolorum rem veniam sint, impedit dignissimos facilis
          quam rerum perferendis recusandae consequatur, consectetur, fugit quia
          similique pariatur repellendus obcaecati sunt et atque corporis error
          in! Accusantium voluptas unde ipsa! Ea adipisci necessitatibus
          deserunt qui? Animi necessitatibus velit tempore! Aspernatur ullam
          consectetur molestias iure omnis voluptates, sit alias perspiciatis
          nesciunt asperiores, ex debitis voluptatum voluptatem eius excepturi
          numquam quasi vel. Adipisci ex ut, iste excepturi maiores
          necessitatibus, quibusdam nihil atque nulla ipsum nisi suscipit harum
          non cumque id culpa! Officia perspiciatis amet sequi corrupti
          praesentium totam fuga sint alias exercitationem! Odio laudantium
          officiis qui atque dolor illo deleniti nisi corrupti mollitia, esse
          numquam dignissimos unde, molestiae non! Veniam soluta suscipit
          molestiae pariatur expedita doloribus aliquam reprehenderit, dicta
          deleniti eaque? Voluptatibus ea eaque, dolore iure, repellendus hic
          magnam maiores eveniet eos similique fugiat vitae nisi laborum vero
          accusantium aliquid in quod, explicabo dignissimos nostrum blanditiis.
          Eaque veritatis sapiente, laudantium assumenda sed autem similique,
          eligendi, incidunt nisi tempora vel. Iure quibusdam deleniti quam fuga
          ab eius recusandae ratione aperiam libero unde. Optio eos earum
          dolorum tenetur harum molestiae sequi aliquid ut numquam deserunt!
          Obcaecati, sint ipsa blanditiis minus, neque cumque molestias culpa
          modi earum iste omnis. Velit ratione tempore magnam cupiditate culpa
          harum sequi eaque? Aperiam recusandae quam illum animi maiores
          inventore impedit tenetur sunt rem. Incidunt, explicabo atque.
          Recusandae, fugiat? Excepturi, deleniti? Eveniet molestias saepe odit
          quaerat, dolore enim magnam adipisci exercitationem odio? Commodi
          necessitatibus non ratione, voluptate doloribus architecto! Accusamus
          quod odio quibusdam! Asperiores error eligendi magni vero, ducimus
          animi esse veniam architecto soluta rerum explicabo eveniet doloremque
          totam quo fuga vitae est fugit nostrum consequuntur veritatis qui
          accusantium tempore placeat? Ad consectetur officiis provident neque
          odit quae, assumenda doloremque pariatur tempora saepe rerum error
          laborum eaque sint impedit placeat magni? At est natus accusantium
          fugiat totam pariatur aliquam ut, omnis, possimus incidunt quae
          veritatis explicabo, aperiam necessitatibus repudiandae cupiditate
          modi laudantium maiores perspiciatis. Necessitatibus magni dolor odio,
          ducimus saepe deleniti eos facilis iusto voluptatibus odit ex totam
          ipsam eveniet, dicta dignissimos unde ut non consequuntur autem hic
          iure debitis aut accusantium! Odio, facilis similique sapiente maxime
          quisquam inventore? Quis qui natus alias dignissimos sit vero
          necessitatibus et. Eligendi beatae saepe voluptatibus vitae accusamus
          velit, quidem excepturi fugit. Ipsam soluta molestiae accusantium ex!
          Doloribus ea ex amet fugiat. Magnam quas laudantium atque. Optio quis
          harum praesentium aut molestiae veritatis voluptatibus nesciunt maxime
          exercitationem impedit, aspernatur, cum id vel culpa blanditiis porro
          aperiam repellendus nisi molestias ab error voluptates! Harum
          doloribus eveniet placeat quisquam officia qui ratione aliquam
          accusantium corporis, fuga, autem odio asperiores sunt ad quidem?
          Ducimus dicta numquam deserunt nulla sapiente, aliquid, molestiae
          magnam aut mollitia explicabo quia, repellendus ratione impedit
          architecto. Debitis, quia accusantium magnam perferendis reprehenderit
          molestias non, iste aspernatur iure animi quas possimus quod veniam
          amet omnis quis dolorem placeat ullam? Quaerat, quod alias odio
          delectus in quos aliquid tempora animi, doloremque inventore a tempore
          libero, laboriosam voluptate cupiditate? Maiores ut id mollitia
          doloribus dolor odit deleniti minus eius fugiat consequuntur
          blanditiis nobis repellendus voluptates ullam beatae nemo aliquam,
          quia perspiciatis? Ducimus et voluptate labore tenetur explicabo,
          exercitationem voluptatem iusto sequi consectetur deleniti doloremque
          harum, nostrum nulla voluptatum deserunt. Ipsum facilis itaque debitis
          reiciendis sed nobis maiores repellat accusantium tenetur assumenda
          vero dolor cupiditate nisi officiis alias in officia excepturi
          praesentium illo impedit aspernatur perspiciatis, possimus provident
          a! Fugiat itaque quae assumenda provident explicabo nemo sapiente
          doloribus accusantium dolorem cum magnam, modi facere aliquid deleniti
          officia odit laudantium possimus, dignissimos laboriosam repellendus!
          Soluta sapiente, provident quasi est doloremque quam odio fuga
          molestiae explicabo dicta libero iusto eveniet numquam sed architecto
          maxime enim officiis quas necessitatibus veritatis! Nobis omnis rem,
          deserunt qui delectus dignissimos, consequatur nemo, tenetur repellat
          deleniti id error perferendis excepturi. Itaque soluta minima, ratione
          vel quas eos quis, facilis asperiores pariatur velit expedita
          doloribus vitae, dolorum quasi eveniet amet explicabo adipisci eius.
          Iste rerum reiciendis dolor nemo voluptatibus similique deleniti magni
          aperiam. Dignissimos consequuntur impedit fugit incidunt dolore in
          expedita deserunt numquam! Provident, voluptatibus veritatis quod ab
          distinctio deserunt laborum, consequatur minima quaerat maiores
          eligendi hic, eum suscipit vel tempora? Dolore ipsum ex ad unde,
          dolores veritatis, magni voluptate minima voluptatem, repellat ab
          natus id aperiam in delectus dolorem vitae aspernatur repudiandae.
          Assumenda doloremque architecto atque sit quam corrupti eligendi
          vitae, repudiandae dicta, hic dolore incidunt reiciendis! Labore
          accusantium aspernatur modi id numquam autem asperiores corrupti
          veritatis, doloremque, molestiae officia voluptates, nam tempora eaque
          qui. Qui nostrum vero officiis necessitatibus nulla, tempore illum
          magni repellendus neque debitis labore provident ipsa earum sequi cum
          blanditiis recusandae, tenetur odit quas? Provident excepturi labore
          nemo ullam ad? Accusamus laborum distinctio nobis odit provident.
        </div>
      </div>
    </div>
  );
};

export default Layout;
