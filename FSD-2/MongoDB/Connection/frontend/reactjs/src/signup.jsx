import React,{useState} from "react";
import axios from 'axios'
function Signup(){
    const [username, setUsername] = useState("");
    const handleSignup=async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/signup",{
                username
            })
            alert("User Signed Up Successfully")
            setUsername("")
        } catch (error) {
            console.log(error);
            alert("An Error Occured")
        }
    }
    return(
        <div>
            <form onSubmit={handleSignup}>
                Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Signup;