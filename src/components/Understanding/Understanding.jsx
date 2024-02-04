import { useDispatch } from "react-redux";
import { useState } from 'react';

function UnderstandingLevel(){

    const [understandingValue, setUnderstandingValue] = useState(3);
    const dispatch = useDispatch();

    const submitUnderstanding = (event) => {
        const action = {
            type: "CURRENT_UNDERSTANDING",
            payload: understandingValue
        };
        dispatch(action);
    };

    return(
        <div>
            <h2>How well do you feel you understand this week's content?</h2>
            <label>Scale of 1 to 5</label>
            <select name="understanding" 
                    className='understanding-style'  
                    value={understandingValue}
                    onChange={(event) => setUnderstandingValue(event.target.value)}
                    required>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={(event) => submitUnderstanding(event)}>Next</button>
        </div>
    );
};

export default UnderstandingLevel;