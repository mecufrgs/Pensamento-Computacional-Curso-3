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
class SlideFour extends React.Component {
  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Planejamento da Apresentação'/>
          <p>No planejamento inicial da apresentação da vida de D. Veridiana, em três atos: <b>Uma Vida em Imagens</b>; <b>Músicas Típicas</b>; e <b>Os Caminhos da Dona Veridiana</b>,  qual  o pilar do Pensamento Computacional que foi exercitado <b>com mais ênfase?</b></p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, História, Geografia e Língua Portuguesa.</TextBNCC>
          <IntegralActivity activity={Activities.getMicromundoIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
