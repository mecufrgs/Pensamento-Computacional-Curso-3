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
            <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='Organização dos produtos'/>
            <p>Cada barraca deverá acomodar produtos com características semelhantes, definidas segundo sua natureza ou aplicação: alimentos, vestuário, acessórios de casa, ferramentas, etc.</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Matemática, Ciências e Língua Portuguesa.</TextBNCC>
            <p>Qual dos pilares do Pensamento Computacional seria <b>mais útil</b> para tratar essa questão?</p>
            <IntegralActivity activity={Activities.getMicromundoIIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
