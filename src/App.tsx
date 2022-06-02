import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import styles from './App.module.scss';


export type ITask = {
  id: string;
  description: string;
  status: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputTask, setInputTask] = useState('');

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    if (inputTask.length === 0) return;

    const newTask = {
      id: uuid(),
      description: inputTask,
      status: false,
    };

    setTasks([...tasks, newTask]);
    setInputTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value);
  }

  function updateStatusTaks(id: string) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status;
      }

      return task;
    }));
  }

  function deleteTask(id: string) {
    const newArrayTasks = tasks.filter(task => task.id !== id);

    setTasks(newArrayTasks);
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form onSubmit={handleNewTask} className={styles.form}>
          <input 
            type="text" 
            name='task' 
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={inputTask}
            required
          />
          <button type='submit' aria-label='Adicionar nova tarefa'>
            <span>
              Criar
            </span>
            <PlusCircle size={24} />
          </button>
        </form>

        <Tasks 
          tasks={tasks} 
          onUpdateStatusTask={updateStatusTaks} 
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  )
};