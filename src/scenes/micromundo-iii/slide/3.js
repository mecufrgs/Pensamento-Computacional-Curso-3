import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import QuadroUmSVG from '../../../images/content/micromundo-iii/micromundo3pg3.svg'
import Image from '../../../components/image'
import Bold from '../../../components/text/bold'
import Subtitle from '../../../components/text/subtitle'


class SlideThree extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Conhecer o Bairro para Justificar Demandas'/>
           <p>Os estudantes de uma escola de Ensino Fundamental - Anos Finais, existente no bairro, produziram um rico material sob a perspectiva de seus moradores, o que envolveu o levantamento, observação, registro e organização de vários aspectos de cada rua do bairro. Esse portfólio pode ser usado para justificar demandas junto à administração municipal.'</p>
            <Subtitle>Questões Avaliativas</Subtitle> 
            <p>Convidamos você a selecionar, nas Questões Avaliativas que seguem, o pilar do Pensamento Computacional <b>mais apropriado</b> para apoiar a execução de tarefas e a solução de problemas relacionados a Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree


