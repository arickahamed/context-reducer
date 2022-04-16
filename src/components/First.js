import React, { useContext } from 'react';
import CreateContext from './context/CreateContext';
import Second from './Second';

const First = () => {
    const {state} = useContext(CreateContext);
    const {post, loading, error} = state;
    return (
        <div>
            <Second />
            <h1 style={{textAlign: "center", color: "blue"}}>{post.userId}</h1>
        </div>
    )
}

export default First;