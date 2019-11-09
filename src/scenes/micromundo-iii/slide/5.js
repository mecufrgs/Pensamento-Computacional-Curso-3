import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

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
          <SubtitleBar type={2} title='Questão Avaliativa - 2' subtitle='Passeio Ciclístico Guiado pelo Bairro'/>
          <p>Os estudantes, em seu levantamento, identificaram a existência de vários pontos turísticos no bairro e perceberam também que há um fluxo grande de moradores do município e também de outros municípios que gostam de visitá-los.  Aproveitando o planejamento para tratar da mobilidade dos trabalhadores, poderíamos enriquecer o projeto, escolhendo alguns pontos imperdíveis para fazer parte do corredor ciclístico, assim poderíamos juntar o útil ao cultural.</p>
          <p>Pensamos então na realização de um projeto voltado para um estudo mais aprofundado sobre os pontos turísticos de nosso bairro, buscando a seleção dos pontos a serem incluídos no corredor ciclístico. Nesse contexto, poderíamos pensar na organização de um evento no bairro, que poderia ter o seguinte planejamento:</p>
          <blockquote>
            <p>A1: realizar um inventário dos pontos considerados turísticos;</p>
            <p>A2: elaborar uma mostra fotográfica dos principais pontos turísticos;</p>
            <p>A3: elaborar texto narrando a história de cada um dos pontos turísticos;</p>
            <p>A4: promover palestras de professores dessas e de outras escolas, e também de outros convidados, que teriam como tema um ou mais pontos relacionados no levantamento realizado;</p>
            <p>A5: elaborar uma série de quesitos que poderiam ser considerados na avaliação dos pontos turísticos, para facilitar o processo de escolha dos que seriam incluídos no corredor ciclístico.</p>
          </blockquote>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, História e Geografia.</TextBNCC>
          <p>Considerando a lista de tópicos acima, solicitamos que você indique qual  dentre as afirmativas a seguir não é pertinente nesse contexto.</p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
