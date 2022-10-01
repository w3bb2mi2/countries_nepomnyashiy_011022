import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'


const InputContainer = styled.label`
    background-color: var(--colors-bg);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow:var(--shadow);
    width: 100%;
    @media(min-width: 767px){
        margin-bottom: 0;
        width: 280px;
    }
`
const Input = styled.input.attrs({
    type: 'search',
    placeholder: "Search"
})`
    margin-left: 2rem;
    border:none;
    outline:none;
    background: var(--colors-bg);
    color: var(--colors-text)
`

export const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={e=>setSearch(e.target.value)} value={search} />
        </InputContainer>
    )
}