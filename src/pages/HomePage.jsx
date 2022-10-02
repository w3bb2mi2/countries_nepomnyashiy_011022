import { Card } from "../component/Card";
import { Control } from "../component/Controls";
import { List } from "../component/List";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";



export const HomePage = ({ countries, setCountries, filteredCountries, setFilteredCountries }) => {

    const navigate = useNavigate()    
    
    const handleSearch = (region, search) => {
        if(!countries){return}
        console.log("working handleSearch ...")
        let data = [...countries];
        if(data.length === 0){return}
        if (region||"") {
            console.log(region)
            data = data.filter(el => el.region === region.value)
        }

        if (search) {
            
            data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
        console.log({data})
    }
    

    return (
        <div>
            <Control handleSearch={handleSearch} countries={countries}/>
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