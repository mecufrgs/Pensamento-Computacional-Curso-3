import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'
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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Organizando as barracas'/>
            <p>A administração municipal cedeu uma certa quantidade de barracas e orientou a coordenação da feira beneficente sobre as regras envolvidas (espaçamento mínimo, pontos de energia, espaço para circulação de pedestres, acesso de veículos para carga e descarga, etc.).</p>
            <EmptySpace/>
            <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Formação das equipes'/>
            <p>As equipes de voluntários serão agrupadas de acordo com as tarefas necessárias como: transporte (ida/volta); montagem/desmontagem; venda (organizada em turnos); contabilidade; apoio (alimentação, logística, etc.).</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Geografia, Matemática, Ciências e Língua Portuguesa.</TextBNCC>
            <p>Qual dos pilares do Pensamento Computacional seria <b>mais útil</b> para tratar essa questão?</p>
            <IntegralActivity activity={Activities.getMicromundoIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
