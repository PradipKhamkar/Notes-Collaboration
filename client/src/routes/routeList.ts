import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import ViewNotes from "../pages/ViewNotes";
import NewNote from "../pages/NewNote";
import ViewsNotes from "../pages/ViewNotes";
import ViewFolders from "../pages/ViewFolders";

export const publicRoute = [
  {
    path: "/login",
    name: "Login",
    Element: Login,
  },
];

export const protectedRoute = [
  // {
  //   path: "/",
  //   name: "Dashboard",
  //   Element: Dashboard,
  // },
  {
    path: "/",
    name: "Notes",
    Element: ViewsNotes,
  },
  {
    path: "/folder",
    name: "folder",
    Element: ViewFolders,
  },

  // {
  //   path: "/new-note",
  //   name: "New Note",
  //   Element: NewNote,
  // },
];
