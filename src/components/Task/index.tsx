import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import { ITask } from '../../App';

import styles from './Task.module.scss';

interface ITaskProps {
  task: ITask;
  onUpdateStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ 
  task, 
  onUpdateStatusTask, 
  onDeleteTask 
}: ITaskProps) {
  const [status, setStatus] = useState(task.status);

  function handleUpdateStatusTask() {
    onUpdateStatusTask(task.id);
    setStatus(!status);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={`${styles.task} ${status && styles.concluid}`}>
      <button 
        className={`${styles.buttonConcluid} ${status && styles.purple}`}
        onClick={handleUpdateStatusTask}
      >
        {status ? (
          <CheckCircle size={24} />
        ) : (
          <Circle size={24} />
        )}
      </button>
      <p>{task.description}</p>
      <button 
        className={styles.buttonDelete}
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}