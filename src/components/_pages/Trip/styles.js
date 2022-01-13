import styled, { css } from 'styled-components'

export const Container = styled.div`
background-color: #1b6df2;
height: 100vh;
width: 100vw;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 16px;

h1 {
    text-transform: uppercase;
}

p {
    font-size: 14px;
}
`

export const ListContainer = styled.div`
background-color: white;
color: #1b6df2;
padding: 24px;
width: 100%;
max-width: 600px;
border-radius: 12px;
p {
    margin: 0;
}
`
export const Card = styled.div`
    ${({ isActive }) => css`
        border: 1px dashed #1b6df2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        margin-bottom: 12px;
        border-radius: 8px;
        transition: 140ms ease;
        background-color: ${isActive ? '#1b6df2' : 'none'};
        color: ${isActive ? 'white' : '#1b6df2'}; 
        text-decoration: ${isActive ? 'line-through' : 'none'};

        &:hover {
            cursor: pointer;
            color: #a0bce8;
            transition: 140ms ease;
        }
    `}
`   
