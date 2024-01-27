import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const count = useSelector(state => state.count);
const dispatch = useDispatch();

const Counter = () => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})} >Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})} >Decrement</button>
        </div>
    );
};


export default Counter;