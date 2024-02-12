import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Comments(){

    const comments = useSelector((state) => state.comments);
    const [commentValue, setCommentValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    
    const submitComment = (event) => {
        const action = {
            type: "COMMENT",
            payload: commentValue
        };
        dispatch(action);
        history.push('/review')
    };

    return(
        <div>
            <h2>Would you like to leave any comments?</h2>
            <input data-testid='input' type='text' placeholder='Enter text here, or n/a' onChange={(event) => setCommentValue(event.target.value)} required></input>
            <button data-testid='next' onClick={(event) => submitComment(event)}>Complete</button>
        </div>
    );
};

export default Comments;