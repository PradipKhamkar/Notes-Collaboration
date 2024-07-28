import React from "react";
import Wrapper from "../components/layouts/Wrapper";
import { IActionOption } from "../components/shared/types";
import ViewData from "../components/shared/ViewData";

const ViewsNotes = () => {
  const h = "My Notes";
  const actionsList: IActionOption[] = [
    {
      label: "All",
      action: () => {},
    },
    {
      label: "Today",
      action: () => {},
    },
    {
      label: "This Week",
      action: () => {},
    },
  ];

  return (
    <Wrapper>
      <ViewData
        data={[{ data: "JUST TEST", title: "play Cricket" }]}
        heading={h}
        actions={actionsList}
        type="notes"
      />
    </Wrapper>
  );
};

export default ViewsNotes;
