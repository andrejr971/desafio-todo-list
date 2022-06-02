import { Clipboard } from 'phosphor-react';
import { ITask } from '../../App';
import { Task } from '../Task';

import styles from './Tasks.module.scss';

interface ITasksProps {
  tasks: ITask[];
  onUpdateStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({ 
    tasks, 
    onUpdateStatusTask, 
    onDeleteTask 
  }: ITasksProps) {
  const totalTaskConcluided = tasks.filter(task => task.status === true).length;

  return (
    <section className={styles.main}>
      <header className={styles.informations}>
        <div className={styles.totalTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksConcluided}>
          <strong>Concluídas</strong>
          <span>
            {tasks.length > 0 ? `${totalTaskConcluided} de ${tasks.length}` : '0'}
          </span>
        </div>
      </header>

      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onUpdateStatusTask={onUpdateStatusTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      ) : (
        <div className={styles.empty}>
          <Clipboard size={56} /> 

          <div >
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </section>
  )
}