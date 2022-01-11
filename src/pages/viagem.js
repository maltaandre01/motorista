import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Viagem () {
    return (
    <Container>
        <h1>faça o checklist da sua viagem </h1>
        <ListContainer>
            <Card>
                <h2>Trocar o óleo</h2>
                <AiOutlineCheckCircle size={24} />
            </Card>
            <Card>
                <h2>Verificar o nivel de água</h2>
                <AiOutlineCheckCircle size={24} />
            </Card>
            <Card>
                <h2>Conferir os pneus</h2>
                <AiOutlineCheckCircle size={24} />
            </Card>
        </ListContainer>
        <p>Isso e apenas uma recomendação, consulte seu mecânico antes de viajar.</p>
    </Container>
    
    
    )
}

const Container = styled.div`
    background-color: red;
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

const ListContainer = styled.div`
    background-color: white;
    color: red;
    padding: 24px;
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    p {
        margin: 0;
    }
    `
const Card = styled.div`
    border: 1px dashed red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 12px;
    border-radius: 8px;
    transition: 140ms ease;
    
    &:hover {
        cursor: pointer;
        color: pink;
        transition: 140ms ease;
    }
`   
