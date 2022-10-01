import { Card } from "../component/Card";
import { Control } from "../component/Controls";
import { List } from "../component/List";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";



export const HomePage = ({ countries, setCountries }) => {

    const navigate = useNavigate()
    const [filteredCountries, setFilteredCountries] = useState([])
    const handleSearch = (region, search) => {
        let data = [...countries];
        if (region) {
            console.log(region)
            data = data.filter(el => el.region === region.value)
        }

        if (search) {
            console.log(search)
            data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
        console.log(data)
    }
    useEffect(() => {

        if (!countries.length) axios.get(ALL_COUNTRIES)
            // .then(res=>setCountries(res.data))
            .then(({ data }) => setCountries(data))
    }, [])
    return (
        <div>
            <Control handleSearch={handleSearch} />
            <List>
                {
                    filteredCountries.map(el => {
                        const countyInfo = {
                            img: el.flags,
                            name: el.name,
                            info: [
                                {
                                    title: "Population",
                                    description: el.population.toLocaleString()
                                },
                                {
                                    title: "Region",
                                    description: el.region
                                },
                                {
                                    title: "Capital",
                                    description: el.capital
                                }
                            ]
                        }
                        return (
                            <Card key={el.name} {...countyInfo} onClick={() => navigate(`/country/${el.name}`)} />

                        )
                    })
                }
            </List>

        </div>
    )
}