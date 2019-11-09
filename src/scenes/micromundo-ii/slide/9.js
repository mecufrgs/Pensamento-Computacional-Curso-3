import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'

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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Cada um compra o que quer'/>
          <p>Os alunos foram às compras com a indicação de que poderiam escolher o que quisessem, até um máximo de 5 produtos de diferentes naturezas, sem se preocupar com o preço.  No caixa, os produtos de cada aluno foram acomodados em embalagens individuais. Na volta para escola, cada um colocou uma etiqueta com seu nome nos seus produtos.</p>
          </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
