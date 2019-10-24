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
          <p>No que tange à BNCC, o curso foi todo construído tendo em vista o desenvolvimento das competências gerais que a mesma preconiza para a Educação Básica (BNCC_EI_EF_110518_versaofinal_site.pdf), que compreendem entre outras: &quot;valorizar e utilizar os conhecimentos historicamente construídos sobre o mundo físico, social, cultural e digital&quot;; &quot;utilizar diferentes linguagens para se expressar e partilhar informações, experiências, ideias e sentimentos&quot;; &quot;exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação&quot;; &quot;agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação&quot;.</p>
          <p>O trabalho proposto está conforme, igualmente, com o que preconiza a BNCC para o Ensino Fundamental – Anos Finais:</p>
          <CenterBoxContainer>
            <Box backgroundColor={Color.GRAY_BOX}>
                <p>&quot;Ao longo do Ensino Fundamental – Anos Finais, os estudantes se deparam com desafios de maior complexidade, sobretudo devido à necessidade de se apropriarem das diferentes lógicas de organização dos conhecimentos relacionados às áreas. Tendo em vista essa maior especialização, é importante, nos vários componentes curriculares, retomar e ressignificar as aprendizagens do Ensino Fundamental – Anos Iniciais no contexto das diferentes áreas, visando ao aprofundamento e à ampliação de repertórios dos estudantes.</p>
                <p>Nesse sentido, também é importante fortalecer a autonomia desses adolescentes, oferecendo-lhes condições e ferramentas para acessar e interagir criticamente com diferentes conhecimentos e fontes de informação.&quot;</p>
            </Box>
        </CenterBoxContainer>
        <p>Dessa forma, muito além das indicações de habilidades que constam na BNCC, que podem ser trabalhadas nos vários contextos propostos, há todo um trabalho subjacente, que perpassa a concepção e o desenvolvimento do curso, para trabalhar de forma harmônica as várias dimensões do aluno na perspectiva da BNCC.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
