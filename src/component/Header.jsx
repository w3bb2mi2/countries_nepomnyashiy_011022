import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from './Container'


const HeaderEl = styled.header`
    box-shadow:var(--shadow);
    background-color:(--colors-ui-base)j;
    padding: 2rem 0;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled(Link).attrs({
    to: "/",
})`
    color: var(--color-text)
`
const ModeSwitcher = styled.div`
    color: var(--color-text);
    font-size: var(--fs-sm);
    align-items: center;
    font-weight: var(--fw-bold);
    cursor:pointer;
    text-transform: capitalize;
`

export const Header = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = ()=>{
        setTheme(theme === "light"? "dark":"light")  
    }
    useEffect(()=>{
        document.body.setAttribute("data-theme", theme)
    }, [theme])
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoon/> {theme==="dark"?"light":"dark"}                                          
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
        // <div>
        //     hello
        // </div>
    )
}