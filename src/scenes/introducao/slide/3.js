import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'

import Image from '../../../components/image'
import QuadroUmSVG from '../../../images/content/introducao/caixatextopg4.svg'
/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideThree extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <p>Este curso explorará <b>quatro Micromundos</b>, com contextos complexos, onde serão tratadas situações que envolvem conhecimentos de diferentes áreas do saber, favorecendo assim a vivência com o conceito de <b>Interdisciplinaridade</b>.</p>

          <p>Em cada um dos Micromundos, serão apresentados <b>Eventos</b> relevantes, ou seja, acontecimentos sociais, onde atividades significativas serão realizadas,  algumas de forma individual e outras de forma cooperativa. Em cada Evento serão selecionadas uma ou mais <b>Situações-problema</b>, e associadas a elas serão introduzidas <b>Questões Avaliativas</b>.</p>

          <p>É justamente nas Questões Avaliativas que @s cursistas são convidad@s a refletirem sobre o uso dos pilares do Pensamento Computacional, como estratégia de apoio para execução de tarefas e solução de problemas, e são sugeridas possibilidades de trabalho com habilidades conforme a BNCC.</p>


          <Image className='highlightbox' src={QuadroUmSVG} alt='Observar que nos Micromundos serão apresentados cenários mais amplos que o exigido pelas questões propostas no texto. Os Micromundos conterão, portanto, elementos que permitirão a exploração de casos particulares e que esperamos favoreçam e inspirem, você, car@ cursista, na criação de seus próprios contextos.'/>

          <p>Outro curso, “Aplicações do Pensamento Computacional para os Anos Iniciais do Ensino Fundamental”, nesta mesma plataforma, com enfoque e estrutura semelhantes a este, trata de aplicações do Pensamento Computacional para os Anos Iniciais do Ensino Fundamental, em nível de complexidade adequado a esses anos.</p>
            
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
