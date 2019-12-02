import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

class SlideFour extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Formação das Equipes'/>
            <p>As equipes de voluntários que irão trabalhar na organização da feira beneficente serão formadas de acordo com as tarefas necessárias, tais como: transporte dos produtos a serem comercializados; montagem e desmontagem das barracas; atendimento dos consumidores; contabilidade; tarefas de apoio (alimentação, logística, etc.).</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Geografia, Matemática, Ciências e Língua Portuguesa.</TextBNCC>
            <p>Qual dos pilares do Pensamento Computacional seria <b>mais útil</b> para tratar essa questão?</p>
            <IntegralActivity activity={Activities.getMicromundoIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
