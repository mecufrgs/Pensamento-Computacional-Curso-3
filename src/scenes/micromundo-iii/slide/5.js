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
          <p>Os estudantes, em seu levantamento, identificaram a existência de vários pontos de interesse no bairro e perceberam também que há um fluxo grande de moradores do município e também de outros municípios que gostam de visitá-los.  Aproveitando o planejamento para tratar da mobilidade dos trabalhadores, poderíamos enriquecer o projeto, escolhendo alguns pontos para fazer parte do corredor ciclístico, assim poderíamos juntar o útil ao interessante.</p>
          <p>Pensamos então na realização de um projeto voltado para um estudo mais aprofundado sobre nosso bairro, buscando a seleção de locais a serem incluídos no corredor ciclístico. Nesse contexto, poderíamos pensar na organização de um evento no bairro, com as seguintes atividades em seu planejamento:</p>
          <blockquote>
            <p><b>A1</b>: realizar um inventário dos pontos considerados interessantes do bairro;</p>
            <p><b>A2</b>: elaborar uma mostra fotográfica desses principais pontos de interesse;</p>
            <p><b>A3</b>: elaborar texto narrando a história de cada um desses locais;</p>
            <p><b>A4</b>: promover palestras que teriam como tema um ou mais locais relacionados no levantamento realizado;</p>
            <p><b>A5</b>: elaborar uma série de quesitos que poderiam ser considerados na avaliação desses pontos de interesse, para facilitar o processo de escolha dos que seriam incluídos no corredor ciclístico.</p>
          </blockquote>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, História e Geografia.</TextBNCC>
          <p>Considerando a lista de atividades acima, solicitamos que você indique qual  dentre as afirmativas a seguir <b>não é pertinente</b> nesse contexto.</p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
