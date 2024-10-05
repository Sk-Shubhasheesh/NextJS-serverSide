"use client"
import axios from "axios";
import { useState } from "react"


export default function Signup() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="p-4 border rounded pd-4">
                <input onChange={(e)=>{setUserName(e.target.value)}} className="p-4 m-2" type="text" placeholder="username"></input> <br />
                <input onChange={(e)=>{setPassword(e.target.value)}} className="p-4 m-2" type="password" placeholder="1234"></input> <br />
                <div className="mt-4 flex justify-center">
                    <button onClick={()=>{
                        axios.post("http://localhost:3000/api/user", {
                            username,
                            password
                        })
                    }}>SignUp</button><br />
                </div>
            </div>
        </div>
    </div>
}
