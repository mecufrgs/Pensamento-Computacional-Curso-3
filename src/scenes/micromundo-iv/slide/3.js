import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'
import Bold from '../../../components/text/bold'

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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 1' subtitle='Preparando a Escola para as Olimpíadas'/>
            <p>Cada escola precisa definir de que maneira pode e deseja participar da competição, orientando então o planejamento de atividades com vistas a obter resultados compatíveis com a infraestrutura disponível, o investimento em preparação e treino, o potencial dos estudantes e times envolvidos, etc.</p>
            <Subtitle>Questões Avaliativas</Subtitle> 
             <Subtitle>Questões Avaliativas</Subtitle> 
            <p>Convidamos você a selecionar, nas Questões Avaliativas que seguem, o pilar do Pensamento Computacional <Bold>mais apropriado</Bold> para apoiar a execução de tarefas e a solução de problemas relacionados a Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
