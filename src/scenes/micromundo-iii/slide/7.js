import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'

import QuadroUmSVG from '../../../images/content/micromundo-iii/micromundo3pg7.svg'


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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Criação de um Parque Urbano'/>
          <EmptySpace/>
            <Image className='highlightbox' src={QuadroUmSVG} alt='Um terreno pertencente ao município, localizado em nosso bairro, tem dimensão equivalente a um quarteirão típico e encontra-se sem uso, o que originou a ideia de transformá-lo em um parque urbano, ou seja, um espaço ao ar livre para diferentes atividades físicas. Considere esse cenário nas questões a seguir.'/>
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
