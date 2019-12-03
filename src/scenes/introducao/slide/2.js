import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'

import Image from '../../../components/image'
import QuadroUmSVG from '../../../images/content/introducao/caixatextopg3.svg'

class SlideTwo extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>

        <p>É importante destacar que quando se pensa em estratégias para apoiar o  desenvolvimento de uma forma de pensamento, como é o Pensamento Computacional, a ação é um elemento fundamental. Pensa-se para viver e vive-se pensando, assim, para trabalhar os quatro pilares do Pensamento Computacional, nada melhor do que vivenciar situações que sejam propícias ao seu uso e desenvolvimento.</p>

           <p>O que apresentamos neste curso são exemplos que  podem ser usados em sala de aula, mas que, sobretudo, objetivam ajudá-l@ a compreender como você poderá construir situações que levem seus alunos a usar e desenvolver o Pensamento Computacional.</p> 
           
          <p>No que tange à <a href="http://basenacionalcomum.mec.gov.br/">BNCC (acesso em novembro de 2019)</a>, o curso foi todo construído tendo em vista o desenvolvimento das competências gerais que ela preconiza para a Educação Básica, que compreendem entre outras: &quot;valorizar e utilizar os conhecimentos historicamente construídos sobre o mundo físico, social, cultural e digital&quot;; &quot;utilizar diferentes linguagens para se expressar e partilhar informações, experiências, ideias e sentimentos&quot;; &quot;exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação&quot;; &quot;agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação&quot;.</p>
          
          <p>O trabalho proposto está de acordo  com a BNCC para o Ensino Fundamental – Anos Finais, em particular quando ela afirma:</p>

          <Image className='highlightbox' src={QuadroUmSVG} alt='Ao longo do Ensino Fundamental – Anos Finais, os estudantes se deparam com desafios de maior complexidade, sobretudo devido à necessidade de se apropriarem das diferentes lógicas de organização dos conhecimentos relacionados às áreas. Tendo em vista essa maior especialização, é importante, nos vários componentes curriculares, retomar e ressignificar as aprendizagens do Ensino Fundamental – Anos Iniciais no contexto das diferentes áreas, visando ao aprofundamento e à ampliação de repertórios dos estudantes.'/>

        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTwo
