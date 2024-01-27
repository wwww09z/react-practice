import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())} >Increment</button>
            <button onClick={() => dispatch(decrement())} >Decrement</button>
        </div>
    );
};


export default Counter;