import { Link } from  "react-router-dom"

import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Header } from "../../components/Header"

import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {
  return (<>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title> Feed </Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo percentual={80} nome="Marcio Pozzi" image='https://avatars.githubusercontent.com/u/164355591?v=4'/>
          <UserInfo percentual={23} nome="Marcio Pozzi" image='https://avatars.githubusercontent.com/u/164355591?v=4'/>
          <UserInfo percentual={64} nome="Marcio Pozzi" image='https://avatars.githubusercontent.com/u/164355591?v=4'/>
          <UserInfo percentual={24} nome="Marcio Pozzi" image='https://avatars.githubusercontent.com/u/164355591?v=4'/>
          <UserInfo percentual={11} nome="Marcio Pozzi" image='https://avatars.githubusercontent.com/u/164355591?v=4'/>
        </Column>
      </Container>
    </>)
}

export { Feed }