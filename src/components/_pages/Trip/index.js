import { useState } from 'react'
import { Container, Card, ListContainer } from './styles'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { list } from '../../../constants/checklist'


export default function Viagem() {

    const [checklist, setChecklist] = useState([])

    function toggleCard(id) {
        if (checklist.includes(id)) {
            // REMOVENDO ITEM DA LISTA
            setChecklist(checklist.filter(el => el !== id))
        } else {
            // ADICIONANDO ITEM NA LISTA
            setChecklist(checklist.concat(id))
        }
    }

    return (
        <Container>
            <h1>faça o checklist da sua viagem.</h1>
            <ListContainer>
                {
                    list.map(item => (
                        <Card key={item.id} isActive={checklist.includes(item.id)} onClick={() => toggleCard(item.id)}>
                            <h2>{item.value}</h2>
                            <AiOutlineCheckCircle size={24} />
                        </Card>
                    ))
                }
            </ListContainer>
            <p>Isso e apenas uma recomendação, consulte seu mecânico antes de viajar.</p>
        </Container>
    )
}
