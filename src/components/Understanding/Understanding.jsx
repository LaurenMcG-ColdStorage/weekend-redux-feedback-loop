import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Understanding(){

    const understanding = useSelector((state) => state.understanding);
    const [understandingValue, setUnderstandingValue] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitUnderstanding = (event) => {
        const action = {
            type: "CURRENT_UNDERSTANDING",
            payload: understandingValue
        };
        dispatch(action);
        history.push('/support');
    };

    return(
        <div>
            <h2>Rate your understanding of this week's content</h2>
            <label>Scale of 1 to 5</label><br />
            <input name="understanding"
                    data-testid='input' 
                    type='number' 
                    value={understandingValue}
                    min='1'
                    max='5'
                    onChange={(event) => setUnderstandingValue(event.target.value)}
                    required>
            </input>
            <button data-testid='next' onClick={submitUnderstanding}>Next</button>          
        </div>
    );
};

export default Understanding;