import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import FalaMarianaSVG from '../../../images/content/micromundo-i/fala-mariana.svg'

class SlideTwo extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={1} title='EVENTO' subtitle='Planejamento e Preparação'/>
            <p>Na maioria dos casos há pontos pré-definidos no planejamento desse tipo de torneio, como a duração, o período do ano, a quantidade de "rodadas" e as categorias de premiação. Há também um amplo conjunto de elementos que precisam ser ajustados a cada edição dos jogos, por exemplo aqueles relacionados a atletas, times, treinadores, equipes de apoio e torcedores.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTwo
