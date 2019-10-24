import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
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
          <p>Este curso explorará <b>quatro Micromundos</b>, com contextos complexos, onde serão tratadas situações que envolvem conhecimentos de diferentes áreas do saber, favorecendo assim a vivência com o conceito de <b>Interdisciplinaridade</b>.</p>
          <p>Em cada um dos Micromundos, serão apresentados <b>Eventos</b> relevantes, ou seja, acontecimentos sociais, onde atividades significativas serão realizadas,  algumas de forma individual e outras de forma cooperativa. Em cada Evento serão selecionadas uma ou mais <b>Situações-problema</b>, e associadas a elas serão introduzidas <b>Questões Avaliativas</b>, onde serão sugeridas possibilidades de trabalho em classe, com o uso do Pensamento Computacional e habilidades conforme a BNCC.</p>
          <CenterBoxContainer>
            <Box backgroundColor={Color.GRAY_BOX}>
                <p>Observar que nos Micromundos serão apresentados cenários mais amplos que o exigido pelas questões propostas no texto. Os Micromundos conterão, portanto, elementos que permitirão a exploração de casos particulares e que esperamos favoreçam e inspirem, você, car@ cursista, na criação de seus próprios contextos.</p>
            </Box>
        </CenterBoxContainer>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
