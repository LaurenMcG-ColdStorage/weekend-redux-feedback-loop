import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CommentPage(){

    const [commentValue, setCommentValue] = useState('');
    const dispatch = useDispatch();
    
    const submitComment = (event) => {
        const action = {
            type: "COMMENT",
            payload: commentValue
        };
        dispatch(action);
    };

    return(
        <div>
            <h2>Would you like to leave any comments?</h2>
            <input type='string' placeholder='Enter text here, or n/a' onChange={(event) => setCommentValue(event.target.value)} required></input>
            <Link to='/review'>
                <button data-testid='next' onClick={(event) => submitComment(event)}>Complete</button>
            </Link>
        </div>
    );
};

export default CommentPage;