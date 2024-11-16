import { useNavigate } from  "react-router-dom"

import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { Container, TextContext, Title, TitleHighLight } from './styles'

const Home = () => {

  const navigate = useNavigate();
  
  const handleClickSignIn = () =>{
    navigate('/login')
  }

  return (<>
      <Header/>
      <Container>
        <div>
          <Title>
            <TitleHighLight>
                Implemente 
                <br/>
            </TitleHighLight>
            O seu futuro global agora!
          </Title>
          <TextContext>
            Domine as tecnologias utilizada pelas empresas mais inovadoras do mundo.
          </TextContext>
          <Button title="Começar agora" variant="secondary" onCLick={handleClickSignIn}/>
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal"/>
        </div>
      </Container>
    </>)
}

export { Home }