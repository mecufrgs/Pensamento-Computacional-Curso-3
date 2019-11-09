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
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Nova premiação'/>
          <p>Além da premiação convencional, baseada nos resultados e pontuação de atletas e equipes, a coordenação dos Jogos Estudantis decidiu estabelecer uma nova categoria de premiação, chamada de &quot;representatividade esportiva&quot;, e solicitou aos representantes das escolas que selecionassem os aspectos a serem considerados para a pontuação dessa nova categoria.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Ciências, Matemática, Arte, Geografia e Língua Portuguesa.</TextBNCC>

          <p>Indique qual dos pilares do Pensamento Computacional parece mais adequado para essa tarefa:</p>
          <IntegralActivity activity={Activities.getMicromundoIVActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEight
