import React, { useContext, useEffect } from 'react';
import CreateContext from './context/CreateContext';

const GetPost = () => {
    const {dispatch} = useContext(CreateContext);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((data) => {
            dispatch({type: "success", result: data})
        })
        .catch(() => {
            dispatch({type: 'error'})
        })
    }, []);

    return (
        <div>GetPost</div>
    )
}

export default GetPost;