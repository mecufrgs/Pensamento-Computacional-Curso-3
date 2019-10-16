import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import FamiliaSVG from '../../../images/content/micromundo-iv/familia.svg'
import FalaUmSVG from '../../../images/content/micromundo-iv/1-1-fala.svg'
import FalaDoisSVG from '../../../images/content/micromundo-iv/1-2-fala.svg'
import FalaTresSVG from '../../../images/content/micromundo-iv/1-3-fala.svg'

/*Props
  renderTop: function(bool), called to show the header
*/
class One extends React.Component {
  constructor(props){
    super(props)
    
    this.props.setHeader()
  }

  getSlideImage = id => {
    switch(id){
      case 1: 
        return FalaUmSVG
      case 2: 
        return FalaDoisSVG
      case 3: 
        return FalaTresSVG
      default:
        throw Error('Erro ao buscar slide desconhecido.')
    }
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_IV_DIALOG} />
        <PrimaryText>
          <Subtitle>AS OLIMPÍADAS ESCOLARES</Subtitle>
          <p>Car@ cursista:</p>
          <p>Minhas crianças estão participando de uma olímpiada escolar, que envolve escolas aqui da região, com várias modalidades esportivas e muitas atividades multidiscplinares.</p>
          <p>Os quatro pilares do Pensamento Computacional estão sendo de grande valia nesse evento.</p>
          <p>Venha exercitar seus conhecimentos!</p>
          <EmptySpace/>
          <p>Anualmente várias escolas, especialmente aquelas que integram a rede pública, participam de um evento chamado "Jogos Estudantis" ou "Olimpíadas Escolares", envolvendo várias unidades (escolas) distribuídas por várias regiões de uma cidade. Muitos professores participam diretamente desses jogos, auxiliando na organização, treinamento, logística, etc., enquanto outros têm conhecimento dos mesmos, mas não participam diretamente ou compõem a torcida da escola.</p>
          <p>Nesse tipo de evento há um conjunto de ações que em muitos casos compõem o calendário de atividades da escola e cujo planejamento, organização e desenvolvimento podem envolver muitos elementos estudados no Ensino Fundamental, de um modo transversal a várias áreas, segundo uma perspectiva interdisciplinar. Por essa razão propomos explorar alguns dos elementos envolvidos, buscando ilustrar como os pilares do Pensamento Computacional, associados a certas habilidades específicas, podem auxiliar na construção de soluções.<p>
          <p>Vídeos e recursos externos sobre esportes, importância dos esportes, socialização através dos esportes, prática desportiva e colaboração, etc.</p>
          <EmptySpace/>
          <p>Por exemplo:</p>
          <p><a href="https://vimeo.com/92072010">Esportes x Aprendizagem</a></p>
          <p><a href="https://www.youtube.com/watch?v=p0dGXsK595k">Esporte na Escola Ep. 1</a></p>
          <p><a href="https://www.youtube.com/watch?v=WcZxf7qqcK0">Peppa Pig Dia Esportivo</a></p>
          <p><a href="https://www.youtube.com/watch?v=hgT1Hsmc6bo">Como Organizar Torneios</a></p>
          <EmptySpace/>
          <p>Variação no Tema:</p>
          <p><a href="https://vimeo.com/294218213">Esporte Inclusivo</a></p>
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
