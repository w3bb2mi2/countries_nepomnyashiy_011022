import { useNavigate, useParams } from "react-router-dom"

import { IoArrowBack } from "react-icons/io5"
import { useEffect, useState } from "react"
import axios from "axios"
import { searchByCountry } from "../config"
import { Button } from "../component/Button"
import { Info } from "../component/Info"

export const Details = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)

    console.log(country)
    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(...data))
    }, [name])

    return (
        <>
            <button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </button>
        
            
            <Info {...country}/>
        </>
    )
}