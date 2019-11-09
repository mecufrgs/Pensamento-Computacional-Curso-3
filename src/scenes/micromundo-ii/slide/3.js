import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'


class SlideThree extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Organizando as barracas'/>
            <p>A administração municipal cedeu uma certa quantidade de barracas e orientou a coordenação da feira beneficente sobre as regras envolvidas (espaçamento mínimo, pontos de energia, espaço para circulação de pedestres, acesso de veículos para carga e descarga, etc.).</p>
            <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
