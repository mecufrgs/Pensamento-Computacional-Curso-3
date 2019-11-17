import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'

import FalaMarianaSVG from '../../../images/content/micromundo-ii/slide-6.svg'

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
          <SubtitleBar type={1} title='EVENTO 2' subtitle='Uma compra no supermercado'/>
          <Image center width='750px' src={FalaMarianaSVG} alt='Um grupo de professores de diferentes disciplinas de uma mesma classe resolveu organizar uma visita a um supermercado que fica na vizinhança da escola. Os donos do supermercado ficaram entusiasmados com a ideia desse evento, pois viram nele o potencial de criação de vínculo com futuros clientes. Assim, foi definido para a visita um horário de menor movimento de compradores reais. Foi combinado que as compras seriam apenas de produtos não perecíveis de certas prateleiras e que cada visita ficaria restrita a grupos de 5 professores, cada um acompanhado de 3 alunos, cabendo aos professores apenas o papel de cuidar para que a visita fosse realizada em clima de harmonia.'/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEight
