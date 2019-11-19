import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'

class SlideTwo extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <p>Este curso não tem como pré-requisito conhecimentos sobre Computação e computadores, exceto os necessários para acessá-lo e acompanhá-lo nesta plataforma de ensino. Entretanto, a eventual aplicação dos conhecimentos aqui desenvolvidos sobre o tema Pensamento Computacional, pelo professor em sala de aula, pode se dar tanto de forma plugada quanto desplugada.</p>
            <p>É importante destacar que quando se pensa em estratégias para apoiar o  desenvolvimento de uma forma de pensamento, como é o Pensamento Computacional, a ação é um elemento fundamental. Pensa-se para viver e vive-se pensando, assim, para trabalhar os quatro pilares do Pensamento Computacional, nada melhor do que vivenciar situações que sejam propícias ao seu uso e desenvolvimento.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTwo
