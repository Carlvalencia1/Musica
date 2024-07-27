import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SecLogin.css'
import Title from "../atoms/Title";
import { useState } from "react";
import Label from "../atoms/Label";
import { saveRegister } from "../../data/BD";
import Swal from 'sweetalert2';

function SecLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const handleRegister = (event) => {
        if(!username.trim() || !password.trim() || !email.trim()){
            Swal.fire({
                icon: "info",
                title: "Please",
                text: "Fill out all fields!",
              });
        }
        else{
          if(saveRegister(username,password,email)){
            Swal.fire({
                title: "Excellent!",
                text: "Your registration has been processed!",
                icon: "success"
              });
          }
          else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
          }
        }
        
    }
    return (<>
   
        <div className="login_section">
            <img className="image" src="fondo1.png" alt="" />
            <Title title="PORSCHE"></Title>
            <Label text={"Create an account to become a member"}/>

            <Field id="email" type="email" placeholder="Calr1@gmail.com" text="Email" 
            val={email} fnVal={setEmail}
            />
            <Field id="user" type="text" placeholder="Carl" text="Username" 
            val={username} fnVal={setUsername}
            />

            <Field id="password" type="password" placeholder="* * * * *" text="Password" 
            val={password} fnVal={setPassword}
            
            />
            <div>
            <Button text={"Register me"} onClick={handleRegister}
             />
             </div>
        </div> 
        </>
     );
}

export default SecLogin;