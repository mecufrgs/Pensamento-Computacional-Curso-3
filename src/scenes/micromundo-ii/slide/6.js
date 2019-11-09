import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'

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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Definindo preços'/>
          <p>Os produtos que serão comercializados na feira beneficente são de várias naturezas e podem ser novos ou usados. Cada barraca deve ter sua lista de preços, onde  a cada item estará associado um valor padrão e uma margem de negociação.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFive
