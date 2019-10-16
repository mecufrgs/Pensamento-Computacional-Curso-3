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
class Six extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Criação de um Parque Urbano'/>
          <p>Um terreno pertencente ao município, localizado em nosso bairro, tem dimensão equivalente a um quarteirão típico e encontra-se sem uso, o que originou a ideia de transformá-lo em um parque urbano, ou seja, um espaço ao ar livre para diferentes atividades físicas. Considere esse cenário nas questões a seguir.</p>
          
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Design Participativo para o Parque'/>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Ciências, Matemática, Arte, Geografia e Língua Portuguesa.</TextBNCC>
          <p>Selecione, das afirmativas a seguir, <b>a que não está correta</b> ao se referir à solução para essa proposta, considerando o Pensamento Computacional:</p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Six
