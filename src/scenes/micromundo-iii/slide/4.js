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
            <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Solicitação de Ciclovia'/>
            <p>No levantamento realizado por nossos alunos, ficou evidenciado que nosso bairro tem um relevo que favorece o uso de bicicletas, e que muitas ruas têm condições para a criação de ciclovias.  Dada a impossibilidade de destinar recursos financeiros para construir ciclovias para todos os destinos, foi definido como objetivo identificar trajetos que contemplem os interesses de pelo menos 25% da população trabalhadora do bairro.</p>

            <p>Assim, os traçados para as ciclovias precisarão ser planejados de tal forma que facilitem o transporte dos moradores do bairro aos principais pontos de trabalho.</p>

            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Geografia, Matemática, Ciências e Língua Portuguesa.</TextBNCC>

            <p>Qual das seguintes atividades parece <b>menos apropriada</b> para contribuir com a solução do problema?</p>

            <IntegralActivity activity={Activities.getMicromundoIIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
