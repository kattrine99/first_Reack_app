import './Input.css'
export const Input = ({Inputplaceholder , InputType}) => {
    return(
        <>
            <input type={InputType} placeholder={Inputplaceholder}></input>
        </>
    )
}