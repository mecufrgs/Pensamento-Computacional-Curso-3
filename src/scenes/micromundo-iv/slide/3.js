import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'

import QuadroUmSVG from '../../../images/content/micromundo-iv/micromundo4pg3.svg'
import Image from '../../../components/image'
class SlideThree extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='A escola, seleção de modalidades e preparação das equipes'/>
            <EmptySpace/>
            <Image className='highlightbox' src={QuadroUmSVG} alt='Cada escola precisa definir de que maneira pode e deseja participar da competição, orientando então o planejamento de atividades com vistas a obter resultados compatíveis com a infraestrutura disponível, o investimento em preparação e treino, o potencial dos estudantes e times envolvidos, etc.'/>
            <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
