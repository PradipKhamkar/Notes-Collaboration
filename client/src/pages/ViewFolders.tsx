import React from "react";
import Wrapper from "../components/layouts/Wrapper";
import { IActionOption } from "../components/shared/types";
import ViewData from "../components/shared/ViewData";

const ViewFolders = () => {
  const actionsList: IActionOption[] = [
    {
      label: "All",
      action: () => {},
    },
    {
      label: "Recent",
      action: () => {},
    },
    {
      label: "Last Modified",
      action: () => {},
    },
  ];

  return (
    <Wrapper>
      <ViewData
        data={[
          { data: "", title: "Biology" },
          { data: "", title: "TEST" },
        ]}
        heading="Your Folders"
        actions={actionsList}
        type="folder"
      />
    </Wrapper>
  );
};

export default ViewFolders;
