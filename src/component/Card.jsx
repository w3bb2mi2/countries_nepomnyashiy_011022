import styled from "styled-components"

const Wrapper = styled.article`
    border-radius: var(--radii);
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hiddem;
    
`
const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow:var(--shadow)
    
`
const CardBody = styled.div`
// margin: 0;
// padding: 0.5rem;
`
const CardTitle = styled.h3`
margin: 0;
padding: 0.5rem;
`
const CardList = styled.ul`
margin: 0;
padding: 0.5rem;

`
const CardListItem = styled.li`
    list-style: none;
    // margin: 0;
    // padding:0;
    & > b{
        font-weight: var(-fw-bold);
    }
`


export const Card = ({img, name, info=[], onClick}) => {
    return(
        <Wrapper onClick={onClick}>
            <CardImage src={img.png}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {
                        info.map(el=>(
                            <CardListItem key={el.title}>
                                <b>{el.title}: </b>{el.description}
                            </CardListItem>
                        ))
                    }
                </CardList>
            </CardBody>

        </Wrapper>
    )
}