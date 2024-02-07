import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({ assignments, deleteAssignment, toggleDone }) {

  const completedAssignmentsCount = assignments.filter(assignment => assignment.done).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignmentsCount} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            done={assignment.done}
            deleteAssignment={() => deleteAssignment(index)}
            toggleDone={() => toggleDone(index)} 
          />
        ))}
      </div>
    </section>
  );
}
