import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import QuadroUmSVG from '../../../images/content/introducao/CaixaTextoIntro.svg'
import PilaresSVG from '../../../images/content/introducao/I1-pilares.svg'

import FalaUmSVG from '../../../images/content/introducao/1-fala1.svg'
import FalaDoisSVG from '../../../images/content/introducao/1-fala2.svg'
import FalaTresSVG from '../../../images/content/introducao/1-fala3.svg'

/*Props
  renderTop: function(bool), called to show the header
*/
class SlideOne extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }

  getSlideImage = id => {
    switch(id){
      case 1: 
        return FalaUmSVG
      case 2: 
        return FalaDoisSVG
      case 3: 
        return FalaTresSVG
      default:
        throw Error('Erro ao buscar slide desconhecido.')
    }
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.INTRODUCAO_DIALOG} />
        <PrimaryText>
          
          <p>No curso <i>Introdução ao Pensamento Computacional</i>, foram trabalhados os quatro pilares do Pensamento Computacional (<b>Abstração</b>, <b>Decomposição</b>, <b>Reconhecimento de Padrões</b> e <b>Algoritmos</b>) e foram também apresentadas aplicações desses pilares em situações práticas.</p>
          <EmptySpace />
          <Image src={PilaresSVG} />
          <EmptySpace />
          <Image className='highlightbox' src={QuadroUmSVG} alt='O presente curso, <b><i>Aplicações do Pensamento Computacional para os Anos Finais do Ensino Fundamental</i></b>, apresentará exemplos de como você poderá apoiar o desenvolvimento do Pensamento Computacional, para alunos nessa etapa de escolarização, e seguirá a mesma organização do curso  relativo aos Anos Iniciais.'/>
          <EmptySpace />
        </PrimaryText> 
      </ContentBox>
    )
  }
}

export default SlideOne
