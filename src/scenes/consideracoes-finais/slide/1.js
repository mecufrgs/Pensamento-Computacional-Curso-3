import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import FamiliaSVG from '../../../images/content/micromundo-iii/familia.svg'
import FalaUmSVG from '../../../images/content/micromundo-iii/1-1-fala.svg'
import FalaDoisSVG from '../../../images/content/micromundo-iii/1-2-fala.svg'
import FalaTresSVG from '../../../images/content/micromundo-iii/1-3-fala.svg'

/*Props
  renderTop: function(bool), called to show the header
*/
class One extends React.Component {
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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.CONSIDERACOES_FINAIS_DIALOG} />
        <PrimaryText>
          <Subtitle>CONSIDERAÇÕES FINAIS</Subtitle>
          <p>Parabéns! Você chegou ao final do nosso curso!</p>
          <p>Espero que ele tenha despertado em você o interesse em refletir e identificar, na sua prática diária em sala de aula,  oportunidades para explorar o Pensamento Computacional nos Anos Finais do Ensino Fundamental!</p>
          <EmptySpace/>
          <p>Neste curso vimos, através dos Micromundos, que o Pensamento Computacional está naturalmente presente em nossa prática diária, permeando o cotidiano, em variadas situações que podem ser exploradas em sala de aula, no contexto da BNCC.</p>
          <p>Reconhece-se hoje, internacionalmente, a importância das estratégias de raciocínio do Pensamento Computacional para a realidade do mundo atual. E as pesquisas apontam que  essas estratégias deveriam ser desenvolvidas não só nos primeiros anos de escolaridade, capitalizando a naturalidade das crianças para essa forma de pensamento, mas ao longo de toda a vida escolar das crianças e jovens.</p>
          <p>Existe no mundo um número não desprezível de materiais para trabalhar com Pensamento Computacional, mas nem sempre o enfoque privilegia os quatro pilares.</p>
          <p>Assim, este curso voltado para os  Anos Finais do Ensino Fundamental, insere-se no esforço:</p>
          <ul>
            <li>Do efetivo desenvolvimento do Pensamento Computacional, também nos Anos Finais do Ensino Fundamental;</li>
            <li>De sensibilização e motivação dos professores para realizarem o trabalho com o Pensamento Computacional em sala de aula, embasado no uso dos quatro pilares, não necessariamente usando soluções prontas e acabadas, mas principalmente apontando caminhos para que o professor desenvolva os seus próprios recursos, ampliando o acervo pedagógico para o tema.</li>
          </ul>
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
