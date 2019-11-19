import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import FeiraSVG from '../../../images/content/micromundo-ii/Feira.svg'

import FalaUmSVG from '../../../images/content/micromundo-ii/3-fala1.svg'
import FalaDoisSVG from '../../../images/content/micromundo-ii/3-fala2.svg'
import FalaTresSVG from '../../../images/content/micromundo-ii/3-fala3.svg'
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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_II_DIALOG} />
        <PrimaryText>
          <p>A feira livre é uma modalidade de comércio que data de épocas bastante remotas.</p>
          <p>Originalmente, a feira livre era um local em que as pessoas podiam trocar ou até comercializar as mercadorias que produziam, para obter outras de que necessitavam. Com o tempo as feiras livres passaram também a ser espaços para conhecer pessoas e  produtos, trocar objetos manufaturados (inclusive artesanato), saber das novidades, discutir política, etc.</p>
          <p>Hoje, mesmo com a existência de outras opções para essas atividades, as feiras livres, por seu encanto e praticidade, permanecem atrativas, muito pelo fato de que nelas cada feirante é um comércio à parte, com características definidas por cada um.</p>
          <p>O conceito de feira modernamente é usado em diferentes situações. Hoje há feiras beneficentes, do livro, para liquidação de estoque, agropecuárias, industriais e até mesmo de ciências.</p>
          <p>Na escola, usando os espaços de feiras, podemos elaborar diferentes eventos e situações-problema, para apoiar o desenvolvimento dos estudantes nas diversas áreas de conhecimento.</p>
          <p>Excelentes oportunidades de aprendizagem podem surgir de um passeio de reconhecimento, uma saída para compras, uma visita para conversar com os profissionais e até mesmo na concepção e organização de feiras temáticas.</p>
          <EmptySpace />
          <Image src={FeiraSVG} />
          <EmptySpace />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
