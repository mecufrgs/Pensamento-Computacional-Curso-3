import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideEleven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Indo Além dos Catálogos Oficiais'/>
          <p>Uma escola deve ser um espaço integrado à sua comunidade e deve estar fortemente atenta aos movimentos sociais, culturais e esportivos, buscando em todas as oportunidades integrar-se ao seu ecossistema, permitindo a concretização dos seus objetivos mais amplos, além do oferecimento de conteúdos.</p>
          
          <p>As práticas escolares devem ter em conta o que é relevante para os seus &quot;usuários&quot; e buscar oferecer o suporte científico que proporcione transformações na sociedade que favoreçam o crescimento individual e coletivo, fortalecendo o papel de seus alunos como criadores de conhecimento. O campo esportivo é um dos instrumentos para fortalecer essa integração.</p>
            <Subtitle>Questões Avaliativas</Subtitle> 
             <p>Convidamos você a selecionar, nas Questões Avaliativas que seguem, o pilar do Pensamento Computacional <b>mais apropriado</b> para apoiar a execução de tarefas relacionadas a Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEleven
