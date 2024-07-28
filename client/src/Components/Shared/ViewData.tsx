import React, { useState } from "react";
import Wrapper from "../layouts/Wrapper";
import { IPViewData } from "./types";
import { Tabs, Tab, Divider } from "@nextui-org/react";
import NoteCard from "../notes/NoteCard";
import { Folder01Icon } from "../Icons";

const ViewData = (props: IPViewData) => {
  const { actions, data, heading } = props;
  return (
    <Wrapper>
      <div className="flex justify-between items-center">
        <h6 className="text-xl font-bold">{heading}</h6>
        <Tabs size="sm" aria-label="Tabs sizes">
          {actions.map((action) => (
            <Tab
              key={action.label}
              title={action.label}
              onClick={() => action.action()}
            />
          ))}
        </Tabs>
      </div>

      <div className="flex gap-10 items-center mt-3">
        {data.map((data) => (
          // <div className="relative cursor-pointer">
          //   <Folder01Icon color="#FFB301" width={50} height={50} />
          //   <p className="absolute top-5 left-5 text-center text-xs">B</p>
          //   <p className="text-center text-xs mt-2">{data.title}</p>
          // </div>
          <NoteCard title={data.title} data={data.data} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ViewData;
