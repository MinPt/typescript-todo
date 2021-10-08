import React from 'react';
import AddTask from "./AddTask";

type ListProps = {
    caption: string,
    tasks: Task[],
    createTask(text: string): void,
    completeTask(index: number): void
}

function IncompleteTasks({caption, tasks, createTask, completeTask}: ListProps) {

    return (
        <table style={{ border: "1px solid blue", marginRight: "1em"}}>
            <caption>{caption}</caption>
            <tr>
                <th>#</th>
                <th>Task</th>
                <th> </th>
            </tr>
            {tasks.map((item, index) => {
                return (<tr style={item.isCompleted ? completedStyle : incompleteStyle} key={item.text}>
                    <td>{index}</td>
                    <td style={item.isCompleted ? {color: 'green'} : {}}>{item.text}</td>
                    <td>{item.isCompleted ? null : <button onClick={() => completeTask(index)}>Complete</button>}</td>
                </tr>)
            })}
            <AddTask createTask={createTask} index={tasks.length} />
        </table>
    );
}

const incompleteStyle: React.CSSProperties = {
    border: '1px solid red',
    display: 'table-row'
}

const completedStyle: React.CSSProperties = {
    border: '1px solid green'
}

export default IncompleteTasks;