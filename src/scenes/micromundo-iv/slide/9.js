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
class SlideNine extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Indo além do que está escrito nos catálogos oficiais'/>
          <p>Uma escola deve ser um espaço integrado à sua comunidade e deve estar fortemente atenta aos movimentos sociais, culturais e esportivos, buscando em todas as oportunidades integrar-se ao seu ecossistema, permitindo a concretização dos seus objetivos mais amplos, além do oferecimento de conteúdos.</p>
          
          <p>As práticas escolares devem ter em conta o que é relevante para os seus &quot;usuários&quot; e buscar oferecer o suporte científico que proporcione transformações na sociedade que favoreçam o crescimento individual e coletivo, fortalecendo o papel de seus alunos como criadores de conhecimento. O campo esportivo é um dos instrumentos para fortalecer essa integração.</p>

          <EmptySpace />
          <SubtitleBar type={3} title='Questão Avaliativa - 6' subtitle='As práticas esportivas em nosso município'/>
          <p>Pode-se dizer que em qualquer município é possível encontrar inúmeros espaços para a prática de jogos em geral, envolvendo atividades físicas ou cognitivas, sejam elas individuais ou coletivas. Em geral desconhecemos a variedade de modalidades e espaços disponíveis em nossos bairros e isso pode prejudicar a nossa possibilidade de praticar um esporte ou desenvolver outra atividade que nos desperte o interesse. Uma boa estratégia para melhor conhecermos nossas opções é realizar uma atividade de inventário dos locais onde se pode praticar esportes e outras atividades (uma espécie de curadoria cooperativa). Nesse caso, não importam apenas as práticas consagradas, é importante identificar todas as manifestações que acontecem em nossa vizinhança.</p>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Língua Portuguesa, Geografia, Educação Física e Matemática.</TextBNCC>

          <p>Essa atividade pode ser realizada em parceria com escolas de outros bairros do município, o que por certo agilizaria o trabalho. Podemos então imaginar que, em nossa escola, faremos o levantamento para o nosso bairro. Indique, dentre as opções a seguir, <b>a menos adequada</b> ao propósito.</p>
          
          <IntegralActivity activity={Activities.getMicromundoIVActivirySix(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideNine
