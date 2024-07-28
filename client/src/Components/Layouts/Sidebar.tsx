import React from "react";
import { Avatar, Divider, Accordion, AccordionItem } from "@nextui-org/react";
import {
  AddCircleIcon,
  DatabaseSyncIcon,
  Folder01Icon,
  Notification02Icon,
  ProfileIcon,
  Search01Icon,
  Mail01Icon,
  Home13Icon,
  NoteIcon,
} from "../Icons";
import ThemeSwitch from "../shared/ThemeSwticher";
import { useNavigate, useLocation } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
const Sidebar = () => {
  const navigate = useNavigate();
  const { toggleTheme, isDarkMode } = useTheme();
  const { pathname } = useLocation();

  const options = [
    // {
    //   label: "Dashboard",
    //   Icon: Home13Icon,
    //   shortKey: "",
    //   path: "/",
    // },

    {
      label: "Notes",
      Icon: NoteIcon,
      shortKey: "",
      path: "/",
    },
    {
      label: "Folders",
      Icon: Folder01Icon,
      shortKey: "",
      path: "/folder",
    },
    {
      label: "Search",
      Icon: Search01Icon,
      shortKey: "",
      path: "/search",
    },
    {
      label: "Archives",
      Icon: DatabaseSyncIcon,
      shortKey: "",
      path: "/archives",
    },
  ];

  const more = [
    {
      label: "Notification",
      Icon: Notification02Icon,
      shortKey: "",
      path: "/notification",
    },

    {
      label: "Message",
      Icon: Mail01Icon,
      shortKey: "",
      path: "/message",
    },
  ];

  // const folders = [
  //   {
  //     label: "All Notes",
  //     icon: <ProfileIcon className="text-white" height={20} width={20} />,
  //     shortKey: "",
  //   path: "",
  //   },

  //   {
  //     label: "Create Note",
  //     icon: <AddCircleIcon className="text-black" height={20} width={20} />,
  //     shortKey: "",
  //   path: "",
  //   },
  //   {
  //     label: "Search",
  //     icon: <Search01Icon className="text-black" height={20} width={20} />,
  //     shortKey: "",
  //   path: "",
  //   },
  //   {
  //     label: "Archives",
  //     icon: <DatabaseSyncIcon className="text-black" height={20} width={20} />,
  //     shortKey: "",
  //   path: "",
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
    <>
      <div className="h-[95vh] rounded-lg md:w-[300px] overflow-auto scrollbar-hide p-2 pb-5 flex flex-col justify-between text-[0.8rem]">
        <div className="">
          <div className="flex items-center gap-3">
            <Avatar
              className="cursor-pointer"
              size="md"
              src="https://media.licdn.com/dms/image/D5603AQGbeRJ8DA3BBA/profile-displayphoto-shrink_200_200/0/1676695469014?e=1727308800&v=beta&t=m2KUy5j4SPC4xjNENY-MOBF4rs-Y1x1hRF6JPFUQhjY"
            />
            <div>
              <p className="text-sm">Pradip Khamkar</p>
              <p className="text-[0.6rem] text-slate-300">
                khamkarpradip20@gmail.com
              </p>
            </div>
          </div>

          <div className="max-h-[98%] overflow-auto mt-5 text-[0.8rem]">
            <div className="px-2 gap-2 flex flex-col">
              {options.map((option, index) => {
                const { Icon, label, path, shortKey } = option;
                return (
                  <div
                    onClick={() => navigate(path)}
                    className={`cursor-pointer ${
                      pathname === path
                        ? "bg-black dark:bg-green-600 text-white"
                        : "bg-none text-black dark:text-white"
                    } rounded-xl flex items-center justify-between p-2 `}
                    key={label}
                  >
                    <div className="flex gap-2 items-center">
                      <Icon
                        className={`${
                          pathname === path
                            ? " text-white"
                            : "text-black dark:text-white"
                        } `}
                        width={18}
                        height={18}
                      />
                      <p>{label}</p>
                    </div>
                    <p>{shortKey}</p>
                  </div>
                );
              })}
            </div>
            <Divider className="bg-slate-200  dark:bg-slate-800 my-3" />

            <div className="px-2 mt-5 gap-2 flex flex-col">
              {more.map((option, index) => {
                const { Icon, label, path, shortKey } = option;
                return (
                  <div
                    onClick={() => navigate(path)}
                    className={`cursor-pointer ${
                      pathname === path
                        ? "bg-black dark:bg-green-600 text-white"
                        : "bg-none text-black dark:text-white"
                    } rounded-xl flex items-center justify-between p-2 `}
                    key={label}
                  >
                    <div className="flex gap-2 items-center">
                      <Icon
                        className={`${
                          pathname === path
                            ? " text-white"
                            : "text-black dark:text-white"
                        } `}
                        width={18}
                        height={18}
                      />
                      <p>{label}</p>
                    </div>
                    <p>{shortKey}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-2 gap-2 flex flex-col backdrop-blur-md">
          <div className="flex gap-2 items-center  p-2 justify-between rounded-lg">
            <p>Theme</p>
            <ThemeSwitch checked={!isDarkMode} onChange={toggleTheme} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
