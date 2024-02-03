import { useDispatch } from "react-redux";
import { useState } from 'react';

function CommentPage(){

    const [commentValue, setCommentValue] = useState('');
    
    const submitComment = (event) => {
        event.preventDefault();
        const dispatch = useDispatch();
        const action = {
            type: "COMMENTS",
            payload: commentValue
        };
        dispatch(action);
    };

    return(
        <div>
            <h2>Would you like to leave any comments?</h2>
            <input type='string' placeholder='Enter text here'></input>
            <button onClick={(event) => submitComment(event)}>Complete</button>
        </div>
    );
};

export default CommentPage;