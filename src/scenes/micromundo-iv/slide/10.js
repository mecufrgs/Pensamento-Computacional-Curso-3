import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'

import QuadroUmSVG from '../../../images/content/micromundo-iv/micromundo4pg10-1.svg'
import QuadroDoisSVG from '../../../images/content/micromundo-iv/micromundo4pg10-2.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideTen extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Super Trunfo de Modalidades Esportivas'/>
          <EmptySpace/>
            <Image className='highlightbox' src={QuadroUmSVG} alt='Super Trunfo é um jogo de cartas. Nele toma-se todas as cartas em jogo dos outros participantes por meio de escolhas de características de cada carta (por ex.:  velocidade, altura, longevidade). O jogo comporta de dois a oito participantes e tem classificação livre, podendo ser disputado por qualquer pessoa alfabetizada. https://pt.wikipedia.org/wiki/Super_Trunfo'/>
          <EmptySpace/>
          <EmptySpace/>
            <Image className='highlightbox' src={QuadroDoisSVG} alt='Exemplo: Super trunfo de animais'/>
          <EmptySpace/>
          
          <p>Para divulgar e envolver os estudantes da escola com os jogos escolares, pode-se propor a criação de diferentes <i>supertrunfos</i>, um para cada modalidade esportiva, inspirados nos diferentes <b>super trunfos</b> comercializados, como o <b>super trunfo</b> de carros. A ideia é que se tenha um jogo &quot;super trunfo&quot; para cada uma das modalidades previstas para as olimpíadas escolares do município. Como resultado final, os alunos produzirão um jogo de cartas do tipo super trunfo com as modalidades que a escola disputará. Cada carta representará um atleta da escola. Como o super trunfo é jogado com 32 cartas, é possível que em alguns super trunfos seja necessário completar a coleção com atletas convidados (reais ou fictícios).</p>

          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Língua Portuguesa, Ciências, Arte e Educação Física.</TextBNCC>

          
          <p>Considerando os itens a seguir, identifique a alternativa que <b>não se aplica</b> à produção do super trunfo de uma modalidade esportiva específica.</p>

          <IntegralActivity activity={Activities.getMicromundoIVActiviryFive(this.props.unitId)} />          
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTen
