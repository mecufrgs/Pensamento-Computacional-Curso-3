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
class SlideEight extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Projeto Participativo para o Parque'/>
          <p>Um dos pressupostos para a definição do parque é que ele seja um recurso compartilhado por todos, sendo necessário, portanto, oferecer oportunidades para todas as necessidades e preferências possíveis.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Ciências, Matemática, Arte, Geografia e Língua Portuguesa.</TextBNCC>
          <p>Selecione, das afirmativas a seguir, <b>a que não está correta</b> ao se referir à solução para essa proposta, considerando o Pensamento Computacional:</p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEight
