import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import QuadroUmSVG from '../../../images/content/micromundo-iii/micromundo3pg3.svg'
import Image from '../../../components/image'

class SlideThree extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 1' subtitle='Conhecer o Bairro para Justificar Demandas'/>
            <EmptySpace/>
            <Image className='highlightbox' src={QuadroUmSVG} alt='Os estudantes de uma escola de Ensino Fundamental - Anos Finais, existente no bairro, produziram um rico material sob a perspectiva de seus moradores, o que envolveu o levantamento, observação, registro e organização de vários aspectos de cada rua do bairro. Esse portfólio pode ser usado para justificar demandas junto à administração municipal.'/>
            <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
