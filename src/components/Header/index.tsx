import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header({ addAssignment, inputValue, setInputValue}) {

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCreate = (event) => {
    event.preventDefault(); // preventS the default form submission behavior of the browser.
    if (inputValue.trim()) {
      addAssignment(inputValue);
      setInputValue(""); // clears that input field when Create button is clicked. 
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreate}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}