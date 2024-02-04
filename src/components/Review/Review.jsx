import { useSelector } from "react-redux";

function Review(){

    const feeling = useSelector((state) => state.feeling);
    const understanding = useSelector((state) => state.understanding);
    const support = useSelector((state) => state.support);
    const comments = useSelector((state) => state.comments);

    const handleSubmit = (event) => {

    };

    return(
        <div>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button onClick={(event) => handleSubmit(event)}>SUBMIT</button>
        </div>
    )
};

export default Review;