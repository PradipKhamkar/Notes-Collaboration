import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
  Avatar,
  Input,
  Switch,
} from "@nextui-org/react";
import {
  Notification02Icon,
  Mail01Icon,
  Search01Icon,
  Sun01Icon,
  Moon02Icon,
} from "../Icons";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <>
      <nav className="flex z-40 w-full h-auto items-center sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 py-2 ">
        <header className="!w-full flex justify-between px-2">
          <div className="flex items-center justify-center gap-2">
            <img
              className="rounded-full"
              src="https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852432.jpg"
              height={40}
              width={40}
            />
            <p className="font-bold text-inherit">Notes</p>
          </div>
          {/* sign avatar and search */}
          <div className="flex items-center justify-center">
            <Input
              type="text"
              variant="bordered"
              className="!w-96"
              placeholder="Search or type keyword"
              startContent={
                <Search01Icon
                  width={20}
                  height={20}
                  className="text-default-400 pointer-events-none flex-shrink-0"
                />
              }
            />
          </div>

          {/* notification and message */}
          <div className="flex items-center justify-center gap-5">
            <Mail01Icon className="cursor-pointer" />
            <Notification02Icon className="cursor-pointer" />
            <Switch
              defaultSelected
              size="sm"
              color="secondary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <Sun01Icon className={className} />
                ) : (
                  <Moon02Icon className={className} />
                )
              }
            />
            {/* <Avatar
              className="cursor-pointer"
              size="sm"
              src="https://media.licdn.com/dms/image/D5603AQGbeRJ8DA3BBA/profile-displayphoto-shrink_200_200/0/1676695469014?e=1727308800&v=beta&t=m2KUy5j4SPC4xjNENY-MOBF4rs-Y1x1hRF6JPFUQhjY"
            /> */}
          </div>
        </header>
      </nav>
      <Divider />
    </>
  );
}
