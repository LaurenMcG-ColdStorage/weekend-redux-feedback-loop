import { Link } from 'react-router-dom';

function ThankYou(){

    return(
        <div>
            <h1>Thank You, We Appreciate Your Thoughts!</h1>
            <Link to='/'>
                <button data-testid='next'>Leave New Feedback</button>
            </Link>
        </div>
    )
};

export default ThankYou;