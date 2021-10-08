import React from 'react';

type CompletedTasksProps = {
    tasks: Task[],
    caption: string
}

function CompletedTasks({tasks, caption}: CompletedTasksProps) {
    return (
        <table style={{border: "1px solid blue"}}>
            <caption>{caption}</caption>
            <tr>
                <th>#</th>
                <th>Task</th>
            </tr>
            {tasks.map((item, index) => {
                return (<tr key={item.text}>
                    <td>{index}</td>
                    <td>{item.text}</td>
                </tr>)
            })}
        </table>
    );
}

export default CompletedTasks;