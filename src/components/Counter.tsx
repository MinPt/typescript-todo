import React from 'react';

type CounterProps = {
    value: number,
    onValueChange(value: number): void
}



function Counter({value, onValueChange}: CounterProps) {
    return (
        <div>
            <p>{value}</p>
            <button onClick={(e) => {
                e.preventDefault();
                onValueChange(++value)
            }}>Increase</button>
        </div>
    );
}



export default Counter;