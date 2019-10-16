import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import CasasSVG from '../../../images/content/micromundo-i/casas.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Five extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Realização de Exposição Itinerante sobre o Bairro a partir do Material do Portfólio'/>
          <p>O rico material que deu origem ao portfólio do bairro deverá ser socializado na forma de uma exposição. Para atender a demandas de diferentes grupos e organizações que se prontificaram a hospedá-la, a exposição será &quot;itinerante&quot;, ficando certo período em cada local.</p>
          <EmptySpace />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Arte, História, Geografia e Língua Portuguesa.</TextBNCC>
          <p>Considerando as atividades envolvidas em ações desse tipo, qual das afirmativas a seguir parece <b>menos adequada</b> ao propósito?</p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Five
