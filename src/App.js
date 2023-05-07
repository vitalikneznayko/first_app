import "./App.css";
import TestState from "./components/TestState";

function App() {
  const userList = [
    {
      content: "Frontend Misha",
      id: "fe",
      relations: ["pm", "be", "ds"],
    },
    {
      content: "Design Pasha",
      id: "ds",
      relations: ["pm", "fe"],
    },
    {
      content: "Project Manager Sanya",
      id: "pm",
      relations: ["ba", "fe", "be", "ds"],
    },
    {
      content: "Backend Grisha",
      id: "be",
      relations: ["pm", "fe", "ba"],
    },
    {
      content: "Business Analyst Sveta",
      id: "ba",
      relations: ["pm"],
    },
  ];

  return (
    <div className="App">
      <TestState users={TestState} />
    </div>
  );
}

export default App;
