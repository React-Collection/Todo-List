import { useState } from "react";
import "./App.css";

function App() {
  // const [type, setType] = useState("");
  const [users, setUser] = useState(["clean", "study", "travel"]);
  const [task, setTask] = useState("");
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
        <input
          id="input"
          type="text"
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={AddTask}>add task</button>
      </ul>
    </>
  );

  function AddTask() {
    setUser([...users, task]);
    const inputTask = document.getElementById("input");
    inputTask.value = "";
  }
}

export default App;
