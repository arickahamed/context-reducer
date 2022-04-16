import React, { useContext } from 'react';
import CreateContext from './context/CreateContext';
import Second from './Second';

const First = () => {
    const {state} = useContext(CreateContext);
    const {post, loading} = state;
    // console.log(post);
    return (
        <div>
            <h1 style={{textAlign: "center", color: "blue"}}>{loading ? "loading..." : post.userId}</h1>
            <Second />
        </div>
    )
}

export default First;