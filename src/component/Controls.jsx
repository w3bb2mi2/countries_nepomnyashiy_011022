import { useEffect, useState } from "react"
import styled from "styled-components"
import { CustomSelect } from "./CustomSelect"
import { Search } from "./Search"

const option = [
    { value: "Africa", label: "Africa" },
    { value: "Europe", label: "Europe" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Oceania", label: "Oceania" },

]

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;

    @media(min-width: 767px){
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
    }
`

export const Control = ({handleSearch, countries}) => {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    useEffect(()=>{
        handleSearch(region, search)
    },[region, search, countries])

    useEffect(()=>{},[search, ])
    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={option}
                placeholder="Filter by Region"
                isClearable
                isSearchable="false"
                value={region}
                onChange={setRegion}
                
            />
        </Wrapper>
    )
}