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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Apresentação sobre a Vida da Dona Veridiana'/>
            <p>As crianças da família decidiram fazer uma apresentação sobre a vida da Dona Veridiana. A ideia central é que elas se organizem em grupos e que  cada um apresente, da maneira que achar mais conveniente, diferentes aspectos da sua vida, em torno de uma "linha do tempo", de sua chegada ao Brasil até a idade atual.</p>
            <p>Imagine então que você, car@ cursista, a partir de um debate com seus alunos, planejou três atos para a apresentação: <i>Uma Vida em Imagens</i>; <i>Músicas Típicas</i>; e <i>Os Caminhos de Dona Veridiana</i>. O que são algumas possibilidades, entre tantas que você poderia ter pensado.</p>
            <Subtitle>Questões Avaliativas</Subtitle> 
            <p>Convidamos você a selecionar, nas Questões Avaliativas que seguem, o pilar do Pensamento Computacional <Bold>mais apropriado</Bold> para apoiar a execução de tarefas relacionadas a Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
