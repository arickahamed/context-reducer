import React, { useReducer } from 'react';
import CreateContext from './CreateContext';

const DataState = ({children}) => {

    const reducer = (state, action) => {
        // console.log(action.result);
        switch (action.type) {
            case ACTION.SUCCESS:
                return {
                    loading: false,
                    post: action.result,
                    error: ""
                }
            case ACTION.ERROR:
                return {
                    loading: true,
                    post: {},
                    error: "There was a problem in fetching"
                }
            default:
                return state;
        }
    };

    const initialState = {
        loading: true,
        result: {},
        error: ""
    };

    const ACTION = {
        SUCCESS: "success",
        ERROR: "error"
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CreateContext.Provider value={{state,dispatch}}>
            {children}
        </CreateContext.Provider>
    )
}

export default DataState;