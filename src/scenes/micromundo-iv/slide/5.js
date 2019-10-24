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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Nas escolas de uma cidade'/>
          <p>As competições são realizadas, em geral, no espaço esportivo das escolas participantes e é importante  que sejam distribuídas de forma que sejam atendidos os critérios que objetivam a qualidade das disputas, o envolvimento das torcidas e, ao mesmo tempo, prestigiem o espaço físico de todas as escolas. A habilitação de uma determinada infraestrutura passa por um apurado processo de inspeção, para garantir a integridade física dos participantes, e permite um melhor conhecimento das potencialidades e necessidades das escolas.</p>
          <p>Igualmente, a escola deve buscar exercer o seu papel de agente integrador, dado que todos os habitantes de uma determinada região circunvizinha estão de certa forma com ela implicados, seja como alunos, pais, parentes ou professores. Assim, é importante que na realização das atividades esportivas também seja buscado o apoio de outras estruturas esportivas no seu entorno.</p>
          <EmptySpace />
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Alocação das competições'/>
          <p>A distribuição dos jogos depende de quais, dentre as escolas participantes, possuem infraestrutura que permita a realização de certa modalidade esportiva (quadra, campo, pista de corrida, piscina, etc.), bem como da quantidade de partidas ou provas necessárias para cada modalidade.</p>
          <EmptySpace />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Matemática, Educação Física, Ciências  e Língua Portuguesa.</TextBNCC>
          <p>Sem considerar outros fatores (localização equidistante, acesso, etc.), indique qual dos pilares do Pensamento Computacional seria <b>mais importante</b> para a tarefa de alocação das competições:</p>
          <IntegralActivity activity={Activities.getMicromundoIVActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
