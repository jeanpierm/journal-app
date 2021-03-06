import React from "react";
import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelectedScreen } from "./NothingSelectedScreen";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div
      className="journal__main-content"
      style={{ backgroundColor: "#5c62c5" }}
    >
      <Sidebar />
      <main>{active ? <NoteScreen /> : <NothingSelectedScreen />}</main>
    </div>
  );
};
