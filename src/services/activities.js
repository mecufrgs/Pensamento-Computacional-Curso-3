class Activities {
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
                            text: "Reconhecimento de Padrões",
                            tip: "Os trajetos podem ser descritos segundo elementos característicos, por exemplo: hora de início e conclusão do trajeto; ponto de partida e de chegada; passagem por pontos de destaque/referência no bairro; etc. O pilar Reconhecimento de Padrões é essencial em tal atividade."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Decomposição",
                            tip: "Embora as ações listadas para a efetiva implementação da ciclofaixa exemplifiquem Decomposição, o encaminhamento dessas ações não cabe na fase de planejamento, razão porque essa é atividade menos apropriada para a solução do problema em discussão."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Algoritmos",
                            tip: "A descrição dos percursos padrão envolve a descrição precisa de deslocamentos (possivelmente medidos em metros percorridos) ou alterações de direção (dobrar à esquerda/direita), escolhas baseadas nas condições de tráfego, etc. O pilar Algoritmo é o mais indicado para apoiar tal atividade, a qual é muito apropriada ao problema."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Abstração",
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
                            text: "Decomposição",
                            tip: "A realização de uma mostra fotográfica pode ser dividida em etapas ou partes, como:  coleta de fotos antigas em registros diversos;  coleta de fotos atuais na própria atração;  a seleção das melhores fotos; a organização do espaço físico. O pilar Decomposição é adequado para desmembrar a mostra das fotos em \"partes\" e, portanto, importante para melhor organizar os esforços das equipes."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Abstração",
                            tip: "Dentre os inúmeros aspectos (acontecimentos, datas, pessoas envolvidas, etc.) relacionados direta ou indiretamente a um ponto turístico, a elaboração de um texto descritivo deve incluir apenas alguns deles, os considerados relevantes para o propósito (apresentá-lo como uma referência histórico-cultural), sendo os demais abstraídos da narrativa. O pilar Abstração é, então, essencial a tal propósito."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Algoritmos",
                            tip: "A sequenciação de atividades a serem executadas, que pode incluir a repetição de certos trechos e a seleção de uma ou outra parte da sequência, segundo a verificação de alguma condição, é uma ação típica do uso do pilar <b>Algoritmos</b>, e nesse caso essencial para a organização do evento."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Reconhecimento de Padrões",
                            tip: "Embora o uso do pilar <b>Decomposição</b> seja adequado para dividir a organização de um evento, especialmente um de grandes proporções, em partes menores e bem determinadas, a segunda parte da afirmação não parece razoável. O pilar <b>Reconhecimento de Padrões</b> é adequado para associar aspectos de um objeto (no sentido mais amplo/genérico possível do termo) a categorias previamente definidas."
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
                            text: "Decomposição",
                            tip: "O pilar Decomposição poderia ser utilizado para particionar o problema central - a realização da exposição itinerante - em partes menores, que poderiam inclusive ser tratadas em paralelo. Entretanto, seria pouco útil para a definição do horário de funcionamento e a duração da mesma."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Abstração",
                            tip: "De fato, a identificação de aspectos, inclusive subjetivos, que caracterizem o material e possibilitem conceber uma ou várias formas de organizá-lo, segundo perspectivas distintas, pode ser apoiada pelo pilar Abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Algoritmos",
                            tip: "Os roteiros ou caminhos de visitação serão produzidos a partir das características do público alvo, o que implicará em diferentes sequenciamentos, seleções de materiais, etc., questões típicas do desenvolvimento de Algoritmos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Reconhecimento de Padrões",
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
                            text: "Suposição",
                            tip: "Certamente a noção de suposição pode ser usada quando não temos acesso a informação que viabilize um planejamento mais aprimorado. Mas, neste caso, fizemos referência a um possível pilar do Pensamento Computacional, o pilar Suposição, que não é um dos pilares do PC, a saber: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Abstração",
                            tip: "Para melhor descrever as práticas esportivas, por exemplo, é importante que sejam definidas as propriedades a partir das quais possamos organizá-las em categorias."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Algoritmos",
                            tip: "Os caminhos internos no parque poderiam ser definidos de modo a atender roteiros específicos, precisamente definidos, contemplando deslocamentos padronizados para áreas de atividades esportivas e com recursos centrais, como banheiros, administração, subestação de energia, etc. As formas de acesso, entrada e saída do parque também deveriam seguir roteiros e situações precisamente definidos. Certamente o pilar Algoritmos é muito útil em tal cenário."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Reconhecimento de Padrões",
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
                            tip: "Os pilares Abstração e Reconhecimento de Padrões teriam papéis complementares nos cenários A1 e A2. A Abstração seria essencial para a construção de uma classificação geral de modalidades esportivas, ao definir os aspectos que descrevem as modalidades, por exemplo esporte coletivo, disputado em quadra, etc. Através do Reconhecimento de Padrões seria possível associar as características de uma modalidade esportiva a certa categoria. De modo similar, interesses e aptidões de alunos poderiam ser associadas a requisitos e características de atletas de certas modalidades."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algoritmos e Decomposição",
                            tip: "Embora o pilar Algoritmos possa ser usado, por exemplo, para organizar o processo de levantamento/coleta de informações sobre estudantes, que por sua vez possa ser "quebrado" em etapas, usando o pilar Decomposição, essa combinação não é adequada para apoiar os cenários descritos por A1 e A2."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Classificação e Padronização",
                            tip: "Embora sejam atividades importantes em vários cenários, inclusive nos descritos por A1 e A2, "Classificação" e "Padronização" não estão entre os pilares do Pensamento Computacional aqui considerados, ainda que possam ser apoiadas pelos mesmos."
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
                            text: "Classificação e Padronização",
                            tip: "Os termos \"Classificação\" e \"Padronização\" não se referem a nenhum dos pilares que estão sendo apresentados neste curso, a saber: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algoritmos e Decomposição",
                            tip: "Embora esses dois pilares do Pensamento Computacional, Algoritmos e Decomposição, possam contribuir para elaboração de um plano de preparação, a ordem mais adequada em que devem ser usados não é a indicada. Antes de estabelecer o sequenciamento, que pode ser realizado com base no pilar Algoritmos, é necessário obter a lista de exercícios, com o apoio do pilar Decomposição."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Decomposição e Algoritmos",
                            tip: "Usando os preceitos do pilar Decomposição que, aliás, já está sendo usado na formulação da questão, podemos pegar cada grupo (flexibilidade, treinamento de força, treinamento de resistência) e definir agrupamentos menores para facilitar a construção de um plano. Após esse desdobramento, podemos, usando o pilar Algoritmos, realizar a seleção e o sequenciamento, considerando inclusive as condições atuais de um determinado atleta."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Abstração e Decomposição",
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
                            text: "Pontuação",
                            tip: "Considerando a existência de abstrações que representem as diferentes categorias de infraestrutura adequadas a práticas esportivas, é possível utilizar o pilar Reconhecimento de Padrões, para associar uma dada prática esportiva com as possíveis infraestruturas nas quais ela poderia ser praticada. Entretanto, esse não é o problema principal proposto e certamente na lista de alternativas apresentada há uma que pode contribuir de maneira mais efetiva para a resolução do mesmo."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Algoritmos e Reconhecimento de Padrões",
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
                            tip: "<b>Abstração:</b> Ao criarmos um novo conceito, como a \"representatividade esportiva\", precisamos estabelecer as propriedades a serem avaliadas, para que essas possam em conjunto oferecer possibilidades de classificação dos participantes. O pilar Abstração é o principal instrumento para a constituição dessa nova premiação."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Pontuação",
                            tip: "<b>Pontuação:</b> Certamente em alguma etapa da realização das competições e da avaliação da performance das equipes este conceito será de grande valia. Entretanto, ele não faz parte da lista de pilares do Pensamento Computacional aqui considerados: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "<b>Reconhecimento de Padrões:</b> Como sabemos, o Reconhecimento de Padrões é uma estratégia que podemos usar para associar um determinado indivíduo (objeto, pessoa, conceito etc.) com uma determinada categoria. Esse pilar pode ser utilizado em várias situações no planejamento e desenvolvimento dos jogos estudantis e atividades correlatas. Mas especificamente na situação que estamos tratando,  há alternativas mais apropriadas para a criação da nova modalidade de premiação."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "<b>Algoritmos:</b> Em algum ponto do processo de premiação, por exemplo, será necessário apurar os resultados, com base nos critérios estabelecidos. Nesse momento será necessário o uso de algum algoritmo, que pode ser bem simples, como um processo de contagem dos pontos, ou mais complexo. Mas antes da contagem dos pontos, deve ser definido o que avaliar, e para essa tarefa outros pilares são mais adequados."
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
                            text: "Algoritmos",
                            tip: "A menos de alguns detalhes que deixamos de apresentar, podemos descrever um jogo de super trunfo usando algoritmos, como o que apresentamos a seguir: o super trunfo é disputado em uma série de rodadas e termina quando não houver mais nenhuma a realizar. Em cada rodada há um vencedor, que se apropria de todas as cartas ganhas durante a mesma. Para existir uma rodada, é necessário que mais de um jogador tenha cartas para dela participar."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Abstração",
                            tip: "Certamente, antes de criar as cartas do jogo, precisamos escolher as propriedades que descrevem um atleta de determinada modalidade esportiva. Para isso precisamos escolher algumas características e abandonar as que não são relevantes, ou seja, elaborar uma abstração. O pilar que nos apoia nessa situação é, por definição, Abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Decomposição",
                            tip: "Construir um jogo de cartas certamente envolve várias atividades que vão da seleção de propriedades até a produção física do jogo. Isso não é um trabalho pequeno, principalmente quando se pensa em fazer vários conjuntos temáticos de cartas. A divisão de tarefas pode ser facilitada com uma decomposição, que facilitará a definição de responsabilidades."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Reconhecimento de Padrões",
                            tip: "Certamente, se coletarmos as características estratégicas e táticas de cada jogador de dois ou mais times, poderemos realizar comparações entre os jogadores. Por exemplo, no futebol é comum escutarmos frases do tipo: a Mariana é a Marta do nosso time, ou o Joaquim, do Maçaranduba Futebol Clube, é o Pelé (ou o Garrincha) do time. Tais comparações em geral são feitas com base na forma de jogar dos jogadores."
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
                            text: "Reconhecimento de Padrões",
                            tip: "Com o apoio de um catálogo de atividades e suas principais características. (por exemplo, o objeto usado para promover a disputa, número de participantes, ambiente onde se realiza a disputa (água, quadra, etc.)), podemos associar uma atividade qualquer de acordo com a aproximação dessa com uma ou mais atividades catalogadas, atribuindo um grau de similaridade."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algoritmo",
                            tip: "Isso é possível, pois uma atividade esportiva é realizada em uma sequência finita de subatividades e cada atividade possui critérios de finalização."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Decomposição",
                            tip: "Para se ir de um local a outro, a pé, é preciso usar as vias de circulação. Dessa forma é possível ter vários possíveis caminhos para ir de um ao outro. Com isso, para resolver o problema é necessário escolher o menor caminho entre os possíveis que não necessariamente é uma linha reta. Em outras palavras, a atividade descrita nesta alternativa não resolve o problema a que se propõe."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Abstração",
                            tip: "Para identificar possíveis atividades candidatas para definição da "vocação esportiva", a partir do entorno da escola, é importante construir uma abstração para esse conceito. Isso implica em determinar as principais características que devem ser consideradas sobre os espaços esportivos existentes, para viabilizar uma avaliação."
                        }
                    ]
                }
            ]
        }
    }
    
    
}

export default (new Activities())

