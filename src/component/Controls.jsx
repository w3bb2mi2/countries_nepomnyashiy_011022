import { useState } from "react"
import styled from "styled-components"
import { CustomSelect } from "./CustomSelect"
import { Search } from "./Search"

const option = [
    { value: "Africa", label: "Africa" },
    { value: "Europa", label: "Europa" },
    { value: "America", label: "America" },
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

export const Control = () => {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("")
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