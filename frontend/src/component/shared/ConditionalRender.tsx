import React from "react";

interface IPROPS {
  children?: any;
  condition?: boolean;
}

export const ConditionalRender = (props: IPROPS) => {
  return <>{props.condition ? props.children : null}</>;
};
