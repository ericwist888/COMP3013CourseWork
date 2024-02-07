import { useState } from "react";
import { Assignments } from "./components/Assignments";
import { Header } from "./components/Header";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [inputValue, setInputValue] = useState(""); 

  const addAssignment = (title) => {
    if (title.trim() !== "") {
      const newAssignment = { title, done: false };
      setAssignments([...assignments, newAssignment]);
    }
  };

  const deleteAssignment = (index) => {
    setAssignments(currentAssignments => currentAssignments.filter((_, i) => i !==index)); 
    // create new assignments array that DOES NOT contain the index element
  }; 

  const toggleDone = (index) => {
    setAssignments(currentAssignments =>
      currentAssignments.map((assignment, i) => 
        i === index ? { ...assignment, done: !assignment.done } : assignment
      )
    );
  };

  return (
    <>
      <Header 
        addAssignment={addAssignment} 
        inputValue={inputValue} 
        setInputValue={setInputValue} />

      <Assignments 
        assignments={assignments} 
        deleteAssignment={deleteAssignment} 
        toggleDone={toggleDone}/>
    </>
  );
}

export default App;
