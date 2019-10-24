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
          <SubtitleBar type={1} title='EVENTO' subtitle='Conhecer e Divulgar as Práticas Esportivas'/>
          <p>As práticas esportivas não devem ser usadas nas escolas apenas como oportunidades de lazer, ou para propiciar o desenvolvimento físico ou a socialização. As práticas esportivas devem integrar-se às demais ações da escola, com vistas à formação integral de seus alunos e como espaços privilegiados para criação de conhecimento. Assim é possível que na escola os estudantes possam ser críticos quanto às atividades conhecidas e serem capazes de inovar também nesse campo. Atividades esportivas, sejam elas meramente físicas ou cognitivas, são concepções humanas e como tal se constituem em objetos de conhecimento. Assim, além de conhecer e praticar as regras de uma determinada atividade, podemos também discuti-las e propor modificações que contribuam para as suas práticas e para a invenção de novas modalidades.</p>
          
          <EmptySpace />
          <SubtitleBar type={3} title='Questão Avaliativa - 5' subtitle='Super trunfo de Modalidades de Esportes e os Participantes da Escola'/>
          <p>Para divulgar e envolver os estudantes de sua escola com os jogos escolares, você pode propor a criação de diferentes supertrunfos, um para cada modalidade esportiva. Para isso, você pode se inspirar nos diferentes <b>super trunfos</b> comercializados, como no <b>super trunfo</b> de carros. A ideia é que tenhamos um jogo &quot;super trunfo&quot; para cada uma das modalidades previstas para as olimpíadas escolares do município. Como resultado final, os alunos produzirão um jogo de cartas do tipo super trunfo com as modalidades que a escola disputará. Cada carta representará um atleta da escola. Como o supertrunfo é jogado com 32 cartas, é possível que em alguns super trunfos seja necessário completar a coleção com atletas convidados (reais ou fictícios).</p>

          <div align=center>Quadro I - Descrição do jogo super trunfo</div>
          <table border=0 cellspacing=0 cellpadding=0>
            <tr>
              <td>Super Trunfo é um jogo de cartas. Nele toma-se todas as cartas em jogo dos outros participantes por meio de escolhas de características de cada carta (por ex.:  velocidade, altura, longevidade). O jogo comporta de dois a oito participantes e tem classificação livre, podendo ser disputado por qualquer pessoa alfabetizada.<br/>
              <a href="https://pt.wikipedia.org/wiki/Super_Trunfo">https://pt.wikipedia.org/wiki/Super_Trunfo</a></td>
              <td>&nbsp;</td>
              <td>Exemplo: Super trunfo de animais</td>
            </tr>
         </table>

           
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
