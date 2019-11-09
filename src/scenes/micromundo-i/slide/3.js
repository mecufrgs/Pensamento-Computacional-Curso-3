import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import SubtitleBar from '../../../components/subtitle-bar'
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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Apresentação sobre a vida da Dona Veridiana'/>
            <p>As crianças da família decidiram fazer uma apresentação sobre a vida da Dona Veridiana. A ideia central é que elas se organizem em grupos e que  cada um apresente, da maneira que achar mais conveniente, diferentes aspectos da sua vida, em torno de uma "linha do tempo", de sua chegada ao Brasil até a idade atual.</p>
            <p>Imagine então que você, car@ cursista, a partir de um debate com seus alunos, planejou três atos para a apresentação: Uma vida em imagens (que pelo esforço necessário, será desenvolvido por dois grupos); Música Típica; e Os caminhos de D. Veridiana. O que são algumas possibilidades, entre tantas que você poderia ter pensado.</p>
            <EmptySpace></EmptySpace>
            <Subtitle>Atividades Avaliativas</Subtitle>
            <p>Prosseguindo em nossa situação-problema, você é convidado a associar,
a cada uma das propostas, o pilar do Pensamento Computacional <Bold>mais
apropriado. </Bold></p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
