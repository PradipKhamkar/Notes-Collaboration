import { useState } from "react";
import {
  AddCircleIcon,
  DatabaseSyncIcon,
  DeleteIcon,
  EditIcon,
  FolderIcon,
  MoonIcon,
  NavigationIcon,
  NoteIcon,
  ShareKnowledgeIcon,
  SidebarRightIcon,
  SunIcon,
} from "../Icons/Icon";

import { Collapse, Select, Dropdown, Button, MenuProps, Segmented } from "antd";

const Sidenav = () => {
  return (
    <div className="p-3 flex flex-col justify-between !h-full !w-full">
      <div className="p-3 flex flex-col gap-3">
        <div className="flex justify-center items-center ">
          <Button
            icon={<AddCircleIcon className="text-white" />}
            ghost
            type="text"
            className="!bg-pink-500 text-white !hover:text-white !w-full"
          >
            Add Note
          </Button>
        </div>

        <div>
          {/* FOLDER */}
          <Collapse
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
                    <FolderIcon className="!w-5 !h-5" />
                    <p className="text-sm">Folder</p>
                  </div>
                ),
                children: (
                  <div className="flex gap-3 flex-col">
                    <div className="flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-2">
                        <FolderIcon className="!w-5 !h-5" />
                        <p className="text-sm">Untitled</p>
                      </div>
                      <Dropdown trigger={["click"]} menu={{}}>
                        <Button size="small" ghost>
                          <EditIcon />
                        </Button>
                      </Dropdown>
                    </div>
                  </div>
                ),
                extra: (
                  <div className="mt-[1.6px]">
                    <AddCircleIcon onClick={() => {}} />
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
            options={[
              { icon: <MoonIcon className="mt-1" />, value: "moon" },
              { icon: <SunIcon className="mt-[0.35rem]" />, value: "sun" },
            ]}
            onChange={(value) => {
              console.log(value); // string
            }}
          />
        </div>
      </div>
    </div>
    // <div></div>
    // // className={`h-[100vh] hidden md:flex overflow-auto border-r-[0.01px]  flex-col justify-between ${
    // //   closeNav ? "max-w-9 overflow-hidden" : "!w-96"
    // // }`}
    // >
    //   <div>
    //     <div className="flex bg-white items-center justify-between gap-3 px-2 py-1 flex-wrap">
    //       <div className="flex gap-2 p-1">
    //         <NoteIcon className="w-5 h-5" />
    //         <p className="text-base">Notemate</p>
    //       </div>
    //       <SidebarRightIcon
    //         className="w-5 h-5 cursor-pointer"
    //         onClick={() => setCloseNav(!closeNav)}
    //       />
    //     </div>
    //     <Divider className="m-0 mt-1" />
    //     <div className="p-1 flex gap-5 flex-col  max-h-[90vh] overflow-auto">
    //       <div className="flex items-center p-2 gap-2 mt-3 justify-center bg-yellow-300 rounded-md cursor-pointer">
    //         <AddCircleIcon className="!w-5 !h-5" />
    //         <ConditionalRender condition={!closeNav}>
    //           <p className="text-sm">Add Note</p>
    //         </ConditionalRender>
    //       </div>

    //       {/* FOLDER */}
    //       <Collapse
    //         //collapsible="disabled"
    //         defaultActiveKey={["1"]}
    //         onChange={() => {}}
    //         size="small"
    //         expandIconPosition="end"
    //         items={[
    //           {
    //             key: "1",
    //             label: (
    //               <div className="flex items-center gap-2 ">
    //                 <FolderIcon className="!w-5 !h-5" />
    //                 <ConditionalRender condition={!closeNav}>
    //                   <p className="text-sm">Folder</p>
    //                 </ConditionalRender>
    //               </div>
    //             ),
    //             children: (
    //               <div className="flex gap-3 flex-col">
    //                 <div className="flex justify-between items-center cursor-pointer">
    //                   <div className="flex items-center gap-2">
    //                     <FolderIcon className="!w-5 !h-5" />
    //                     <p className="text-sm">Untitled</p>
    //                   </div>
    //                   <Dropdown trigger={["click"]} menu={{}}>
    //                     <Button size="small" ghost>
    //                       <EditIcon />
    //                     </Button>
    //                   </Dropdown>
    //                 </div>
    //               </div>
    //             ),
    //             extra: (
    //               <div className="mt-[1.6px]">
    //                 <AddCircleIcon onClick={() => {}} />
    //               </div>
    //             ),
    //           },
    //         ]}
    //       />

    //       <div className="flex items-center gap-2 px-2 ">
    //         <ShareKnowledgeIcon className="!w-5 !h-5" />
    //         <ConditionalRender condition={!closeNav}>
    //           <p className="text-sm">Share With Me</p>
    //         </ConditionalRender>
    //       </div>

    //       <div className="flex items-center gap-2 px-2 ">
    //         <DatabaseSyncIcon className="!w-5 !h-5" />
    //         <ConditionalRender condition={!closeNav}>
    //           <p className="text-sm">Archived</p>
    //         </ConditionalRender>
    //       </div>
    //     </div>
    //   </div>

    //   {/* DARK LIGTH */}
    //   <div className="mx-auto pb-7">
    //     <Segmented
    //       options={[
    //         { icon: <MoonIcon className="mt-1" />, value: "moon" },
    //         { icon: <SunIcon className="mt-[0.35rem]" />, value: "sun" },
    //       ]}
    //       onChange={(value) => {
    //         console.log(value); // string
    //       }}
    //     />
    //   </div>
    // </div>
  );
};

export default Sidenav;
