import { Button } from "../components/Buttons/Buttons"
import { Heading } from "../components/Headings/Heading"
import { Input } from "../components/Input/input"
export const LoginPage  = () =>{
    return(
        <>
            <Heading text = 'Login!'/>
            <Input InputType={"text"} Inputplaceholder={"Login"}/>
            <Input InputType={"password"} Inputplaceholder={"Password"}/>
            <Button ButtonText={"Submit"}/>
            <a href="#">Don&apos;t have an account, register here...</a>
        </>
    )
}