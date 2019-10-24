import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import BairroSVG from '../../../images/content/micromundo-iii/Bairro.svg'

/*Props
  renderTop: function(bool), called to show the header
*/
class SlideOne extends React.Component {
  constructor(props){
    super(props)
    
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_I_DIALOG} />
        <PrimaryText>
          <Subtitle>UMA FAMÍLIA BEM BRASILEIRA</Subtitle>
          <p>Car@ cursista, mãos à obra!</p>
          <p>Neste primeiro Micromundo, você conhecerá minha família e acompanhará as comemorações do aniversário de 60 anos da minha mãe, Dona Veridiana.</p>
          <p>Espero que essa seja uma maneira agradável e interessante de exercitar seus conhecimentos em Pensamento Computacional e correlacioná-los com as habilidades da BNCC, nos Anos Finais do Ensino Fundamental.</p>

          <EmptySpace/>
          
          <p>Neste Micromundo, as ações acontecem no seio de uma família bem brasileira, com pessoas de diferentes origens e etnias. Esse núcleo familiar está constituído pelo casal  Dona Veridiana (60), de origem italiana, que adora comemorações, e Seu Akira (70), de origem japonesa (os pais vieram do Japão). Dona Veridiana e Seu Akira têm 5 filhos: Pedro (42), casado com Dolores; Gustavo (36); Marta (40), casada com Paulo; Janaina (35); e Mariana (28). A caçula, Mariana, é casada com o Augusto, há 8 anos, e o casal tem dois filhos: José Carlos (7) e Ana Maria (5). Mais detalhes da árvore genealógica dessa família serão apresentados conforme for surgindo a necessidade de explorar eventos que integrem outros núcleos familiares. </p>
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
