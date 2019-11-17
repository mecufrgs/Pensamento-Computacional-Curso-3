import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Bold from '../../../components/text/bold'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'


class SlideThree extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Organizando as Barracas'/>
            <p>Para viabilizar a realização da feira beneficente com a venda de produtos de artesãos locais, a administração municipal cedeu uma certa quantidade de barracas e orientou a coordenação da feira sobre as regras envolvidas (espaçamento mínimo entre as barracas, pontos de energia, espaço para circulação de pedestres, acesso de veículos para carga e descarga, etc.).</p>
            <Subtitle>Questões Avaliativas</Subtitle> 
            <p>Prosseguindo em nossa situação-problema, você é convidado a associar, a cada uma das propostas, o pilar do Pensamento Computacional <Bold>mais
apropriado. </Bold></p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
