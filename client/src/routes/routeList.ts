import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import AllNotes from "../pages/AllNotes";
import NewNote from "../pages/NewNote";

export const publicRoute = [
  {
    path: "/login",
    name: "Login",
    Element: Login,
  },
];

export const protectedRoute = [
  {
    path: "/",
    name: "All Notes",
    Element: AllNotes,
  },
  {
    path: "/new-note",
    name: "New Note",
    Element: NewNote,
  },
  // {
  //   path: "/folder",
  //   name: "New Note",
  //   Element: NewNote,
  // },

  // {
  //   path: "/new-note",
  //   name: "New Note",
  //   Element: NewNote,
  // },
];
