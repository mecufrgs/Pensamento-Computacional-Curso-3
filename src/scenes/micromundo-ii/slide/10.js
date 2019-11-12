import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideSeven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
         <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Organizando os produtos adquiridos'/>
          <p>Considerando as informações disponíveis sobre os produtos comprados, os professores podem elaborar atividades de estudo para diferentes disciplinas. A seguir apresentamos algumas possibilidades, cada uma relacionada com um pilar do Pensamento Computacional. </p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Ciências e Língua Portuguesa.</TextBNCC>
          <p>Selecione a alternativa que lhe pareça <b>menos apropriada.</b></p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
