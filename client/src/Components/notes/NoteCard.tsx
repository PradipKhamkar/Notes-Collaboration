import React from "react";
import { IPNote } from "./types";

const NoteCard = (props: IPNote) => {
  const { data, title } = props;
  return <div>{title}</div>;
};

export default NoteCard;
