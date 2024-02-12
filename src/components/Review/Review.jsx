import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

function Review(){

    //Pull all of the responses to display for confirmation
    const feeling = useSelector((state) => state.feeling);
    const understanding = useSelector((state) => state.understanding);
    const support = useSelector((state) => state.support);
    const comments = useSelector((state) => state.comments);
    const history = useHistory();

    //Set up our dispatch to send the data to DB

    const handleSubmit = () => {
        history.push('/thank')
    };

    return(
        <div>
            <h2>Review your Feedback:</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button data-testid='next' onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
};

export default Review;