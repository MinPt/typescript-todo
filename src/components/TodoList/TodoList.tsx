import React, {useState} from 'react';
import IncompleteTasks from "./IncompleteTasks";
import CompletedTasks from "./CompletedTasks";



function TodoList() {
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [incompleteTasks, setIncompleteTasks] = useState<Task[]>([]);

    const createTask = (text: string): void => {
        const task: Task = {text, isCompleted: false};
        const newTasks: Task[] = [...incompleteTasks, task];
        setIncompleteTasks(newTasks);
    }

    const completeTask = (index: number) => {
        const newTask = incompleteTasks.filter((task, idx) => idx === index);
        const newIncompleteTasks = incompleteTasks.filter((item, idx) => idx !== index);
        const newCompletedTasks = [...completedTasks, ...newTask];
        setCompletedTasks(newCompletedTasks);
        setIncompleteTasks(newIncompleteTasks);
    }

    return (
        <div style={{display: 'flex'}}>
            <IncompleteTasks completeTask={completeTask} caption={"Task to do"} tasks={incompleteTasks} createTask={createTask} />
            <CompletedTasks tasks={completedTasks} caption={'Completed'} />
        </div>
    );
}

export default TodoList;