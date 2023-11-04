import React from "react";
import "./App.css";
import TaskViewer from "./components/TaskViewer/TaskViewer";
//function App(){}
const App = () => {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      description: " Create a Design System for Enum Workspace.",
      dueDate: new Date(2021, 5, 24),
    },
    {
      id: "T-1",
      status: "In Progress",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2025, 5, 24),
    },
    {
      id: "T-1",
      status: "Completed",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-1",
      status: "Done",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-1",
      status: "In Progress",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-1",
      status: "Todo",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-1",
      status: "Completed",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 24),
    },
  ];

  return (
    <>
      <TaskViewer dataFields={data} />
    </>
  );
};

export default App;
