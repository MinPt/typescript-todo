import React, {useState} from 'react';

type AddTaskProps = {
    createTask(text: string): void,
    index: number
}

function AddTask({createTask, index}: AddTaskProps) {
    const [taskText, setTaskText] = useState('');

    return (
        <tr>
            <td>{index}</td>
            <td><input onChange={(e) => setTaskText(e.target.value)} value={taskText} type="text"/></td>
            <td><button style={{color: "green"}} onClick={() => {
                createTask(taskText);
                setTaskText('')
            }}>Create</button></td>
        </tr>
    );
}

export default AddTask;