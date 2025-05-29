______________________________________
# Contexto
O apepê é um aplicativo focado em melhorar a experiência dos moradores dentro dos seus condomínios. A plataforma reúne diversas funcionalidades e serviços que facilitam o dia a dia, como a reserva de espaços comuns, o acesso ao mercadinho autônomo e outras tarefas rotineiras — tudo de forma simples e prática, diretamente pelo app.
_________________________________________
# Compreensão
<div class="prose max-w-4xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> 
    <div>
      <h4>Problema</h4>
      <p>
        Para acessar as funcionalidades do app, o usuário precisava comprovar seu vínculo com o condomínio já no momento do cadastro. 
        O desafio era permitir esse processo de verificação sem expor publicamente informações internas do condomínio — como nomes, áreas comuns ou regras — para qualquer pessoa que baixasse o app.
      </p>
    </div>
    <div>
      <h4>público alvo</h4>
      <p>
        Moradores de condomínios em fase de implantação dos serviços apepê.
        Esses usuários baixam o aplicativo pela primeira vez, realizam o cadastro e precisam se vincular corretamente ao seu condomínio para acessar as funcionalidades exclusivas da plataforma.
      </p>
    </div>
    <div>
      <h4>solução</h4>
      <ul class="list pl-6 text-gray-700">
          <li>
            Após o cadastro, o app exibe uma chamada clara para que o usuário realize o vínculo com seu condomínio, guiando-o passo a passo de forma intuitiva.
          </li>
          <li>
            Durante a fase de implantação, foram distribuídos QRCodes únicos por condomínio, que direcionam o morador diretamente para o fluxo de download e cadastro vinculado ao seu prédio — reduzindo fricções e garantindo segurança no acesso às funcionalidades exclusivas.
          </li>
      </ul>
    </div>
    <div>
      <h4>Resultado</h4>
        <p>
          Após as melhorias no fluxo de cadastro e vínculo, os testes de usabilidade indicaram resultados positivos em todas as métricas avaliadas:
        </p>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Percepção de dificuldade:</strong> Os participantes classificaram o processo como fácil, com a experiência avaliada na Categoria A da Escala SUS — o nível mais alto de usabilidade segundo a métrica.
          </li>
          <li>
            <strong>Tempo de tarefa:</strong> Os usuários levaram em média 3 minutos para concluir o cadastro e se vincular ao condomínio.
          </li>
          <li>
            <strong>Taxa de sucesso:</strong> 93% dos participantes completaram o processo com sucesso.
          </li>
          <li>
            <strong>Taxa de erros:</strong> A média foi de 1 erro por usuário, geralmente relacionado à digitação ou leitura de informações no primeiro uso.
          </li>
          <li>
            Esses dados reforçam a efetividade da solução, mostrando que o novo fluxo atendeu tanto às necessidades de segurança quanto à experiência fluida e intuitiva para o usuário final.
          </li>
        </ul>
  </div>
</div>

____________________________________________
# Meu papel
<div>
  <ul class="list-disc pl-6 text-gray-700 space-y-2">
    <li>
      <strong>UX Design</strong> – Criação de fluxos, wireframes, interfaces e protótipos de alta fidelidade para web e mobile.
    </li>
    <li>
      <strong>UX Research</strong> – Condução de entrevistas, análise de jornada do usuário, definição de hipóteses e validação com dados qualitativos.
    </li>
    <li>
      <strong>Prototipação</strong> – Desenvolvimento de protótipos navegáveis com foco em testes e iteração rápida.
    </li>
    <li>
      <strong>Testes de Usabilidade</strong> – Planejamento, execução e análise de testes com usuários para avaliar eficiência, clareza e acessibilidade do fluxo de cadastro.
    </li>
  </ul>
</div>

____________________________________
# Processo de Design

<h4>1.</h4>
<h3 class="text-lg font-semibold">🧭 Jornada do Usuário</h3>
<p class="text-gray-600 text-sm">
  Para compreender melhor o fluxo de entrada no app, desenhei a jornada do usuário considerando o ponto inicial: a leitura do QRCode fixado no condomínio.
</p>

![User Journey Map](../src/assets/projects/usability_test/userflow_condominium-conection.png)
<p>
  A jornada nos ajudou a identificar que os usuários precisariam ser orientados de forma clara em cada etapa. Durante esse mapeamento, surgiram pontos de dúvida recorrentes, especialmente relacionados ao momento de validação e vínculo com o condomínio.
</p><br><br>
<h4>2.</h4>
<h3 class="text-lg font-semibold">🧪 Protótipo</h3>
<p class="text-gray-600 text-sm">
  Com base na jornada, desenvolvi um protótipo de alta fidelidade, com o objetivo de proporcionar aos usuários uma experiência de teste o mais próxima possível da interface real.
</p>
<div class="aspect-video">
  <iframe
    src="https://player.vimeo.com/video/793933696?h=c6d9d6c0f5&autoplay=1&loop=1"
    class="w-full h-full"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    title="High-fidelity prototype demonstration">
  </iframe>
</div>
<p>
  A decisão de utilizar esse nível de fidelidade foi especialmente importante para usuários com pouca familiaridade com tecnologia ou idade mais avançada, garantindo maior compreensão e engajamento durante os testes.
</p><br><br>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="flex flex-col space-y-4">
    <h4>3.</h4>
    <h3 class="text-lg font-semibold">👥 Teste de Usabilidade</h3>
    <p class="text-gray-600 text-sm">
      Com o protótipo pronto, realizamos testes de usabilidade com 15 participantes. <br><br>
      Demos prioridade à seleção de usuários extremos — pessoas com pouca ou nenhuma experiência com aplicativos e usuários com idade avançada. A hipótese era que, se o fluxo funcionasse bem para esses grupos, os demais usuários também teriam uma boa experiência.<br><br>
      Aplicamos o primeiro teste com os 10 primeiros participantes. A partir do feedback, realizamos ajustes e validamos novamente o fluxo com os 5 usuários restantes, já com a versão otimizada.
    </p>
  </div>
  <div class="flex flex-col space-y-4">
    <h4>4.</h4>
    <h3 class="text-lg font-semibold">📊 Compilação dos Dados & Métricas</h3>
    <p class="text-gray-600 text-sm">
      <strong>Escala SUS (System Usability Scale)</strong><br><br>
      Ao final dos testes, aplicamos a <strong>Escala SUS</strong> com 10 afirmações para cada usuário, a fim de medir a percepção de usabilidade de forma estruturada. Cada item foi avaliado numa escala de 1 (discordo plenamente) a 5 (concordo plenamente).<br><br>
      <strong>Exemplos das afirmações utilizadas:</strong>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>Vou conseguir usar o aplicativo</li>
        <li>Achei o cadastro fácil</li>
        <li>Me senti confiante para fazer o cadastro</li>
        <li>Achei que o cadastro tem muitas inconsistências</li>
        <li>Precisei aprender muitas coisas para fazer o cadastro</li>
      </ul>
      <strong>Outras métricas coletadas:</strong>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>Tempo médio de realização de tarefa</li>
        <li>Taxa de sucesso por tarefa</li>
        <li>Quantidade média de erros</li>
        <li>Número médio de cliques por fluxo</li>
      </ul>
    </p>
  </div>
</div>

___________________________________________

# Highlights 
<h4>a parte bonita</h4>
