import { useDispatch } from "react-redux";
import { useState } from 'react';

function SupportAmount(){

        const [supportValue, setSupportValue] = useState(3);

        const submitSupport = (event) => {
            event.preventDefault();
            const dispatch = useDispatch();
            const action = {
                type:"CURRENT_SUPPORT",
                payload: supportValue
            };
            dispatch(action);
        };

        return(
            <div>
                <h2>How supported are you feeling?</h2>
                <label>Scale of 1 to 5</label>
                <select name="support" 
                        className='support-style'  
                        value={supportValue}
                        onChange={(event) => setSupportValue(event.target.value)}
                        required>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            <button onClick={(event) => submitSupport(event)}>Next</button>
        </div>
        )
};

export default SupportAmount;