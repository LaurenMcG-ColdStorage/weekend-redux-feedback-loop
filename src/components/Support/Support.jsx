import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Support(){

    const support = useSelector((state) => state.support);
    const [supportValue, setSupportValue] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitSupport = (event) => {
        const action = {
            type:"CURRENT_SUPPORT",
            payload: supportValue
        };
        dispatch(action);
        history.push('/comments')
    };

    return(
        <div>
            <h2>How supported are you feeling?</h2>
            <label>Scale of 1 to 5</label><br />
            <input name="support" 
                    data-testid='input'
                    className='support-style'  
                    value={supportValue}
                    type='number'
                    min='1'
                    max='5'
                    onChange={(event) => setSupportValue(event.target.value)}
                    required>
            </input>
            <button data-testid='next' onClick={(event) => submitSupport(event)}>Next</button>
    </div>
    )
};

export default Support;