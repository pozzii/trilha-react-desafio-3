import React from 'react'

import 
{
CardContainer,
Content, 
HasInfo, 
ImageBackground, 
PostInfo, 
UserInfo, 
UserPicture
} from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://blog.rocketseat.com.br/content/images/2024/02/htmlcssjs.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/164355591?v=4'/>
                <div>   
                    <h4>Marcio Pozzi</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curdo de HTML e CSS</h4>
                <p> Projeto feito no curso de HTML e CSS no bootcamp do Santander di...<strong>Saiba Mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp/>
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }