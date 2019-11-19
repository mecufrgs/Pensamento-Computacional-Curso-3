import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import SubtitleBar from '../../../components/subtitle-bar'

import QuadroUmSVG from '../../../images/content/micromundo-iv/micromundo4pg9.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideEight extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={1} title='EVENTO 2' subtitle='Conhecer e Apropriar-se das Modalidades  Esportivas'/>
          <EmptySpace/>
           <Image center width='750px' src={QuadroUmSVG} alt='As práticas esportivas devem integrar-se às demais ações da escola, com vistas à formação integral de seus alunos e como espaços privilegiados para criação de conhecimento. Assim é possível que na escola os estudantes possam ser críticos quanto às atividades conhecidas e serem capazes de inovar também nesse campo. Atividades esportivas, sejam elas meramente físicas ou cognitivas, são concepções humanas e como tal se constituem em objetos de conhecimento. Assim, além de conhecer e praticar as regras de uma determinada atividade, podemos também discuti-las e propor modificações que contribuam para as suas práticas e para a invenção de novas modalidades.'/>
          <EmptySpace />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEight
