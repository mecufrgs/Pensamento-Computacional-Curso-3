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
class SlideSeven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Cada um compra o que quer'/>
          <p>Os alunos foram às compras com a indicação de que poderiam escolher o que quisessem, até um máximo de 5 produtos de diferentes naturezas, sem se preocupar com o preço.  No caixa, os produtos de cada aluno foram acomodados em embalagens individuais. Na volta para escola, cada um colocou uma etiqueta com seu nome nos seus produtos.</p>
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Organizando os produtos adquiridos'/>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Ciências e Língua Portuguesa.</TextBNCC>
          <p>Considerando as informações disponíveis sobre os produtos comprados, os professores podem elaborar atividades de estudo para diferentes disciplinas. A seguir apresentamos algumas possibilidades, cada uma relacionada com um pilar do Pensamento Computacional.  Selecione a alternativa que lhe pareça <b>menos apropriada</b>.</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
