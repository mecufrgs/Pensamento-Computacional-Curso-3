import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

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
            <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='Organização dos Produtos'/>
            <p>Cada barraca deverá acomodar produtos com características semelhantes, definidas segundo sua natureza ou aplicação: alimentos, vestuário, acessórios de casa, ferramentas, etc.</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Matemática, Ciências e Língua Portuguesa.</TextBNCC>
            <p>Qual dos pilares do Pensamento Computacional seria <b>mais útil</b> para tratar essa questão?</p>
            <IntegralActivity activity={Activities.getMicromundoIIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
