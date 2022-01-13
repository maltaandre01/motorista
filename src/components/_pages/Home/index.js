import { Container, CardContainer, Card } from './styles'

export default function Home (){
  return(
    <Container>
      <h1>Esta indo viajar?...</h1>
      <p> Temos opções para voçe se preparar!</p>
      <CardContainer>
        <Card href='/viagem'>
          <h2>faça o checklist</h2>
        </Card>
        <Card>
          <h2>planeje sua rota</h2>
        </Card>
      </CardContainer>
      <p className='aux-text'>Para mais informações, <a className='link'>encontre aqui</a> o  mecânico mais perto de você.</p>
    </Container>
  )
}

