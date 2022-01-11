import styled from 'styled-components'
export default function Home (){
  return(
    <Container>
      <h1>Esta indo viajar?!</h1>
      <p> Temos opções para voçe se preparar!</p>
      <CardContainer>
        <Card href='/viagem'>
          <h2>checklist</h2>
        </Card>
        <Card>
          <h2>encontre um mecânico</h2>
        </Card>
      </CardContainer>
      
    </Container>
  )
}

const Container = styled.div`
  background-color: #fbfbfb;
  height: 100vh;
  width: 100vw;
  color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size:42px ;
  }

  p {
    color: #1c1c1c;
    font-size:24px;
  }
  
`
const Card = styled.a`
  height: 120px;
  width: 220px;
  border: 2px solid blue;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  color: blue;
  text-transform: uppercase;
  transition: 140ms ease;
  padding: 0 12px;
  text-align: center;
  
  &:hover {
    cursor: pointer;
    color: white;
    background-color: blue;
    transition: 140ms ease;
  }
`
const CardContainer = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 24px;
`
