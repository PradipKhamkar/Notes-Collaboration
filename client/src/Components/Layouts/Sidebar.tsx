import React from "react";
import Wrapper from "./Wrapper";
import { Avatar, Divider, Accordion, AccordionItem } from "@nextui-org/react";
import {
  AddCircleIcon,
  DatabaseSyncIcon,
  Folder01Icon,
  Notification02Icon,
  ProfileIcon,
  Search01Icon,
  Mail01Icon,
} from "../Icons";
import ThemeSwitch from "../Shared/ThemeSwticher";
const Sidebar = () => {
  const options = [
    {
      label: "All Notes",
      icon: <ProfileIcon className="text-white" height={20} width={20} />,
      shortKey: "",
      onClick: "",
    },

    {
      label: "Create Note",
      icon: <AddCircleIcon className="text-black" height={20} width={20} />,
      shortKey: "",
      onClick: "",
    },
    {
      label: "Folders",
      icon: <Folder01Icon className="text-black" height={20} width={20} />,
      shortKey: "",
      onClick: "",
    },
    {
      label: "Search",
      icon: <Search01Icon className="text-black" height={20} width={20} />,
      shortKey: "",
      onClick: "",
    },
    {
      label: "Archives",
      icon: <DatabaseSyncIcon className="text-black" height={20} width={20} />,
      shortKey: "",
      onClick: "",
    },
  ];

  const more = [
    {
      label: "Notification",
      icon: (
        <Notification02Icon className="text-black" height={20} width={20} />
      ),
      shortKey: "",
      onClick: "",
    },

    {
      label: "Message",
      icon: <Mail01Icon className="text-black" height={20} width={20} />,
      shortKey: "",
      onClick: "",
    },
  ];

  // const folders = [
  //   {
  //     label: "All Notes",
  //     icon: <ProfileIcon className="text-white" height={20} width={20} />,
  //     shortKey: "",
  //     onClick: "",
  //   },

  //   {
  //     label: "Create Note",
  //     icon: <AddCircleIcon className="text-black" height={20} width={20} />,
  //     shortKey: "",
  //     onClick: "",
  //   },
  //   {
  //     label: "Search",
  //     icon: <Search01Icon className="text-black" height={20} width={20} />,
  //     shortKey: "",
  //     onClick: "",
  //   },
  //   {
  //     label: "Archives",
  //     icon: <DatabaseSyncIcon className="text-black" height={20} width={20} />,
  //     shortKey: "",
  //     onClick: "",
  //   },
  // ];

  const folderList = [
    "Biology",
    "Sciences",
    "Math",
    "Python",
    "Javascript",
    "Shopping List",
    "Grocery List",
    "Daily Routing",
    "Important",
  ];
  return (
    <Wrapper>
      <div className="bg-white h-[95vh] rounded-lg w-1/4 overflow-auto scrollbar-hide p-2 pb-5 text-sm flex flex-col justify-between ">
        <div className="">
          <div className="flex items-center gap-3">
            <Avatar
              className="cursor-pointer"
              size="md"
              src="https://media.licdn.com/dms/image/D5603AQGbeRJ8DA3BBA/profile-displayphoto-shrink_200_200/0/1676695469014?e=1727308800&v=beta&t=m2KUy5j4SPC4xjNENY-MOBF4rs-Y1x1hRF6JPFUQhjY"
            />
            <div>
              <p className="text-base">Pradip Khamkar</p>
              <p className="text-[0.7rem] text-slate-300">
                khamkarpradip20@gmail.com
              </p>
            </div>
          </div>

          <div className="max-h-[98%] overflow-auto mt-8">
            <div className="px-2 gap-2 flex flex-col">
              {options.map((option, index) => (
                <div
                  className={`cursor-pointer 
              ${
                index == 0 ? "bg-black text-white" : "bg-none text-black"
              } rounded-xl flex items-center justify-between p-2 `}
                  key={option.label}
                >
                  <div className="flex gap-2 items-center">
                    {option.icon}
                    <p className="text-sm">{option.label}</p>
                  </div>
                  <p>{option.shortKey}</p>
                </div>
              ))}
            </div>
            <Divider className="bg-slate-200 my-3" />

            <div className="px-2 mt-5 gap-2 flex flex-col">
              {more.map((option, index) => (
                <div
                  className={`cursor-pointer 
              ${
                index == 8 ? "bg-black text-white" : "bg-none text-black"
              } rounded-xl flex items-center justify-between p-2 `}
                  key={option.label}
                >
                  <div className="flex gap-2 items-center">
                    {option.icon}
                    <p className="text-sm">{option.label}</p>
                  </div>
                  <p>{option.shortKey}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-2 gap-2 flex flex-col">
          <div className="flex gap-2 items-center bg-green-200 p-2 justify-between rounded-lg">
            <p className="text-sm">Dark Mode</p>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
