import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'

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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Definindo Preços'/>
          <p>Os produtos que serão comercializados na feira beneficente são de várias naturezas e podem ser novos ou usados. Cada barraca deve ter sua lista de preços, onde  a cada item estará associado um valor padrão e uma margem de negociação.</p>
            <Subtitle>Questão Avaliativa</Subtitle>
          <p>Prosseguindo em nossa Situação-problema, convidamos você a aplicar os seus conhecimentos sobre os pilares do Pensamento Computacional na Questão Avaliativa que segue.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSix
