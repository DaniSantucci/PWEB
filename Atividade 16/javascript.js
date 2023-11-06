function confirmarCurso() {
    var selectElement = document.getElementById("cursoSelect");
    var selectedValue = selectElement.value;
  
    if (selectedValue !== "") {
      var cursoNome = selectElement.options[selectElement.selectedIndex].text;
      var confirmacao = confirm("Deseja abrir a página do curso " + cursoNome + "?");
  
      if (confirmacao) {
        abrirPaginaCurso(selectedValue, cursoNome);
      }
    }
  }
  
  function abrirPaginaCurso(curso, nome) {
    
    var url = ""; 
    var descricao = obterDescricaoCurso(curso);
  
    var novaJanela = window.open(url, "_blank", "width=600,height=300");
    novaJanela.document.write("<link rel='stylesheet' type='text/css' href='janela_style.css'>");

  
    if (novaJanela) {
      novaJanela.document.write("<h1>" + nome + "</h1>");
      novaJanela.document.write("<p id='info'><b>Informações sobre o curso de  " + nome + ":</b></p>");
      novaJanela.document.write("<p>" + descricao + "</p>");
      novaJanela.document.close();
    } else {
      alert("A janela não pôde ser aberta. Verifique as configurações do seu navegador.");
    }
  }
  
  function obterDescricaoCurso(curso) {
    var descricaoCursos = {
      ads: "O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.",
      fm: "O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.",
      sb: "O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.",
      ge: "O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos. A habilidade para lidar com pessoas, capacidade de comunicação, trabalho em equipe, liderança, negociação, busca de informações, tomada de decisão em contextos econômicos, políticos, culturais e sociais distintos, são requisitos importantes a esse profissional.",
      lo: "O estudante vai aprender a determinar custos, como fretes e tributos, e planejar rotas de transporte e entrega de mercadorias de maneira eficiente, com qualidade, dentro do prazo estabelecido e a preços competitivos. Por isso, são importantes as disciplinas de cálculo, estatística, matemática financeira, economia e finanças empresariais.O aluno também estuda meios de transporte, suas características e vantagens. Aprende ainda a fazer a gestão de um estoque, a criar embalagens de produtos que facilitem o armazenamento e o transporte e a utilizar softwaresde simulação de cargas e roteiros. Gestão, comércio exterior, logística internacional, inglês e espanhol completam o currículo.",
      po: "Os tipos de polímeros (materiais plásticos) e como utilizá-los na fabricação de produtos como o plástico, que pode ser transformado de embalagens a componentes para automóveis. As disciplinas básicas para a compreensão do curso são matemática, química e física. Também faz parte da grade curricular a gestão de recursos industriais, o impacto ambiental, as técnicas de reciclagem e reutilização de materiais e também alguns processos de transformação dos materiais poliméricos.",
      promec:"O desenvolvimento de projeto de um determinado produto, desde o arranjo físico até a seleção de peças para a sua confecção, passando pela engenharia experimental (construção de protótipo físico ou virtual). Para isso, utiliza os conceitos de cálculo, física, eletricidade e materiais de construção mecânica que são abordados nas disciplinas básicas para a compreensão do curso. Nas disciplinas profissionalizantes destacam-se, entre outras, desenho técnico, construção e projeto de máquinas, automação, sistemas hidráulicos e pneumáticos, além de planejamento e controle de processos.",
    };
  
    return descricaoCursos[curso] || "Descrição do Curso não disponível.";
  }
  