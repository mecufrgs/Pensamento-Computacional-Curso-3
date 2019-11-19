import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'

import FalaMarianaSVG from '../../../images/content/micromundo-iii/slide-2.svg'

class SlideTwo extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={1} title='EVENTO' subtitle='Planejamento Participativo'/>
            <Image center width='750px' src={FalaMarianaSVG} alt='Dentre as iniciativas de descentralização da administração pública municipal, a criação de &quot;subprefeituras&quot; ou de &quot;coordenações distritais&quot; são exemplos onde a participação dos membros da comunidade tem impacto direto na definição de demandas e prioridades e no acompanhamento dos investimentos e qualidade dos recursos e serviços públicos. Podemos considerar que nosso bairro conta com uma subprefeitura responsável por levantar demandas da comunidade local, bem como por opinar sobre questões estratégicas, como a prioridade para uso dos recursos na área. Anualmente, os moradores podem fazer propostas que são analisadas por uma comissão.'/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTwo
