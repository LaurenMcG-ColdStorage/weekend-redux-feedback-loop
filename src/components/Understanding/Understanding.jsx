import { useDispatch } from "react-redux";
import { useState } from 'react';

function UnderstandingLevel(){

    const [understandingValue, setUnderstandingValue] = useState(3);

    const submitUnderstanding = (event) => {
        event.preventDefault();
        const dispatch = useDispatch();
        const action = {
            type: "CURRENT_UNDERSTANDING",
            payload: understandingValue
        };
        dispatch(action);
    };
}

export default UnderstandingLevel;