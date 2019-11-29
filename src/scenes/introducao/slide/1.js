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
          <p>Este curso assume conhecimentos prévios sobre Pensamento Computacional, em particular sobre os seus quatro pilares: <b>Abstração</b>, <b>Decomposição</b>, <b>Reconhecimento de Padrões</b> e <b>Algoritmos</b></p>   
          <EmptySpace />
          <Image src={PilaresSVG} />
          <EmptySpace />
          <p>Se você tiver dúvidas quanto a esses quatro pilares, sugerimos que, antes deste curso, realize o curso "Introdução ao Pensamento Computacional", disponível nesta mesma plataforma.</p>
          <Image className='highlightbox' src={QuadroUmSVG} alt='O presente curso, <b><i>Aplicações do Pensamento Computacional para os Anos Finais do Ensino Fundamental</i></b>, apresentará exemplos de como você poderá apoiar o desenvolvimento do Pensamento Computacional, para alunos nessa etapa de escolarização.'/>
          <EmptySpace />
          <p>Os conhecimentos sobre Computação e computadores exigidos para realizar este curso são somente  aqueles necessários para acessá-lo e acompanhá-lo nesta plataforma. Entretanto, a eventual aplicação dos conhecimentos aqui desenvolvidos sobre o tema Pensamento Computacional, pelo professor em sala de aula, poderá dar-se tanto de forma plugada, quanto desplugada.</p> 
        </PrimaryText> 
      </ContentBox>
    )
  }
}

export default SlideOne
