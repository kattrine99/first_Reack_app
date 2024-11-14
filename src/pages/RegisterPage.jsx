import { Button } from "../components/Buttons/Buttons";
import { Heading } from "../components/Headings/Heading"
import { Input } from "../components/Input/input"
import './css/RegisterPageCSS.css';

export const RegisterPage = () =>{
    return (
        <> <div className = "registration"> 
            <Heading text={"Registration"}/> 
            <Input InputType={"text"} Inputplaceholder={"First Name"}/>
            <Input InputType={"text"} Inputplaceholder={"Last Name"}/>
            <Input InputType={"email"} Inputplaceholder={"Email"}/>
            <Input InputType={"password"} Inputplaceholder={"Password"}/>
            <Input InputType={"password"} Inputplaceholder={"Confirm password"}/>
            <Button ButtonText={"Register"}/>

        </div>
            
        </>
    )
}