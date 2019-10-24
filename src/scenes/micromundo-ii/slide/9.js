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
          <SubtitleBar type={3} title='Questão Avaliativa - 6' subtitle='Uma mostra de países e seus produtos consumidos no Brasil'/>
          <p>Nos dias atuais, é comum termos acesso a produtos do mundo inteiro. Da mesma forma, nossos produtos são exportados para os mais diversos países. Os acordos comerciais internacionais, realizados entre países e instituições reguladoras, são os responsáveis pela estruturação desse processo.</p>
          <p>Para os estudantes, conhecer a origem dos produtos consumidos, a partir da pequena amostra que encontram em suas compras nos supermercados, pode ser uma boa oportunidade para descobrirem o mundo em que vivem. Tendo por base os produtos adquiridos, pode-se organizar uma mostra de países e produtos.</p>
          <p>Sobre a organização e realização dessa mostra, considere os seguintes itens.</p>
          <blockquote>
            <p><b>A1</b>: Tendo em vista que todos os produtos comercializados precisam identificar a origem, podemos usar o Pilar <b>Abstração</b> para organizar nossos produtos, tomando duas características importantes, o país de origem e o tipo do produto.</p>
            <p><b>A2</p>: Usando um armário com divisórias, uma para cada país, podemos dispor cada produto na prateleira de seu país de origem. Para realizar essa atividade, podemos pedir aos alunos que elaborem um <b>algoritmo</b>.  Essa atividade pode ser realizada com os alunos separados em grupos distintos, o que pode resultar em várias maneiras (algoritmos) de realizar a atividade. Podemos então aproveitar para que eles avaliem qual dos algoritmos requer mais tempo para a sua execução.</p>
            <p><p>A3</p>: Usando mapas, podemos descobrir onde se localiza geograficamente cada país de origem dos produtos adquiridos no supermercado. Podemos ainda conhecer mais informações relacionadas a cada país, como: capital; população; produto interno bruto (PIB); o ano de sua independência ou constituição; e a distância entre os pontos de embarque (país de origem) e desembarque (Brasil) dos seus produtos.</p>
          </blockquote>
          <p>Tendo em vista os itens acima, indique qual das alternativas a seguir <b>não parece adequada</b> para falar da atividade proposta:</p>          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Arte, Geografia, História, Matemática, Língua Inglesa e Língua Portuguesa.</TextBNCC>
          <IntegralActivity activity={Activities.getMicromundoIIActivirySix(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideNine
