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
class SlideFive extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Definindo preços'/>
          <p>Os produtos que serão comercializados na feira beneficente são de várias naturezas e podem ser novos ou usados. Cada barraca deve ter sua lista de preços, onde  a cada item estará associado um valor padrão e uma margem de negociação.</p>
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Comercialização de produtos'/>
          <p>O preço de cada produto dependerá da sua categoria e margem de negociação. Por exemplo, a aquisição de três ou mais unidades de produtos de uma mesma categoria dará direito a uma redução de 20% no valor total. O preço dos produtos artesanais partirá do menor valor de mercado, com margem de negociação de até 30%. Compradores que adquirirem produtos de uma determinada lista de promoções do dia ganharão descontos na próxima compra.</p>
          <EmptySpace />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Matemática, Ciências e Língua Portuguesa.</TextBNCC>
          <p>Qual o par de pilares do Pensamento Computacional que <b>melhor contribuiria</b> para a determinação do valor de uma determinada venda?</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
