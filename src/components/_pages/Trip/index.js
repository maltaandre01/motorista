import { Container, Card, ListContainer } from './styles'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useState } from 'react'


export default function Viagem() {

    const [checklist, setChecklist] = useState([])

    function toggleCard(id) {
        if (checklist.includes(id)) {
            setChecklist(checklist.filter(el => el !== id))
        } else {
            setChecklist(checklist.concat(id))
        }
    }

    return (
        <Container>
            <h1>faça o checklist da sua viagem.</h1>
            <ListContainer>
                <Card isActive={checklist.includes(0)} onClick={() => toggleCard(0)}>
                    <h2>Trocar o óleo</h2>
                    <AiOutlineCheckCircle size={24} />
                </Card>
                <Card isActive={checklist.includes(1)} onClick={() => toggleCard(1)}>
                    <h2>Verificar o nivel de água</h2>
                    <AiOutlineCheckCircle size={24} />
                </Card>
                <Card isActive={checklist.includes(2)} onClick={() => toggleCard(2)}>
                    <h2>Conferir os pneus</h2>
                    <AiOutlineCheckCircle size={24} />
                </Card>
            </ListContainer>
            <p>Isso e apenas uma recomendação, consulte seu mecânico antes de viajar.</p>
        </Container>
    )
}
