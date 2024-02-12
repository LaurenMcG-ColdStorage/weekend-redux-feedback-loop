import { useSelector } from "react-redux";
import axios from 'axios';

function Admin(){
    
    const log = useSelector((state) => state.log);
    let feedbackLog = {};
    axios.get('/api/feedback')
    .then((response) => {
        feedbackLog = response.body
    })
    .catch((error) => {
        console.error(error);
    })

    return(
        <div>
            <h2>Feedback Results!</h2>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackLog.map((branch, branchIndex) => {
                        <tr key={branchIndex}>
                            <td>{branch.feeling}</td>
                            <td>{branch.understanding}</td>
                            <td>{branch.support}</td>
                            <td>{branch.comments}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )

};

export default Admin;