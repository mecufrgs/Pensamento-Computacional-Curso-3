import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'

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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Nas escolas de uma cidade'/>
          <p>As competições são realizadas, em geral, no espaço esportivo das escolas participantes e é importante  que sejam distribuídas de forma que sejam atendidos os critérios que objetivam a qualidade das disputas, o envolvimento das torcidas e, ao mesmo tempo, prestigiem o espaço físico de todas as escolas. A habilitação de uma determinada infraestrutura passa por um apurado processo de inspeção, para garantir a integridade física dos participantes, e permite um melhor conhecimento das potencialidades e necessidades das escolas.</p>
          <p>Igualmente, a escola deve buscar exercer o seu papel de agente integrador, dado que todos os habitantes de uma determinada região circunvizinha estão de certa forma com ela implicados, seja como alunos, pais, parentes ou professores. Assim, é importante que na realização das atividades esportivas também seja buscado o apoio de outras estruturas esportivas no seu entorno.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSix
