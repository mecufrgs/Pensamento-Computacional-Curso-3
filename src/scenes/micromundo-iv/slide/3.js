import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='A escola, seleção de modalidades e preparação das equipes'/>
            <p>Cada escola precisa definir de que maneira pode e deseja participar da competição, orientando então o planejamento de atividades com vistas a obter resultados compatíveis com a infraestrutura disponível, o investimento em preparação e treino, o potencial dos estudantes e times envolvidos, etc.</p>
            <EmptySpace/>
            <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Sobre modalidades esportivas'/>
            <p>As práticas esportivas na escola acontecem sempre, ao longo de todo o ano, mas, na proximidade dos jogos, precisamos avaliar de que forma a escola deseja e pode participar, para que além de nos envolvermos socialmente possamos valorizar as habilidades e competências esportivas de nossos estudantes. Isso requer uma atitude de todos, buscando conhecer melhor a situação atual de nossa instituição. De um ano para o outro, ou seja, de uma edição dos jogos para a seguinte, em um dado nível escolar, mas no todo também, saem alunos e entram novos. Pelo processo de escolarização, os alunos antigos atingem novos níveis de compreensão e, dentro e fora da escola, surgem novas modalidades. É sempre bom fazer novos inventários e sistematização.</p>
            <p>Com esta finalidade, concebemos duas atividades de reconhecimento:</p>
            <p>Atividade A1: Elaboração, pelos estudantes de uma estrutura de classificação geral das modalidades esportivas;</p>
            <p>Atividade A2: Identificação das aptidões e interesses dos estudantes sobre as diferentes modalidades esportivas.</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Educação Física, Ciências, Língua Portuguesa e Matemática.</TextBNCC>
            <p>Com respeito às atividades A1 e A2, selecione o par de pilares do Pensamento Computacional que oferece <b>o melhor apoio</b> ao propósito de cada uma.</p>
            <IntegralActivity activity={Activities.getMicromundoIVActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
