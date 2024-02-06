import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function Review(){

    //Pull all of the responses to display for confirmation
    const feeling = useSelector((state) => state.feeling);
    const understanding = useSelector((state) => state.understanding);
    const support = useSelector((state) => state.support);
    const comments = useSelector((state) => state.comments);

    //Set up our dispatch to send the data to store.js.
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const action = {
            type: 'LOG',
            payload: [feeling, understanding, support, comments]
        };
        dispatch(action);
    };

    return(
        <div>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <Link to='/thankyou'>
                <button data-testid='next' onClick={(event) => handleSubmit(event)}>SUBMIT</button>
            </Link>
        </div>
    )
};

export default Review;