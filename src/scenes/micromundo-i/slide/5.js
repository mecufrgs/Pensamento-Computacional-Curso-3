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
class SlideFive extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='Uma Vida em Imagens - Parte 1'/>
          <p>Descobriu-se que ao longo do tempo a Dona Veridiana guardou uma grande quantidade de fotos. Um grupo será responsável por organizar um álbum com fotos de sua infância até o momento atual, contendo imagens de amigos e parentes diversos, momentos marcantes de sua vida, locais visitados, etc. O grupo irá definir categorias com as quais irá organizar o &quot;acervo&quot;.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, Geografia, História, Matemática e Língua Portuguesa.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que seráexercitado  <b>com mais ênfase</b> na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
