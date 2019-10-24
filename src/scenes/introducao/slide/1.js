import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

/*Props
  renderTop: function(bool), called to show the header
*/
class SlideOne extends React.Component {
  constructor(props){
    super(props)
    
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.INTRODUCAO_DIALOG} />
        <PrimaryText>
          <Subtitle>INTRODUÇÃO</Subtitle>
          <p>Olá! Eu sou a Mariana.</p>
          <p>Vou acompanhá-l@s na exploração dos pilares do Pensamento Computacional, no trabalho com seus alunos nos Anos Finais do Ensino Fundamental!</p>
          <p>Vamos explorar quatro Micromundos (família, feira livre, bairro e olimpíadas escolares), com seus Eventos, Situações-problema e Questões Avaliativas associadas.</p>
          <p>Antes de prosseguirmos, é importante que você tenha bem presentes os conhecimentos adquiridos no curso de Introdução ao Pensamento Computacional!</p>
          <p>No curso <i>Introdução ao Pensamento Computacional</i>, foram trabalhados os quatro pilares do Pensamento Computacional (<b>Abstração</b>, <b>Decomposição</b>, <b>Reconhecimento de Padrões</b> e <b>Algoritmos</b>) e foram também apresentadas aplicações desses pilares em situações práticas.</p>
          <p>O curso <i>Aplicações do Pensamento Computacional para os Anos Iniciais do Ensino Fundamental</i> estimulou a reflexão e a identificação de oportunidades para a aplicação em sala de aula dos quatro pilares do Pensamento Computacional, considerando habilidades elencadas na BNCC.</p>
          <p>O presente curso, <i>Aplicações do Pensamento Computacional para os Anos Finais do Ensino Fundamental</i>, apresentará exemplos de como você poderá apoiar o desenvolvimento do Pensamento Computacional, para alunos nessa etapa de escolarização, e seguirá a mesma organização do curso  relativo aos Anos Iniciais.</p>
          <EmptySpace />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
