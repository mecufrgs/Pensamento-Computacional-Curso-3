import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'
import Bold from '../../../components/text/bold'

import QuadroUmSVG from '../../../images/content/micromundo-iv/micromundo4pg3.svg'
import FamiliaSVG from '../../../images/content/micromundo-iv/SP2.svg'
import Image from '../../../components/image'
class SlideNine extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 3' subtitle='Modalidades Esportivas dos Catálogos Oficiais'/>
            <p>É importante que os estudantes conheçam e pratiquem as regras das modalidades esportivas da Olimpíada, para que tenham uma participação e um envolvimento mais qualificado nessa atividade, como atletas, público ou organizadores</p>
            <Image src={FamiliaSVG} />
            
            <Subtitle>Questões Avaliativas</Subtitle>  
            <p>Convidamos você a selecionar, na Questão Avaliativa que segue, o pilar do Pensamento Computacional <Bold>mais apropriado</Bold> para apoiar a execução da tarefa relacionada à Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideNine
