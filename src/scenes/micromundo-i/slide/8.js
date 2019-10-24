import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import CaminhosSVG from '../../../images/content/micromundo-i/caminhos.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideEight extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 5' subtitle='Os caminhos de D. Veridiana'/>
          <p>Um grupo será responsável por descrever os caminhos usualmente percorridos por D. Veridiana no seu dia a dia,  em três etapas diferentes da sua vida: quando morava com os pais, depois de casada e no momento atual. Os trajetos possíveis em cada uma dessas etapas de sua vida serão sequenciados segundo horas, dias ou eventos.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Geografia, Matemática e Língua Portuguesa.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que será <b>exercitado com mais ênfase</b> na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryFive(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEight
