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
        <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Comercialização de produtos'/>
          <p>Cada barraca da feira deve ter sua lista de preços. O preço de cada produto dependerá da sua categoria e margem de negociação. Por exemplo, a aquisição de três ou mais unidades de produtos de uma mesma categoria dará direito a uma redução de 20% no valor total. O preço dos produtos artesanais partirá do menor valor de mercado, com margem de negociação de até 30%. Compradores que adquirirem produtos de uma determinada lista de promoções do dia ganharão descontos na próxima compra.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Matemática, Ciências e Língua Portuguesa.</TextBNCC>
          <p>Qual o par de pilares do Pensamento Computacional que <b>melhor contribuiria</b> para a determinação do valor de uma determinada venda?</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSix
