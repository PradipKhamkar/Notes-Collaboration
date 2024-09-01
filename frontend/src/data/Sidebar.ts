import { Button } from "antd";
interface FACTION {
  action: "Edit" | "Delete" | "Share" | "Archvied";
}

const FolderActions = [
  {
    action: "",
  },
];
// const items: MenuProps["items"] = [
//   {
//     label: (
//       <div className="flex flex-col gap-3 p-0">
//         <Button icon={<EditIcon />}>Edit</Button>
//         <Button icon={<NavigationIcon />}>Share</Button>
//         <Button icon={<DatabaseSyncIcon />}>Archvied</Button>
//         <Button
//           icon={<DeleteIcon className="text-white" />}
//           type="primary"
//           danger
//         >
//           Delete
//         </Button>
//       </div>
//     ),
//     key: "1",
//   },
// ];
