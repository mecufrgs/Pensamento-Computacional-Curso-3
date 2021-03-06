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
class SlideSix extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Exposição sobre o Bairro a partir do Portfólio'/>
          <p>O rico material que deu origem ao portfólio do bairro deverá ser socializado na forma de uma exposição. Para atender a demandas de diferentes grupos e organizações que se prontificaram a hospedá-la, a exposição será &quot;itinerante&quot;, ficando certo período em cada local.</p>

          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Arte, História, Geografia e Língua Portuguesa.</TextBNCC>
          <p>Considerando as atividades envolvidas em ações desse tipo, qual das afirmativas a seguir parece <b>menos adequada</b> ao propósito?</p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSix
