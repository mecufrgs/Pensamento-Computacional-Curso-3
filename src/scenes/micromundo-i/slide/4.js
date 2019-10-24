import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'
import CriancasSVG from '../../../images/content/micromundo-i/criancas.svg'

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
          <Subtitle>Atividades Avaliativas</Subtitle>
          <p>Prosseguindo em nossa situação-problema, você é convidado a associar,  a cada uma das propostas, o pilar do Pensamento Computacional mais apropriado.</p>
          <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Planejamento da apresentação sobre a vida da Dona Veridiana'/>
          <p>No planejamento da apresentação da vida de D. Veridiana, em três atos: <b>Uma vida em imagens</b>; <b>Música Típica</b>; e <b>Os caminhos da D. Veridiana</b>,  qual  o pilar do Pensamento Computacional que foi <b>exercitado com mais ênfase</b> nesse planejamento?</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, História, Geografia e Língua Portuguesa.</TextBNCC>
          <IntegralActivity activity={Activities.getMicromundoIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
