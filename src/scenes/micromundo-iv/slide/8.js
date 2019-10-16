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
class Eight extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <p>Nos itens a seguir apresentamos algumas atividades relacionadas com o desenvolvimento da coleção de jogos supertrunfo de nossa escola.</p>
          
          <IntegralActivity activity={Activities.getMicromundoIVActiviryFive(this.props.unitId)} />
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Língua Portuguesa, Ciências, Arte e Educação Física..</TextBNCC>
          <p>Considerando os itens acima, identifique a alternativa que <b>não se aplica</b> à produção do super trunfo de uma modalidade esportiva específica.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Eight
