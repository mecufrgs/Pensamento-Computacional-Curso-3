import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import BairroSVG from '../../../images/content/micromundo-iii/Bairro.svg'

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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_III_DIALOG} />
        <PrimaryText>
          <Subtitle>O BAIRRO ONDE MORAMOS</Subtitle>
          <p>Car@ cursista:</p>
          <p>Chegamos ao terceiro Micromundo.</p>
          <p>Nele vamos explorar situações relativas ao bairro onde moramos, tão importante para a nossa vida familiar e de nossas crianças.</p>
          <p>E vamos resolver algumas questões usando os pilares do Pensamento Computacional!</p>
          <EmptySpace/>
          <p>O bairro onde moramos é um espaço geopolítico rico o suficiente para que as crianças construam uma boa visão da organização geográfica, social, cultural e econômica, fundamentais para a vida em sociedade e para o convívio saudável com o meio ambiente e com outros seres vivos.</p>
          <p>Nosso bairro tem uma localização específica dentro de nossa cidade, faz fronteira com os bairros vizinhos e é constituído por várias ruas. As ruas possuem nomes, o que pode nos levar a tomar conhecimento de pessoas e/ou acontecimentos que de alguma forma estão associados com a história de nosso bairro, nossa cidade, nosso estado, nosso país ou até mesmo da humanidade.<p>
          <p>Explorar e conhecer a história de nossas ruas é por certo uma fonte inesgotável de conhecimento específico, mas, o que é mais importante, pode ajudar-nos a criar uma visão mais ampla que podemos extrapolar para compreender o mundo.</p>
          <p>A exploração pode partir das ruas nas quais moram os alunos de uma turma, depois incluir as ruas de todos os alunos que estudam em nossa escola, sempre buscando conhecer melhor nosso bairro.</p>
          <p>No bairro em que moramos encontramos diversos estabelecimentos comerciais, praças, igrejas, ambientes públicos ou privados de trabalho e lazer, postos de saúde, delegacias, hospitais, etc. Ao &quot;inventariarmos&quot; esses estabelecimentos, ou explorarmos questões como transporte urbano, abastecimento de água e de energia elétrica, ampliaremos nossa compreensão sobre os diferentes serviços disponíveis para a comunidade.<p>
          <EmptySpace />
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image  center width="534px"  src={OlimpiadaSVG} alt='Feira'/>
            </div>
          </div>
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
