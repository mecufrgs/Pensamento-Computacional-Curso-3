import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import FalaUmSVG from '../../../images/content/micromundo-iv/5-fala1.svg'
import FalaDoisSVG from '../../../images/content/micromundo-iv/5-fala2.svg'
import FalaTresSVG from '../../../images/content/micromundo-iv/5-fala3.svg'

import OlimpiadaSVG from '../../../images/content/micromundo-iv/olimpiada.svg'
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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_IV_DIALOG} />
        <PrimaryText>
          <p>Anualmente várias escolas, especialmente aquelas que integram a rede pública, participam de um evento chamado "Jogos Estudantis" ou "Olimpíadas Escolares", envolvendo várias escolas distribuídas por várias regiões de uma cidade. Muitos professores participam diretamente desses jogos, auxiliando na organização, treinamento, logística, etc.</p>
          <p>Nesse tipo de evento há um conjunto de ações cujo planejamento, organização e desenvolvimento podem envolver muitos elementos estudados no Ensino Fundamental, de um modo transversal a várias áreas, segundo uma perspectiva interdisciplinar. </p>
          <p> Por essa razão propomos explorar alguns dos elementos envolvidos na organizaçao de Olimpíadas Escolares, buscando ilustrar como os pilares do Pensamento Computacional, associados a certas habilidades específicas, podem auxiliar na construção de soluções.</p>
          <Image src={OlimpiadaSVG} />
          <EmptySpace />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
