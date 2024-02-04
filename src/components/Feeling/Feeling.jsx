import { useDispatch } from "react-redux";
import { useState } from 'react';

function FeelingMeter(){

    const [feelingValue, setFeelingValue] = useState(3);
    const dispatch = useDispatch();
    
    const submitFeeling = (event) => {
        const action = {
            type: "CURRENT_FEELING",
            payload: feelingValue
        };
        dispatch(action);
    };

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <label>Scale of 1 to 5</label><br />
            <select name="feeling" 
                    className='feeling-style'  
                    value={feelingValue}
                    onChange={(event) => setFeelingValue(event.target.value)}
                    required>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={(event) => submitFeeling(event)}>NEXT</button>
        </div>
    )
}

export default FeelingMeter;