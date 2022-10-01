import { useParams } from "react-router-dom"

export const Details = () =>{
    const {name} = useParams()
    console.log(name)
    return(
        <div>
            {name}
        </div>
    )
}