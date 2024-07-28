import React from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@nextui-org/react";
import { Moon02Icon, Sun01Icon } from "../Icons";

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2 ">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-6 h-6",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? (
            <Sun01Icon width={18} height={18} color="white" />
          ) : (
            <Moon02Icon width={18} height={18} />
          )}
        </div>
      </Component>
      {/* <p className="text-default-500 select-none">
        Lights: {isSelected ? "on" : "off"}
      </p> */}
    </div>
  );
};

export default ThemeSwitch;
