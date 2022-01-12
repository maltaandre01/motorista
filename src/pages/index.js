import Link from 'next/link'
import styled from 'styled-components'
export default function Home (){
  return(
    <Container>
      <h1>Esta indo viajar?!</h1>
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

const Container = styled.div`
  background-color: #fbfbfb;
  height: 100vh;
  width: 100vw;
  color: #1b6df2;
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
  
  .aux-text {
    font-size: 14px;
    color: grey;
    margin-top: 24px;
  }
  
  .link {
    color: #1b6df2;
    transition: 140ms ease;
    
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: 140ms ease;
      
    } 
  }

  
`
const Card = styled.a`
  height: 120px;
  width: 220px;
  border: 2px solid #1b6df2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  color: #1b6df2;
  text-transform: uppercase;
  transition: 140ms ease;
  padding: 0 12px;
  text-align: center;
  
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #1b6df2;
    transition: 140ms ease;
  }
`
const CardContainer = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 24px;
`
