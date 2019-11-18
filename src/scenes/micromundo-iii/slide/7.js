import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import SubtitleBar from '../../../components/subtitle-bar'
import QuadroUmSVG from '../../../images/content/micromundo-iii/micromundo3pg7.svg'
import Bold from '../../../components/text/bold'
import Subtitle from '../../../components/text/subtitle'


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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Criação de um Parque Urbano'/>
           <p>Um terreno pertencente ao município, localizado em nosso bairro, tem dimensão equivalente a um quarteirão típico e encontra-se sem uso, o que originou a ideia de transformá-lo em um parque urbano, ou seja, um espaço ao ar livre para diferentes atividades físicas.'</p>
           <Subtitle>Questões Avaliativas</Subtitle> 
            <p>Convidamos você a selecionar, nas Questões Avaliativas que seguem, o pilar do Pensamento Computacional <Bold>mais apropriado</Bold> para apoiar a execução de tarefas e a solução de problemas relacionados a Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
