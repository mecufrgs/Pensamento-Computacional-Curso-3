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
class SlideNine extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 6' subtitle='As práticas esportivas em nosso município'/>
          <p>Pode-se dizer que em qualquer município é possível encontrar inúmeros espaços para a prática de jogos em geral, envolvendo atividades físicas ou cognitivas, sejam elas individuais ou coletivas.</p>
          <p>Em geral desconhecemos a variedade de modalidades e espaços disponíveis em nossos bairros e isso pode prejudicar a nossa possibilidade de praticar um esporte ou desenvolver outra atividade que nos desperte o interesse.</p>
          <p>Uma boa estratégia para melhor conhecermos nossas opções é realizar uma atividade de inventário dos locais onde se pode praticar esportes e outras atividades (uma espécie de curadoria cooperativa).</p>
          <p>Nesse caso, não importam apenas as práticas consagradas, é importante identificar todas as manifestações que acontecem em nossa vizinhança.</p>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Língua Portuguesa, Geografia, Educação Física e Matemática.</TextBNCC>

          <p>Essa atividade pode ser realizada em parceria com escolas de outros bairros do município, o que por certo agilizaria o trabalho. Podemos então imaginar que, em nossa escola, faremos o levantamento para o nosso bairro. Indique, dentre as opções a seguir, <b>a menos adequada</b> ao propósito.</p>

          <IntegralActivity activity={Activities.getMicromundoIVActivirySix(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideNine
