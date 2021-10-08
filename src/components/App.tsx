import React, {useState} from 'react';
import Counter from "./Counter";
import TodoList from "./TodoList/TodoList";


function App() {
    const [value, setValue] = useState<number>(0);

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: "0"
        }}>
            <TodoList />
        </div>
    );
}

export default App;
