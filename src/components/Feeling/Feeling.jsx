import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Feeling(){

    const feeling = useSelector((state) => state.feeling);
    const [feelingValue, setFeelingValue] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeeling = (event) => {
        const action = {
            type: "CURRENT_FEELING",
            payload: feelingValue
        };
        dispatch(action);
        history.push('/understanding');
    };

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <label>Scale of 1 to 5</label><br />
            <input name="feeling" 
                    data-testid='input'
                    type='number'  
                    value={feelingValue}
                    min='1'
                    max='5'
                    onChange={(event) => setFeelingValue(event.target.value)}
                    required>
            </input>
            <button data-testid="next" onClick={submitFeeling}>NEXT</button>  
        </div>
    )
}

export default Feeling;