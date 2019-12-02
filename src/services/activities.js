class Activities {
    getMicromundoIActiviryOne = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_1_micromundo_i",
            questions: [
                {
                    id: "q1_a1_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "Embora o pilar Abstração possa ter tido alguma participação no planejamento da apresentação, por exemplo na definição dos atos que iriam compô-la, certamente não foi o central à realização da tarefa."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Decomposição",
                            tip: "O planejamento constituía-se em um problema que necessitava ser decomposto em suas partes para ser resolvido. No caso a apresentação foi decomposta em atos bem definidos, o que corresponde tipicamente à aplicação do pilar Decomposição."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "Embora o pilar Reconhecimento de Padrões possa ter sido aplicado a questões relativas ao planejamento da apresentação, certamente não foi central à realização dessa tarefa."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Todo planejamento tende a envolver de alguma forma procedimentos apoiados pelo pilar Algoritmos, mas no caso em pauta esse pilar não foi central à realização da tarefa."
                        }
                    ]
                }
            ]
        }
    }
    
    getMicromundoIActiviryTwo = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_2_micromundo_i",
            questions: [
                {
                    id: "q1_a2_micromundo_i",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Abstração",
                            tip: "O pilar  Abstração possibilitará identificar propriedades relevantes para a descrição e para o agrupamento das fotos, segundo determinadas categorias. É o pilar adequado para definir o elenco de categorias."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Mesmo que a organização do álbum seja desmembrada em etapas menores, segundo algum critério pré-definido ou assumido, a aplicação do pilar Decomposição não necessariamente resultará em uma definição adequada de categorias."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "A aplicação do pilar Reconhecimento de Padrões pressupõe a existência das categorias e não necessariamente induz a definição das mesmas."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Embora seja interessante a definição de um algoritmo para a construção do álbum, o ideal é que as categorias já estejam definidas previamente ao aplicar este pilar."
                        }
                    ]
                }
            ]
        }
    }
    
    getMicromundoIActiviryThree = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_3_micromundo_i",
            questions: [
                {
                    id: "q1_a3_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "O pilar Abstração é central para a definição do elenco de categorias, mas não seria o mais indicado para o processo de seleção das fotos das categorias que deverão compor o álbum e respeitando um limite no número de fotos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Embora a composição do álbum possa ser desmembrada em etapas menores, onde cada categoria defina um \"sub-álbum\", o pilar Decomposição não é o mais indicado para definir a quantidade de fotos em cada categoria."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "O pilar Reconhecimento de Padrões até pode auxiliar no processo de seleção de fotos, via critérios de semelhança ou outros, mas não ajudaria muito na definição de um processo efetivo de seleção de uma quantidade total de fotos que não ultrapasse o limite determinado."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Algoritmos",
                            tip: "O processo de construção do álbum envolve elementos como a definição da quantidade total de fotos, de critérios para a escolha das fotos e da quantidade em cada categoria. O pilar Algoritmos é a base para definir tal processo."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIActiviryFour = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_4_micromundo_i",
            questions: [
                {
                    id: "q1_a4_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "O pilar Abstração pode auxiliar na determinação de elementos para selecionar as músicas para a apresentação, mas o \"enquadramento\" de uma música em certa categoria não é adequadamente desenvolvido por este pilar."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Embora a tarefa possa ser decomposta de acordo com, por exemplo, as regiões em que Dona Veridiana morou, o que de fato é central para que a tarefa seja realizada é a identificação dos estilos musicais de cada região, o que não seria adequadamente apoiado por este pilar."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "A partir do elenco de músicas conhecidas pela banda, o pilar Reconhecimento de Padrões seria o mais indicado para identificar os elementos regionais de cada música."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Embora o pilar Algoritmos possa ser usado para definir uma possível sequência musical, por exemplo \"aleatória\", ou segundo uma \"linha de tempo\", seria necessário que o conjunto de músicas fosse previamente determinado, usando um outro pilar. "
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIActiviryFive = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_5_micromundo_i",
            questions: [
                {
                    id: "q1_a5_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "A definição das etapas caracterizando cada trajeto (etapas diferentes na vida da D. Veridiana) é um exemplo de uso do pilar Abstração. Entretanto, a definição de cada trajeto, com passos e detalhes precisos e quantificáveis, não é suportada de forma efetiva por esse pilar."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Cada trajeto pode até ser decomposto em etapas, por exemplo a parte percorrida a pé e a parte percorrida utilizando algum meio de transporte, mas a definição detalhada do trajeto, inclusive de cada uma de suas partes, não é suportada de forma efetiva por esse pilar."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "Os trajetos realizados pela D. Veridiana podem ser identificados segundo os aspectos mencionados (etapas da vida), mas a definição detalhada de cada um desses trajetos não é suportada de forma efetiva por esse pilar."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Algoritmos",
                            tip: "A descrição de um caminho percorrido rotineiramente envolve descrever de que forma um conjunto de ações básicas é executado: como essas ações são sequenciadas e quais as condições que devem ser satisfeitas para que determinadas ações sejam executadas. Enfim, a descrição de um trajeto requer elementos que são típicos do pilar Algoritmos."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIActiviryOne = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_1_micromundo_ii",
            questions: [
                {
                    id: "q1_a1_micromundo_ii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "Embora o pilar Abstração possa ser usado para definir aspectos comuns dos voluntários,  o desmembramento em tarefas para formação das equipes não é adequadamente suportado por esse pilar."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Decomposição",
                            tip: "A divisão de uma ação complexa em partes menores, mais fáceis de serem compreendidas e tratadas, e a reaplicação do processo nas partes ainda muito complexas para serem tratadas como unidade, no caso as tarefas de cada agrupamento, é o que define Decomposição, o pilar essencial para a formação das equipes."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "A organização dos voluntários em equipes depende mais diretamente de uma estratégia de divisão recorrente de etapas ou tarefas do que da identificação de padrões para cada grupo, portanto essa questão é apoiada de modo mais adequado por outro pilar do Pensamento Computacional."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Certamente o pilar Algoritmos colaborará na alocação de indivíduos em equipes no cenário descrito. Entretanto a definição das tarefas ou atividades de atuação, resultantes da \"quebra\" do todo em partes menores, é a questão central, que é apoiada de modo mais adequado por outro pilar do Pensamento Computacional."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIActiviryTwo = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_2_micromundo_ii",
            questions: [
                {
                    id: "q1_a2_micromundo_ii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "O pilar Abstração seria indicado numa etapa anterior ao cenário descrito, qual seja a da definição de categorias e de sua natureza e aplicação. Quando tais categorias já existem, o processo de \"casamento\" entre produtos e categorias é apoiado de modo mais adequado por outro pilar do Pensamento Computacional. "
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Central nesta tarefa é o \"casamento\" entre aspectos dos produtos e as categorias previamente definidas (natureza e aplicação), mais do que sua \"quebra\" em etapas mais simples, e essa associação seria apoiada de modo mais adequado por outro pilar do Pensamento Computacional."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "Identificar em cada produto aspectos que o descrevem, associando tais aspectos a classes, conjuntos ou categorias específicas, é uma tarefa que deve ser apoiada pelo pilar Reconhecimento de Padrões."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Embora o pilar Algoritmos possa ser utilizado para organizar a acomodação de produtos, o elemento central nesse cenário é o enquadramento dos produtos em categorias previamente determinadas, o que sugere que outro pilar do Pensamento Computacional seria mais adequado."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIActiviryThree = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_3_micromundo_ii",
            questions: [
                {
                    id: "q1_a3_micromundo_ii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração e Composição",
                            tip: "A criação de categorias para os produtos requer o uso do pilar Abstração, para que se possa descrever com objetividade o que determina que um determinado objeto pertença a uma categoria, mas no caso em questão está sendo suposta a  existência dessas categorias e o que se busca é algo mais, ou seja, qual o valor de uma venda específica. Mais importante, \"Composição\" não é pilar do Pensamento Computacional (são pilares do PC: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos)."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição e Reconhecimento de Padrões",
                            tip: "A Decomposição poderia ser utilizada para definir diferentes categorias de produtos, caso não existisse uma definição prévia, mas neste caso as categorias já existem ou podem ser facilmente  adaptadas. O Reconhecimento de Padrões certamente é necessário para classificar um produto em sua categoria. Mas neste caso ficaria faltando um aspecto chave na comercialização, a determinação do valor de uma venda. Certamente existe uma alternativa que se mostra mais apropriada para a comercialização."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Equilibração e Algoritmos",
                            tip: "Certamente o pilar Algoritmos é muito importante para este caso, para descrever como determinar o valor de uma venda. Entretanto, \"Equilibração\" não é pilar do Pensamento Computacional (são pilares do PC: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos)."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Reconhecimento de Padrões e Algoritmos",
                            tip: "Conhecendo as propriedades de um produto e usando o \"Reconhecimento de Padrões\", podemos associá-lo a uma determinada categoria. Em produtos industrializados essas propriedades estão descritas em rótulos ou podem ser inferidas dos mesmos. Em produtos artesanais, nem sempre isso ocorre, e nesse caso o Pilar Abstração poderia ser um apoio. Quanto ao cálculo do preço de uma compra, precisamos elaborar um roteiro de cálculo que deve levar em conta a quantidade de itens comprados de uma determinada categoria e aplicar regras de desconto definidas a priori ou mesmo o valor específico de desconto concedido ao cliente. Assim, Reconhecimento de Padrões e Algoritmos são centrais nesse processo (com Abstração sendo uma possibilidade eventual)."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIActiviryFour = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_4_micromundo_ii",
            questions: [
                {
                    id: "q1_a4_micromundo_ii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração: selecionar o rol de propriedades importantes para descrever cada categoria de produtos, considerando os produtos adquiridos pelos alunos.",
                            tip: "Conhecer as propriedades relevantes para descrição dos produtos de uma determinada categoria é importante para o estudo dessas categorias."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Algoritmos: organizar os \"recipientes\" (vidro, lata, saco...), contendo produtos alimentícios, em ordem alfabética de seu conteúdo, colocando nas prateleiras, da mais alta para a mais baixa e da esquerda para a direita.",
                            tip: "Certamente colocar os produtos em ordem alfabética dos conteúdos pode facilitar o acesso a esses produtos, caso seja necessário fazer alguma coisa com eles. Além disso, conhecer a ordem alfabética e elaborar um algoritmo para dispor os produtos em ordem crescente (ou decrescente) de seus nomes é uma atividade que apoia o desenvolvimento da habilidade para construção de algoritmos, mas, neste caso, considerando a possibilidade de estudo sobre os produtos adquiridos, essa é a atividade menos apropriada."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões: usando uma separação de prateleiras por grupo alimentar e uma descrição dos grupos alimentares, determinar a prateleira onde deverá ser colocado um dado produto.",
                            tip: "Reconhecer o grupo alimentar ao qual pertence um determinado produto é muito importante, por exemplo na elaboração de refeições saudáveis."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Decomposição: agrupar produtos conforme as informações disponíveis, como composição, validade, etc.",
                            tip: "A Decomposição pode auxiliar em questões vitais para o consumo e a saúde. Por exemplo, ter os produtos organizados por data de vencimento pode ajudar na reflexão sobre a longevidade de produtos, além de contribuir para evitar problemas de saúde proporcionados por ingestão de alimentos estragados. Pode também ajudar na reflexão sobre a organização do consumo, considerando a proximidade de expiração das datas de validade."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIActiviryFive = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_5_micromundo_ii",
            questions: [
                {
                    id: "q1_a5_micromundo_ii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Determinar o preço unitário de cada produto, considerando o preço de um recipiente, a unidade de medida e a quantidade contida no recipiente.",
                            tip: "Um mesmo produto pode se comercializado em recipientes de diferentes volumes e formas. Mas, certamente, todos precisam ter a indicação da quantidade em uma determinada unidade de medida. Sabendo o preço de venda de um determinado recipiente e a quantidade de produto que contém, podemos obter o preço unitário do produto."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Elaborar uma lista de todos os produtos, contendo o nome do produto, a marca, a quantidade, a unidade de medida e o preço por unidade.",
                            tip: "Tendo disponíveis as informações nos recipientes, podemos pegar cada um e listar as informações indicadas, bem como calcular o preço da unidade, construindo assim a lista desejada."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Classificar os produtos alimentícios adquiridos conforme sejam energéticos, reguladores, construtores ou energéticos extras.",
                            tip: "Para esta tarefa, Abstração é o pilar mais apropriado. Pois, ainda que um alimento possa ter várias características (ser líquido, pastoso ou sólido; perecível ou não; de origem vegetal ou animal, etc.),  para identificá-lo como sendo, por exemplo, energético, elas deverão ser abstraídas, e o que interessará  é tão somente identificar se ele é fonte de carboidratos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Determinar, para cada tipo de produto, qual a marca e o recipiente que oferece o menor preço unitário.",
                            tip: "Considerando a existência de uma lista dos produtos, ordenada por nome e preço unitário, podemos selecionar a marca e o recipiente que oferece o menor preço."
                        }
                    ]
                }
            ]
        }
    }


    getMicromundoIIIActiviryOne = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_1_micromundo_iii",
            questions: [
                {
                    id: "q1_a1_micromundo_iii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Identificar, com o apoio de Reconhecimento de Padrões, as principais rotas dos trabalhadores no horário da ida para o trabalho e no horário da volta",
                            tip: "Os trajetos podem ser descritos segundo elementos característicos, por exemplo: hora de início e conclusão do trajeto; ponto de partida e de chegada; passagem por pontos de destaque/referência no bairro; etc. O pilar Reconhecimento de Padrões é essencial em tal atividade."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Encaminhar, com o apoio de Decomposição, ações para a efetiva implementação da ciclofaixa: compra de materiais, demarcação e sinalização das vias, etc",
                            tip: "Embora as ações listadas para a efetiva implementação da ciclofaixa exemplifiquem Decomposição, o encaminhamento dessas ações não cabe na fase de planejamento, razão porque essa é atividade menos apropriada para a solução do problema em discussão."
                        },                        
                        {
                            value: "0",
                            key: "3",                            
                            text: "Descrever, com o apoio do pilar Algoritmos,  cada um dos percursos que podem ser realizados nesse corredor cicloviário, considerando os principais locais de trabalho dos usuários de bicicletas", 
                            tip: "A descrição dos percursos padrão envolve a descrição precisa de deslocamentos (possivelmente medidos em metros percorridos) ou alterações de direção (dobrar à esquerda/direita), escolhas baseadas nas condições de tráfego, etc. O pilar Algoritmos é o mais indicado para apoiar tal atividade, a qual é muito apropriada ao problema."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Identificar, com o apoio do pilar Abstração, os diferentes perfis de usuários da ciclovia", 
                            tip: "É de fato importante caracterizar os potenciais usuários da ciclofaixas, agrupando-os segundo aspectos considerados relevantes para o propósito, como faixa etária, gênero, atividade profissional, etc."
                                                       
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIIActiviryTwo = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_2_micromundo_iii",
            questions: [
                {
                    id: "q1_a2_micromundo_iii",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Para realizar a atividade A4, é preciso pensar em diversas subtarefas, tais como: definição dos temas; convite aos palestrantes; definição de datas e locais; divulgação; e preparação das salas. Para isso, o Pilar Decomposição certamente será utilizado.",
                            tip: "O pilar Decomposição certamente é adequado para desmembrar a organização das palestras em \"partes\" e, portanto, importante para melhor organizar os esforços da equipe organizadora."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Usar o pilar Abstração do Pensamento Computacional facilitaria o trabalho de caracterizar os aspectos que devem ser tratados nos textos previstos na atividade A3.",
                            tip: "Dentre os inúmeros aspectos (acontecimentos, datas, pessoas envolvidas, etc.) relacionados direta ou indiretamente a um ponto de interesse, a elaboração de um texto descritivo deve incluir apenas alguns deles, os considerados relevantes para o propósito (apresentá-lo como uma referência histórico-cultural), sendo os demais abstraídos da narrativa. O pilar Abstração é, então, essencial a tal propósito."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Em geral, quando temos uma relação de atividades a serem realizadas, algumas precisam ser realizadas antes que outras. Certamente, seria possível elaborar essa ordenação, usando conceitos do pilar Algoritmos, do Pensamento Computacional.",
                            tip: "A sequenciação de atividades a serem executadas, que pode incluir a repetição de certos trechos e a seleção de uma ou outra parte da sequência, segundo a verificação de alguma condição, é uma ação típica do uso do pilar Algoritmos, e nesse caso essencial para a organização do evento."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Podemos usar o pilar Reconhecimento de Padrões para identificar padrões que se repetem, por exemplo, na organização da festa anual de São João, e usar esses padrões no planejamento das palestras.",
                            tip: "O pilar Reconhecimento de Padrões certamente seria útil, mas para identificar padrões de organização em eventos semelhantes, como o ciclo de palestras sobre meio ambiente da última Feira de Ciências."
                        }
                    ]
                }
            ]
        }
    }
    
    getMicromundoIIIActiviryThree = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_3_micromundo_iii",
            questions: [
                {
                    id: "q1_a3_micromundo_iii",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "O horário de funcionamento da exposição e a quantidade de dias que ficará em cada local poderão ser definidos utilizando-se o pilar Decomposição.",
                            tip: "O pilar Decomposição poderia ser utilizado para particionar o problema central - a realização da exposição itinerante - em partes menores, que poderiam inclusive ser tratadas em paralelo. Entretanto, seria pouco útil para a definição do horário de funcionamento e a duração da mesma."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O material deveria ser organizado de modo a ilustrar diferentes perspectivas dos moradores, por exemplo as relacionadas a aspectos físicos, como as construções e caminhos do bairro, ou  impressões subjetivas, como 'receptivo' ou 'dinâmico'. O pilar Abstração poderia auxiliar nesse propósito.",
                            tip: "De fato, a identificação de aspectos, inclusive subjetivos, que caracterizem o material e possibilitem conceber uma ou várias formas de organizá-lo, segundo perspectivas distintas, pode ser apoiada pelo pilar Abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Dependendo do perfil de público de cada local, seria interessante definir diferentes roteiros ou caminhos para conhecer o material. O pilar Algoritmos é importante para tal propósito.",
                            tip: "Os roteiros ou caminhos de visitação serão produzidos a partir das características do público alvo, o que implicará em diferentes sequenciamentos, seleções de materiais, etc., questões típicas do desenvolvimento de Algoritmos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Uma parte do material da exposição é configurada para destacar aspectos semelhantes a cada local que a hospeda. O pilar Reconhecimento de Padrões poderia ser usado nessa tarefa.",
                            tip: "A identificação de aspectos do material e de características marcantes no ambiente onde a exposição se localiza possibilita estabelecer similaridades apoiadas pelo pilar Reconhecimento de Padrões. Seria possível, por exemplo, alocar parte do acervo em uma seção intitulada \"Tal e Qual\" ou \"Lá e Aqui\"."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIIIActiviryFour = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_4_micromundo_iii",
            questions: [
                {
                    id: "q1_a4_micromundo_iii",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Utilizando-se o pilar Suposição, do Pensamento Computacional e fazendo uso das informações coletadas, podemos identificar as diferentes atividades a serem oferecidas, considerando as características das atividades, o tamanho da população de interessados e o espaço necessário.",
                            tip: "Certamente a noção de suposição pode ser usada quando não temos acesso a informação que viabilize um planejamento mais aprimorado. Mas, neste caso, fizemos referência a um possível pilar do Pensamento Computacional, o pilar Suposição, que não é um dos pilares do PC, a saber: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O pilar Abstração pode auxiliar no propósito de caracterizar cada uma das atividades demandadas pela população durante o levantamento realizado.",
                            tip: "Para melhor descrever as práticas esportivas, por exemplo, é importante que sejam definidas as propriedades a partir das quais possamos organizá-las em categorias."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "O pilar Algoritmos pode ajudar no planejamento das vias internas, buscando evitar as dificuldades de circulação. Da mesma forma, esse pilar pode ajudar a planejar a circulação de veículos nas proximidades do parque.",
                            tip: "Os caminhos internos no parque poderiam ser definidos de modo a atender roteiros específicos, precisamente definidos, contemplando deslocamentos padronizados para áreas de atividades esportivas e com recursos centrais, como banheiros, administração, subestação de energia, etc. As formas de acesso, entrada e saída do parque também deveriam seguir roteiros e situações precisamente definidos. Certamente o pilar Algoritmos é muito útil em tal cenário."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "O pilar Reconhecimento de Padrões pode ser usado para analisar os hábitos da população, considerando os horários de trabalho, horários de aulas e preferências de horários para a prática de atividades físicas ao ar livre.",
                            tip: "Conhecer os hábitos dos prováveis frequentadores do parque é certamente um apoio indispensável para planejar, por exemplo,  os horários de monitores e voluntários, para maximizar os benefícios da prática de atividades físicas. Através de questionários poderão ser levantadas informações dos moradores, principalmente daqueles que residem nas proximidades, permitindo identificar diferentes perfis."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIVActiviryOne = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_1_micromundo_iv",
            questions: [
                {
                    id: "q1_a1_micromundo_iv",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Abstração e Reconhecimento de Padrões",
                            tip: "Os pilares Abstração e Reconhecimento de Padrões teriam papéis complementares na execução das tarefas A1 e A2. A Abstração seria essencial para a construção de uma classificação geral de modalidades esportivas, ao definir os aspectos que descrevem as modalidades, por exemplo esporte coletivo, disputado em quadra, etc. Através do Reconhecimento de Padrões seria possível associar as características de uma modalidade esportiva a certa categoria. De modo similar, interesses e aptidões de alunos poderiam ser associadas a requisitos e características de atletas de certas modalidades."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algoritmos e Decomposição",
                            tip: "Embora o pilar Algoritmos possa ser usado, por exemplo, para organizar o processo de levantamento/coleta de informações sobre estudantes, que por sua vez possa ser \"quebrado\" em etapas, usando o pilar Decomposição, essa combinação não é adequada para apoiar os cenários descritos por A1 e A2."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Classificação e Padronização",
                            tip: "Embora sejam atividades importantes em vários cenários, inclusive nos descritos por A1 e A2, \"Classificação\" e \"Padronização\" não estão entre os pilares do Pensamento Computacional aqui considerados, ainda que possam ser apoiadas pelos mesmos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos e Reconhecimento de Padrões",
                            tip: "Embora o pilar Reconhecimento de Padrões seja importante nos cenários descritos por A1 e A2, apoiando a associação de características de uma modalidade esportiva a uma categoria, ou de aptidões de estudantes a requisitos de modalidades, a associação com o pilar Algoritmos pouco ajudaria no desenvolvimento de tais ações."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIVActiviryTwo = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_2_micromundo_iv",
            questions: [
                {
                    id: "q1_a2_micromundo_iv",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Primeiro o pilar Classificação, seguido do pilar Padronização.",
                            tip: "Os termos \"Classificação\" e \"Padronização\" não se referem a nenhum dos pilares que estão sendo apresentados neste curso, a saber: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Primeiro o pilar Algoritmos, seguido do pilar Decomposição.",
                            tip: "Embora esses dois pilares do Pensamento Computacional, Algoritmos e Decomposição, possam contribuir para elaboração de um plano de preparação, a ordem mais adequada em que devem ser usados não é a indicada. Antes de estabelecer o sequenciamento, que pode ser realizado com base no pilar Algoritmos, é necessário obter a lista de exercícios, com o apoio do pilar Decomposição."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Primeiro o pilar Decomposição, seguido do pilar Algoritmos.",
                            tip: "Usando os preceitos do pilar Decomposição podemos pegar cada grupo (flexibilidade, treinamento de força, treinamento de resistência) e definir agrupamentos menores para facilitar a construção de um plano. Após esse desdobramento, podemos, usando o pilar Algoritmos, realizar a seleção e o sequenciamento de exercício, considerando as condições atuais do atleta."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Primeiro o pilar Abstração, seguido do pilar Decomposição.",
                            tip: "A Abstração pode trazer várias contribuições para o planejamento de um treinamento, como na caracterização de cada grupo de atividades. Entretanto, uma vez que na situação corrente estamos partindo de um ponto onde essa caracterização já está estabelecida, a Abstração seria de pouca relevância na definição do plano pretendido. Por outro lado, com  os preceitos do pilar Decomposição, que, aliás, já está sendo usado na formulação da questão, podemos tomar cada grupo (flexibilidade, treinamento de força, treinamento de resistência) e definir agrupamentos menores, para facilitar a construção de um plano. Assim, esse não é o par de pilares mais adequado."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIVActiviryThree = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_3_micromundo_iv",
            questions: [
                {
                    id: "q1_a3_micromundo_iv",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "Certamente a análise das infraestruturas depende de um bom elenco de propriedades que possibilitem a descrição apropriada de uma infraestrutura. Para a escolha dessas propriedades, é importante a realização de um apurado estudo, que pode ser apoiado no pilar Abstração do Pensamento Computacional, entretanto, nas demais alternativas, há um outro pilar que pode ser considerado mais importante."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Pontuação",
                            tip: "A avaliação das estruturas pode ser apoiada em um sistema de pontuação que considere a adequação de cada infraestrutura para a prática de uma atividade, entretanto, esse conceito não faz parte da lista de pilares do Pensamento Computacional aqui considerados: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "É possível utilizar o pilar Reconhecimento de Padrões, para associar uma dada prática esportiva com as possíveis infraestruturas nas quais ela poderia ser praticada. Entretanto, esse não é o problema principal proposto e certamente na lista de alternativas apresentada há uma que pode contribuir de maneira mais efetiva para a resolução do mesmo."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Algumas atividades requerem a realização de várias competições (partidas) em pares de equipes, para chegar-se ao vencedor, por exemplo o voleibol. Outras, como muitas provas de atletismo, são praticadas envolvendo todas as equipes (ou atletas) em um único evento. A organização dos jogos esportivos precisa definir todas essas disputas e posteriormente alocar cada uma delas para realização em uma dada infraestrutura (quadra, campo, ginásio, piscina etc.). Esse procedimento consiste em alocar para cada disputa a estrutura onde deverá ser realizada, considerando uma série de critérios estabelecidos, como a distância para se chegar das escolas envolvidas até o local da realização. Esse é um problema clássico, que se aplica em várias situações e que, para ser resolvido, requer a elaboração de um algoritmo."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIVActiviryFour = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_4_micromundo_iv",
            questions: [
                {
                    id: "q1_a4_micromundo_iv",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Abstração",
                            tip: "Ao criarmos um novo conceito, como a \"representatividade esportiva\", precisamos estabelecer as propriedades a serem avaliadas, para que essas possam em conjunto oferecer possibilidades de classificação dos participantes. O pilar Abstração é o principal instrumento para a constituição dessa nova premiação."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Pontuação",
                            tip: "Certamente em alguma etapa da realização das competições e da avaliação do desempenho das equipes este conceito será de grande valia. Entretanto, ele não faz parte da lista de pilares do Pensamento Computacional aqui considerados: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "Como sabemos, o Reconhecimento de Padrões é uma estratégia que podemos usar para associar um determinado indivíduo (objeto, pessoa, conceito etc.) com uma determinada categoria. Esse pilar pode ser utilizado em várias situações no planejamento e desenvolvimento dos jogos estudantis e atividades correlatas. Mas, especificamente na situação que estamos tratando,  há alternativas mais apropriadas para a criação da nova modalidade de premiação."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Em algum ponto do processo de premiação, por exemplo, será necessário apurar os resultados, com base nos critérios estabelecidos. Nesse momento será necessário o uso de algum algoritmo, que pode ser bem simples, como um processo de contagem dos pontos, ou mais complexo. Mas antes da contagem dos pontos, deve ser definido o que avaliar, e para essa tarefa outros pilares são mais adequados."
                        }
                    ]
                }
            ]
        }
    }

    
    getMicromundoIVActiviryFive = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_5_micromundo_iv",
            questions: [
                {
                    id: "q1_a5_micromundo_iv",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Para descrever o funcionamento do jogo super trunfo, poderemos usar o conceito de Algoritmos, um dos pilares do Pensamento Computacional.",
                            tip: "A menos de alguns detalhes que deixamos de apresentar, podemos descrever um jogo de super trunfo usando algoritmos, como o que apresentamos a seguir: o super trunfo é disputado em uma série de rodadas e termina quando não houver mais nenhuma a realizar. Em cada rodada há um vencedor, que se apropria de todas as cartas ganhas durante a mesma. Para existir uma rodada, é necessário que mais de um jogador tenha cartas para dela participar"
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Definir as características relevantes e mensuráveis dos atletas de uma determinada modalidade, que possam servir para criar as cartas do jogo, usando o pilar Abstração, um dos pilares do Pensamento Computacional.",
                            tip: "Certamente, antes de criar as cartas do jogo, precisamos escolher as propriedades que descrevem um atleta de determinada modalidade esportiva. Para isso precisamos escolher algumas características e abandonar as que não são relevantes, ou seja, elaborar uma abstração. O pilar que nos apoia nessa situação é, por definição, Abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Para produzir as cartas de um determinado super trunfo é importante pensarmos em um trabalho de equipe. Usando o pilar Decomposição do Pensamento Computacional, podemos identificar diferentes atividades para serem distribuídas pelas equipes.",
                            tip: "Construir um jogo de cartas certamente envolve várias atividades que vão da seleção de propriedades até a produção física do jogo. Isso não é um trabalho pequeno, principalmente quando se pensa em fazer vários conjuntos temáticos de cartas. A divisão de tarefas pode ser facilitada com uma decomposição, que facilitará a definição de responsabilidades."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Para levantar a quantidade de gols marcados em olímpiadas escolares, por cada atleta, na modalidade futebol, o pilar Reconhecimento de Padrões seria o mais indicado.",
                            tip: "Para fazer o levantamento da quantidade de gols marcado em olímpiadas escolares por cada atleta, não seria o pilar Reconhecimento de Padrões o mais indicado, mas sim o pilar Algoritmos. Considera-se que, estando disponível a informação geral de gols de cada atleta, seria necessário examinar cada gol e verificar se foi ou não marcado em uma olímpiada escolar, antes de contabilizá-lo."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIVActivirySix = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_6_micromundo_iv",
            questions: [
                {
                    id: "q1_a6_micromundo_iv",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Dado que nem todas as atividades que encontraremos acham-se catalogadas, podemos, usando o pilar Reconhecimento de Padrões, fazer aproximações com as práticas assemelhadas, para entender as inspirações para cada nova modalidade encontrada. Por exemplo, algumas práticas podem ser definidas a partir de outras semelhantes. Veja-se o caso do futevôlei, que usa uma rede de voleibol com uma variação das suas regras: quantidade de jogadores e o uso dos pés e da cabeça ao invés das mãos",
                            tip: "Com o apoio de um catálogo de atividades e suas principais características (por exemplo, o objeto usado para promover a disputa, número de participantes, ambiente onde se realiza a disputa (água, quadra, etc.), podemos associar uma atividade qualquer de acordo com a aproximação dessa com uma ou mais atividades catalogadas, atribuindo um grau de similaridade."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O funcionamento de uma nova atividade esportiva descoberta pode ser definido pela elaboração de um algoritmo",
                            tip: "Isso é possível, pois uma atividade esportiva é realizada em uma sequência finita de sub-atividades e cada atividade possui critérios de finalização."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Para dar instruções sobre como deslocar-se das escolas para os locais onde as atividades em questão possam ser praticadas, o pilar Decomposição será de grande auxílio.",
                            tip: "Para descrever ou dar orientações sobre como deslocar-se das escolas para locais onde as atividades em questão possam ser praticadas, o pilar Decomposição não é o mais indicado, mas sim o pilar Algoritmos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "O pilar Abstração seria adequado para apoiar um estudo para definição de uma 'vocação esportiva' para o entorno de uma escola, a partir dos locais constantes do inventário",
                            tip: "Para identificar possíveis atividades candidatas para definição da \"vocação esportiva\", a partir do entorno da escola, é importante construir uma abstração para esse conceito. Isso implica em determinar as principais características que devem ser consideradas sobre os espaços esportivos existentes, para viabilizar uma avaliação."
                        }
                    ]
                }
            ]
        }
    }
    
    
}

export default (new Activities())

