import styles from './assignment.module.css';
import { TbTrash } from "react-icons/tb";

export function Assignment({ title, done, deleteAssignment, toggleDone }) {

  return (
    <div className={styles.assignment}>
      <button className={`${styles.checkContainer} ${done ? styles.done : ''}`} onClick={toggleDone}>
        <div className={done ? styles.done : ''} /> 
      </button>
      <p className={done ? styles.textCompleted : ''}>{title}</p> 

      <button className={styles.deleteButton} onClick={deleteAssignment}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}