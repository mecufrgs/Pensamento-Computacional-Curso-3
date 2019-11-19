import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideFive extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='Sobre Preparação Física'/>
          <p>A preparação física inclui flexibilidade, treinamento de força e treinamento de resistência, com os exercícios organizados e sequenciados especificamente para cada esporte ou competição.</p>
          <p>Selecione o par de pilares do Pensamento Computacional cuja <b>ordem de aplicação seja a mais adequada</b> para a definição de um plano de preparação física de um atleta.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Educação Física, Ciências, Língua Portuguesa e Matemática.</TextBNCC>
          <IntegralActivity activity={Activities.getMicromundoIVActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
