import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import FamiliaSVG from '../../../images/content/micromundo-i/Familia.svg'

import FalaUmSVG from '../../../images/content/micromundo-i/2-fala1.svg'
import FalaDoisSVG from '../../../images/content/micromundo-i/2-fala2.svg'
import FalaTresSVG from '../../../images/content/micromundo-i/2-fala3.svg'
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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_I_DIALOG} />
        <PrimaryText>
          <p>Neste Micromundo, as ações acontecem no seio de uma família bem brasileira, com pessoas de diferentes origens e etnias.</p>
          <p> Esse núcleo familiar está constituído pelo casal  Dona Veridiana (60), de origem italiana, que adora comemorações, e Seu Akira (70), de origem japonesa (os pais vieram do Japão). Dona Veridiana e Seu Akira têm 5 filhos: Pedro (42), casado com Dolores; Gustavo (36); Marta (40), casada com Paulo; Janaina (35); e Mariana (28). A caçula, Mariana, é casada com o Augusto, há 8 anos, e o casal tem dois filhos: José Carlos (7) e Ana Maria (5).</p>
          <p> Mais detalhes da árvore genealógica dessa família serão apresentados conforme for surgindo a necessidade de explorar eventos que integrem outros núcleos familiares. </p>
          <EmptySpace/>
          <Image src={FamiliaSVG} />
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
