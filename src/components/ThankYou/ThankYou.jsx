import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

function Thank(){

    const feeling = useSelector((state) => state.feeling);
    const understanding = useSelector((state) => state.understanding);
    const support = useSelector((state) => state.support);
    const comments = useSelector((state) => state.comments);
    const history = useHistory();

    const handleRoute = () => {

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: { 
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments
            }
        })
        .then((response) => {
        })
        .catch((error) => {
            console.error(error);
        });
        history.push('/');
    };

    return(
        <div>
            <h2>Thank You, We Appreciate Your Thoughts!</h2>
                <button data-testid='next' onClick={handleRoute}>Leave New Feedback</button>
        </div>
    )
};

export default Thank;