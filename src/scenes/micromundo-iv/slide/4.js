import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

class SlideFour extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Sobre Modalidades Esportivas'/>
            <p>As práticas esportivas na escola acontecem ao longo de todo o ano, mas, na proximidade dos jogos, precisamos avaliar de que forma a escola deseja e pode participar, para que além de nos envolvermos socialmente possamos valorizar as habilidades e competências esportivas de nossos estudantes. Isso requer uma atitude de todos, buscando conhecer melhor a situação atual de nossa instituição.</p>
            <p>De um ano para o outro, alunos saem da escola e novos alunos ingressam. Pelo processo de escolarização, os alunos antigos atingem novos níveis de compreensão e, dentro e fora da escola, surgem novas modalidades. É sempre bom fazer novos inventários, tanto das modalidades esportivas de interesse como de potenciais alunos praticantes dessas modalidade.</p>

            <p>Com essa finalidade, concebemos duas tarefas de preparação para os jogos:</p>
            <p><b>Tarefa A1</b>: Elaboração, pelos estudantes, de uma estrutura de classificação geral das modalidades esportivas;</p>
            <p><b>Tarefa A2</b>: Identificação das aptidões e interesses dos estudantes sobre as diferentes modalidades esportivas.</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Educação Física, Ciências, Língua Portuguesa e Matemática.</TextBNCC>
            <p>Com respeito às duas tarefas A1 e A2, selecione o par de pilares do Pensamento Computacional que oferece <b>o melhor apoio</b> ao propósito de cada uma.</p>
            <IntegralActivity activity={Activities.getMicromundoIVActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
