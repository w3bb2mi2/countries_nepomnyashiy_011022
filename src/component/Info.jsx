import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { filterByCode, searchByCountry } from "../config";

const Wrapper = styled.section`
    margin-top: 3rem;
    display:grid;
    grid-template-columns: 100%;
    gap:2rem;

    @media(min-width:767px){
    grid-template-columns:minmax(100px, 400px) 1fr;
    align-items:center;
    gap: 5rem
    }
    @media(min-width:1024px){
        grid-template-columns: minmax(400px, 600px) 1fr
    }
`;
const InfoImage = styled.img`
    display: block;
    width: 300px;
`;
const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-bold);
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media(min-width:1024px){
        flex-direction: row;
    }
`;
const List = styled.ul`
    list-style:none;
    padding: 0px;
    margin: 0px;
`;
const ListItem = styled.li`
    line-height: 1.8;
    & > b{
        font-weight: var(--fw-bold)
    }
`

const Meta = styled.div`
    margin-top: 3rem;
`;
const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap:wrap;
`;
const Tag = styled.div`
    padding: 0 1rem;
    margin-top: 1rem;
    background: var(--color-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;

`;
export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push
    } = props;

    const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        axios.get(filterByCode(borders))
            .then(({data})=>setNeighbors(data))

    }, [borders])

    const navigate = useNavigate()

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>

                        <ListItem>
                            <b>Native Name: </b>{nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b>{(population / 1000000).toFixed(0)} млн.чел.
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b>{capital}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b>{region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region: </b>{subregion}
                        </ListItem>
                        <ListItem>
                            <b>topLevelDomain: </b>{topLevelDomain}
                        </ListItem>
                        <ListItem>
                            <b>Сurrency: </b>{currencies[0]?.code}
                        </ListItem>
                        <ListItem>
                            <b>Сurrency: </b>{currencies[0]?.code}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Languages: </b>
                    <TagGroup>
                        {languages.map(el => (<Tag key={el}>{el.name}</Tag>))}
                    </TagGroup>

                </Meta>
                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (<span>There is no border...</span>) :
                        <TagGroup>
                            {neighbors.map(el => (<Tag onClick={()=>{navigate(`/country/${el.name}`)}} key={el.name}>{el.name}</Tag>))}
                        </TagGroup>
                    }
                </Meta>
            </div>
        </Wrapper>
    )
}