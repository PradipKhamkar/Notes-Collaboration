export const folderData = [
  {
    name: "Work",
    pin_at: new Date("2024-09-01T10:00:00Z"),
    config: {
      icon: "📁",
    },
    created_by: "user1",
    collaborators: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
    ],
  },
  {
    name: "Personal",
    config: {
      icon: "🏠",
    },
    created_by: "user2",
    collaborators: [{ name: "Charlie", email: "charlie@example.com" }],
  },
  {
    name: "Projects",
    pin_at: new Date("2024-09-02T08:30:00Z"),
    config: {
      icon: "📂",
    },
    created_by: "user3",
    collaborators: [
      { name: "David", email: "david@example.com" },
      { name: "Eve", email: "eve@example.com" },
    ],
  },

  {
    name: "Shared",
    pin_at: new Date("2024-09-03T12:15:00Z"),
    config: {
      icon: "🔗",
    },
    collaborators: [{ name: "Frank", email: "frank@example.com" }],
  },
];
