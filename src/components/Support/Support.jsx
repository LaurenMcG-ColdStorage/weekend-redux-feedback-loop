import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';
function SupportAmount(){

        const [supportValue, setSupportValue] = useState(3);
        const dispatch = useDispatch();

        const submitSupport = (event) => {
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
                        data-testid='input'
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
            <Link to='/comments'>
                <button data-testid='next' onClick={(event) => submitSupport(event)}>Next</button>
            </Link>
        </div>
        )
};

export default SupportAmount;