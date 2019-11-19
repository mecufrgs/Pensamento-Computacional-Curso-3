import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'

import FalaMarianaSVG from '../../../images/content/micromundo-ii/slide-2.svg'

class SlideTwo extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={1} title='EVENTO 1' subtitle='Organizando uma Feira Beneficente'/>
            <Image center width='750px' src={FalaMarianaSVG} alt='Para apoiar a consolidação de um clube de artesãos do bairro, uma escola concordou em ajudar na comercialização de produtos dos artesãos, ou doados pelas famílias dos estudantes. A administração municipal fornecerá barracas e licenciamento, para que os produtos sejam comercializados na feira livre realizada no bairro. O planejamento e realização dessa feira beneficente envolve um conjunto de atividades desenvolvidas por voluntários da escola, estudantes e seus familiares, mais os próprios artesãos'/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTwo
