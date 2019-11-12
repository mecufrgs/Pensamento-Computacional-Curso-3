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
            <p>Este curso, assim como os dois outros já citados, não tem como pré-requisito conhecimentos sobre Computação e computadores, exceto os necessários para acessar e acompanhar o curso nessa plataforma de ensino. Entretanto, a eventual aplicação dos conhecimentos aqui desenvolvidos sobre o tema Pensamento Computacional, pelo professor em sala de aula, pode se dar tanto de forma plugada quanto desplugada.</p>
            <p>É importante destacar que quando se pensa em estratégias para apoiar o  desenvolvimento de uma forma de pensamento, como é o Pensamento Computacional, a ação é um elemento fundamental. Pensa-se para viver e vive-se pensando, assim, para trabalhar os quatro pilares do Pensamento Computacional, nada melhor do que vivenciar situações que sejam propícias ao seu uso e desenvolvimento.</p>
            <p>O que apresentamos neste curso são exemplos que podem ser usados em sala de aula, mas que, sobretudo, objetivam ajudá-lo a compreender como você poderá construir situações que levem seus alunos a utilizarem o Pensamento Computacional como ferramenta de apoio ao desenvolvimento das habilidades recomendadas na BNCC, para os Anos Finais do Ensino Fundamental.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTwo
