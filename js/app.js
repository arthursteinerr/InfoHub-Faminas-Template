/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Tema: Formatura e Colação de Grau
 * Engenharia de Software • ADS FAMINAS
 * Padrões Web Standards: Acessibilidade WCAG 2.1, Responsividade e Proporcionalidade
 */

import { initModalController } from './modal-controller.js';

/* ==========================================================================
   BASE DE DADOS OFICIAL DOS CURSOS, FAIXAS E JURAMENTOS
   Fonte: Guia do Formando FAMINAS (Atualização 06/05/2026)
   ========================================================================== */
const COURSES_DATA = {
  ads: {
    name: 'Análise e Desenvolvimento de Sistemas',
    degree: 'Tecnólogo',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Prof. Flávio Andrade Amaral Motta',
    coordBH: '— (Exclusivo Muriaé)',
    pledge: '“Prometo que no exercício profissional como Tecnólogo em Análise e Desenvolvimento de Sistemas serei fiel aos preceitos da honra e da ciência, promovendo o uso e o desenvolvimento da informática em benefício do cidadão e da sociedade”. ASSIM PROMETO.'
  },
  administracao: {
    name: 'Administração',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Simone Monteiro',
    coordBH: 'Profª. Lousanne Cavalcanti Barros Resende',
    pledge: '“Prometo dignificar minha profissão, consciente de minhas responsabilidades legais, observar o código de ética, objetivando o aperfeiçoamento da Ciência da Administração, o desenvolvimento das instituições e a grandeza do homem e da pátria”. ASSIM PROMETO.'
  },
  arquitetura: {
    name: 'Arquitetura e Urbanismo',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Gabriela Cruz Rodrigues',
    coordBH: '—',
    pledge: '“Juro, no exercício da atividade inerente à prática da Arquitetura e Urbanismo, observar as leis do País e respeitar os princípios éticos que presidem a conduta profissional, a fim de projetar espaços para o bem-estar individual e coletivo, buscando, ainda, a universalização do acesso aos mesmos por meio de soluções compatíveis com a natureza e com a demanda socioeconômica, contribuindo com meu trabalho para uma sociedade mais justa e humana”. ASSIM JURO.'
  },
  biomedicina: {
    name: 'Biomedicina',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Mariana de Almeida Azevedo',
    coordBH: 'Prof. Gustavo Oliveira Gonçalves',
    pledge: '“Juro, cumprir com zelo e probidade, todas as atividades inerentes à profissão de biomédico que me forem confiadas. Juro, diante de Deus e dos homens, não medir esforços para exercer, com dignidade e ética, a Biomedicina. Juro estar atento à evolução científica para empregá-la em prol da humanidade. Juro cumprir esses preceitos, para poder usufruir da benevolência de Deus e da confiança dos homens”. ASSIM, JURO.'
  },
  contabeis: {
    name: 'Ciências Contábeis',
    degree: 'Bacharelado',
    sashColor: 'Rosa',
    sashClass: 'swatch-rosa',
    coordMuriae: 'Profª. Simone Monteiro',
    coordBH: 'Profª. Lousanne Cavalcanti Barros Resende',
    pledge: '“Ao receber o grau de Bacharel em Ciências Contábeis, juro, perante a sociedade, exercer a minha profissão com dedicação, responsabilidade e competência, respeitando as normas profissionais e éticas. Juro pautar minha conduta profissional, observando sempre os meus deveres de cidadania, independentemente de crenças, raças ou ideologias, concorrendo para que meu trabalho possa ser um instrumento de controle e orientação útil e eficaz para o desenvolvimento da sociedade e o progresso do país. Comprometo-me, ainda, a lutar pela permanente união da classe contábil, o aprimoramento da ciência contábil e a evolução da profissão”. ASSIM, JURO.'
  },
  direito: {
    name: 'Direito',
    degree: 'Bacharelado',
    sashColor: 'Vermelho',
    sashClass: 'swatch-vermelho',
    coordMuriae: 'Profª. Margarida Maria Espósito Dos Santos',
    coordBH: 'Profª. Cintia Moreira Gonçalves',
    pledge: '“Juro, no exercício das funções de meu grau, acreditar no Direito como a melhor forma para a convivência humana, fazendo da justiça o meio de combater a violência e de socorrer os que dela precisarem, servindo a todo ser humano, sem distinção de classe social ou poder aquisitivo, buscando a paz como resultado final. E, acima de tudo, juro defender a liberdade, pois sem ela não há Direito que sobreviva, justiça que se fortaleça e nem paz que se concretize”. ASSIM, JURO.'
  },
  edfisica: {
    name: 'Educação Física',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Prof. Felippe da Silva Leite Cardoso',
    coordBH: '—',
    pledge: '“Juro, pela minha fé e minha honra e de acordo com os princípios éticos do Profissional de Educação Física, exercer com dignidade, zelo e competência as minhas atividades profissionais em prol da saúde e educação de toda a população, bem como da prática esportiva dos atletas, atendendo determinações legais decorrentes da exclusividade desta profissão na prestação de serviços à sociedade neste campo, destacando meu papel de educador, estimulando o desenvolvimento científico, tecnológico e humanístico, para um estilo de vida ativo e o bem-estar de todos”. ASSIM, JURO.'
  },
  edfisicaLicenciatura: {
    name: 'Educação Física',
    degree: 'Licenciatura',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Prof. Felippe da Silva Leite Cardoso',
    coordBH: '—',
    pledge: '“Prometo dignificar minha profissão, consciente de minhas responsabilidades legais, observar o código de ética, objetivando o aperfeiçoamento da ciência da educação, o desenvolvimento das instituições, a grandeza do homem e da prática”. ASSIM PROMETO.'
  },
  enfermagem: {
    name: 'Enfermagem',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Soraya Lucia do Carmo da Silva Loures',
    coordBH: 'Profª. Katiucia Martins Barros',
    pledge: '“Solenemente, na presença de Deus e desta assembléia, juro: dedicar minha vida profissional a serviço da humanidade, respeitando a dignidade e os direitos da pessoa humana, exercendo a Enfermagem com consciência e fidelidade; Guardar os segredos que me forem confiados; Respeitar o ser humano desde a concepção até depois da morte, não praticar atos que coloquem em risco a integridade física ou psíquica do ser humano, atuar junto a equipe de saúde para o alcance da melhoria do nível de vida da população; manter elevados os ideais de minha profissão, obedecendo os preceitos da ética, da legalidade e da moral, honrando seu prestígio e suas tradições”. ASSIM, JURO.'
  },
  engcivil: {
    name: 'Engenharia Civil',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Lorena Andrade Nunes Pedrosa',
    coordBH: '—',
    pledge: '“Juro que, no cumprimento do meu dever de engenheiro civil, não me deixarei cegar pelo brilho excessivo da tecnologia, de forma a não me esquecer de que trabalho para o bem do homem e não da máquina. Respeitarei a natureza, evitando projetar ou construir equipamentos que destruam o equilíbrio ecológico ou poluam, além de colocar todo o meu conhecimento científico a serviço do conforto e desenvolvimento da humanidade. Assim sendo, estarei em paz comigo e com Deus”. ASSIM, JURO.'
  },
  farmacia: {
    name: 'Farmácia',
    degree: 'Bacharelado',
    sashColor: 'Amarelo',
    sashClass: 'swatch-amarelo',
    coordMuriae: 'Prof. Emilio Santana Abreu',
    coordBH: 'Profª. Karine Silvestre Ferreira',
    pledge: '“Juro, em minhas funções de Farmacêutico, sem nunca me impor, auxiliar no que for possível, não pensando em gratificações e agradecimentos. Juro não oferecer drogas que, conscientemente, eu saiba serem nocivas à saúde. Evitarei qualquer ato de maldade ou que favoreça o crime e a corrupção. Prometo ainda ser um amigo leal que mereça a confiança das pessoas em seus momentos mais difíceis. E espero a graça divina do amparo, para que eu saiba cumprir com dignidade a minha profissão”. ASSIM JURO.'
  },
  fisioterapia: {
    name: 'Fisioterapia',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Prof. Rodrigo Antonio Montezano Valintin Lacerda',
    coordBH: '—',
    pledge: '“Prometo, perante Deus e minha pátria que, no exercício da profissão de fisioterapeuta, empregarei meus talentos com inteligência, honestidade e dedicação, sem jamais faltar com a ética cristã”. ASSIM PROMETO.'
  },
  medicina: {
    name: 'Medicina',
    degree: 'Graduação Médica',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Fernanda Magalhães Bastos Ribeiro',
    coordBH: 'Prof. Ricardo Luiz Fontes Moreira',
    pledge: '“Eu, solenemente, juro consagrar minha vida a serviço da Humanidade. Darei como reconhecimento a meus mestres, meu respeito e minha gratidão. Praticarei a minha profissão com consciência e dignidade. A saúde dos meus pacientes será a minha primeira preocupação. Respeitarei os segredos a mim confiados. Manterei, a todo custo, no máximo possível, a honra e a tradição da profissão médica. Meus colegas serão meus irmãos. Não permitirei que concepções religiosas, nacionais, raciais, partidárias ou sociais intervenham entre meu dever e meus pacientes. Manterei o mais alto respeito pela vida humana, desde sua concepção. Mesmo sob ameaça, não usarei meu conhecimento médico em princípios contrários às leis da natureza. Faço estas promessas, solene e livremente, pela minha própria honra”. ASSIM, JURO.'
  },
  veterinaria: {
    name: 'Medicina Veterinária',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Lorena Chaves Monteiro',
    coordBH: '—',
    pledge: '“Juro que, no exercício da Medicina Veterinária, cumprirei os dispositivos legais e normativos, respeitando o Código de Ética profissional, buscando harmonia entre ciência e arte, aplicando meus conhecimentos para o desenvolvimento científico e tecnológico em benefício da saúde única e bem-estar dos animais, promovendo o desenvolvimento sustentável”. ASSIM JURO.'
  },
  nutricao: {
    name: 'Nutrição',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Vanessa Rosse de Souza',
    coordBH: 'Profª. Cristiane de Oliveira Lopes',
    pledge: '“Juro que, ao exercer a profissão de nutricionista, o farei com dignidade e eficiência, valendo-me da ciência da nutrição, em benefício da saúde da pessoa, sem discriminação de qualquer natureza. Prometo, ainda, que serei fiel aos princípios da moral e da ética. Ao cumprir este juramento com dedicação, desejo ser merecedor dos louros que a profissão proporciona”. ASSIM, JURO.'
  },
  odontologia: {
    name: 'Odontologia',
    degree: 'Bacharelado',
    sashColor: 'Bordô',
    sashClass: 'swatch-bordo',
    coordMuriae: 'Profª. Neliana Salomão Rodrigues',
    coordBH: 'Profª. Caroline Christine Santa Rosa',
    pledge: '“Prometo, no exercício da profissão de cirurgião dentista, exercê-la com dignidade e consciência e ser sempre fiel aos deveres da honra, da lei, da ética e da ciência. Que meus olhos sejam discretos e a minha boca sempre muda ante os segredos que me revelarem. Tudo farei pela saúde e pela vida daqueles que me forem confiados. Juro que nunca usarei da profissão para corromper os costumes ou desmerecer a odontologia. Se eu cumprir este juramento com fidelidade, gozem para sempre a minha vida e a minha arte de reputação entre os homens”. ASSIM, PROMETO.'
  },
  psicologia: {
    name: 'Psicologia',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Larissa Bouzada Furlani',
    coordBH: 'Profª. Henriqueta Regina Pereira Couto',
    pledge: '“Como psicólogo, eu me comprometo a colocar minha profissão a serviço da sociedade brasileira, pautando meu trabalho nos princípios da qualidade técnica e do rigor ético. Por meio do meu exercício profissional, contribuirei para o desenvolvimento da Psicologia como ciência e profissão na direção das demandas da sociedade, promovendo a saúde e a qualidade de vida de cada sujeito e de todos os cidadãos e instituições”. ASSIM, PROMETO.'
  }
};

/* ==========================================================================
   INICIALIZAÇÃO RESILIENTE DOS COMPONENTES
   ========================================================================== */
let appInitialized = false;

function initializeApp() {
  if (appInitialized) return;
  appInitialized = true;

  const components = [
    ['modais institucionais', initModalController],
    ['simulador', initSimulator],
    ['consulta de cursos', initCourseExplorer],
    ['busca do FAQ', initFaqSearch],
    ['cópia de textos', initClipboardHandlers]
  ];

  components.forEach(([name, initialize]) => {
    try {
      initialize();
    } catch (error) {
      console.error(`[InfoHub Setorial] Falha ao inicializar ${name}.`, error);
      showToast(`Não foi possível carregar ${name}. Atualize a página ou use os canais oficiais.`, {
        kind: 'error'
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
} else {
  initializeApp();
}

/* --------------------------------------------------------------------------
   MÓDULO 1: SIMULADOR DE APTIDÃO ACADÊMICA
   -------------------------------------------------------------------------- */
function initSimulator() {
  const checkboxes = Array.from(document.querySelectorAll('.checklist-checkbox'));
  const progressBar = document.getElementById('simulator-progress-bar');
  const percentLabel = document.getElementById('simulator-percent-label');
  const verdictBox = document.getElementById('simulator-verdict');
  const verdictIcon = document.getElementById('verdict-icon');
  const verdictTitle = document.getElementById('verdict-title');
  const verdictDesc = document.getElementById('verdict-desc');
  const btnReset = document.getElementById('btn-reset-simulator');
  const btnSelectAll = document.getElementById('btn-select-all-simulator');
  const progressTrack = document.querySelector('.progress-bar-track');

  if (!checkboxes.length || !progressBar) return;

  function updateStatus() {
    const total = checkboxes.length;
    const checkedCount = checkboxes.reduce((count, checkbox) => {
      const checked = checkbox.checked;
      checkbox.closest('.checklist-label')?.classList.toggle('is-checked', checked);
      return count + Number(checked);
    }, 0);
    const percent = Math.round((checkedCount / total) * 100);

    progressBar.style.width = `${percent}%`;
    progressTrack?.setAttribute('aria-valuenow', String(percent));
    progressTrack?.setAttribute(
      'aria-valuetext',
      `${checkedCount} de ${total} itens marcados (${percent}%).`
    );
    if (percentLabel) percentLabel.textContent = `${percent}%`;

    verdictBox?.classList.toggle('is-complete', checkedCount === total);
    if (verdictIcon) verdictIcon.textContent = checkedCount === total ? 'fact_check' : 'pending_actions';
    if (verdictTitle) {
      verdictTitle.textContent = `${checkedCount} de ${total} requisitos assinalados (${percent}%)`;
    }
    if (verdictDesc) {
      verdictDesc.textContent = checkedCount === total
        ? 'Você marcou todos os itens. Isso não confirma sua aptidão; valide sua situação acadêmica e a lista oficial com a Secretaria.'
        : 'Esta autoavaliação não consulta seus registros. Confirme requisitos e eventuais pendências com a Secretaria Acadêmica.';
    }
  }

  checkboxes.forEach((checkbox) => checkbox.addEventListener('change', updateStatus));

  btnSelectAll?.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
    updateStatus();
    showToast('Itens marcados apenas nesta página; isso não altera seus registros acadêmicos.');
  });

  btnReset?.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateStatus();
    showToast('Checklist limpo. Nenhuma informação foi salva.');
  });

  // A situação acadêmica é dado pessoal; o checklist permanece somente em memória.
  updateStatus();
}

/* --------------------------------------------------------------------------
   MÓDULO 2: EXPLORADOR DE CURSOS, FAIXAS E JURAMENTOS
   -------------------------------------------------------------------------- */
function initCourseExplorer() {
  const selectElement = document.getElementById('course-selector-input');
  const titleEl = document.getElementById('course-res-title');
  const degreeEl = document.getElementById('course-res-degree');
  const campusEl = document.getElementById('course-res-campus');
  const swatchEl = document.getElementById('course-res-swatch');
  const sashNameEl = document.getElementById('course-res-sash-name');
  const coordMreEl = document.getElementById('course-res-coord-mre');
  const coordBhEl = document.getElementById('course-res-coord-bh');
  const pledgeTextEl = document.getElementById('course-res-pledge-text');
  const btnCopyPledge = document.getElementById('btn-copy-pledge');

  if (!selectElement) return;

  function renderCourse(courseKey) {
    if (!Object.prototype.hasOwnProperty.call(COURSES_DATA, courseKey)) return false;
    const data = COURSES_DATA[courseKey];

    if (titleEl) titleEl.textContent = data.name;
    if (degreeEl) degreeEl.textContent = data.degree;
    if (campusEl) {
      const campuses = data.coordBH && data.coordBH !== '—' && !data.coordBH.startsWith('—')
        ? 'Muriaé e Belo Horizonte'
        : 'Muriaé';
      campusEl.textContent = `Campi listados no Guia: ${campuses}`;
    }
    if (sashNameEl) sashNameEl.textContent = `Faixa ${data.sashColor}`;
    if (swatchEl) {
      const sashClasses = [
        'swatch-azul',
        'swatch-verde',
        'swatch-rosa',
        'swatch-vermelho',
        'swatch-amarelo',
        'swatch-bordo'
      ];
      swatchEl.classList.remove(...sashClasses);
      if (sashClasses.includes(data.sashClass)) swatchEl.classList.add(data.sashClass);
    }
    if (coordMreEl) coordMreEl.textContent = data.coordMuriae;
    if (coordBhEl) coordBhEl.textContent = data.coordBH;
    if (pledgeTextEl) pledgeTextEl.textContent = data.pledge;
    btnCopyPledge?.setAttribute(
      'aria-label',
      `Copiar juramento oficial do curso de ${data.name} (${data.degree})`
    );
    return true;
  }

  selectElement.addEventListener('change', () => {
    if (!renderCourse(selectElement.value)) {
      selectElement.value = 'ads';
      renderCourse('ads');
      showToast('Curso não reconhecido. Exibindo a opção padrão.', { kind: 'error' });
    }
  });

  btnCopyPledge?.addEventListener('click', () => {
    const text = pledgeTextEl?.textContent?.trim();
    if (!text) {
      showToast('Não foi possível localizar o juramento para copiar.', { kind: 'error' });
      return;
    }
    copyToClipboard(text, 'Texto do juramento copiado.', btnCopyPledge);
  });

  if (!renderCourse(selectElement.value)) {
    selectElement.value = 'ads';
    renderCourse('ads');
  }
}

/* --------------------------------------------------------------------------
   MÓDULO 3: BUSCA ACESSÍVEL E AÇÕES DO FAQ
   -------------------------------------------------------------------------- */
function normalizeSearchText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
    .replace(/\s+/g, ' ');
}

function initFaqSearch() {
  const searchInput = document.getElementById('faq-search-input');
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));
  const countFeedback = document.getElementById('faq-count-feedback');
  const btnClearSearch = document.getElementById('btn-clear-faq-search');
  const btnExpandAll = document.getElementById('btn-faq-expand-all');
  const btnCollapseAll = document.getElementById('btn-faq-collapse-all');
  const noResultsBox = document.getElementById('faq-no-results');

  if (!faqItems.length) return;

  const indexedItems = faqItems.map((item) => {
    const summary = item.querySelector('.faq-summary')?.textContent || '';
    const content = item.querySelector('.faq-content')?.textContent || '';
    return { item, searchText: normalizeSearchText(`${summary} ${content}`) };
  });

  function applyFilter() {
    const rawQuery = searchInput?.value || '';
    const query = normalizeSearchText(rawQuery);
    const terms = query ? query.split(' ').filter(Boolean) : [];
    let visibleCount = 0;

    if (btnClearSearch) btnClearSearch.style.display = query ? 'inline-flex' : 'none';

    indexedItems.forEach(({ item, searchText }) => {
      const matches = terms.every((term) => searchText.includes(term));
      item.hidden = !matches;
      item.classList.toggle('is-hidden', !matches);
      if (matches) {
        visibleCount += 1;
        if (terms.length && query.length >= 3) item.setAttribute('open', '');
      }
    });

    if (countFeedback) {
      if (!terms.length) {
        countFeedback.textContent = `Exibindo todas as ${faqItems.length} perguntas frequentes.`;
      } else {
        const label = visibleCount === 1 ? 'pergunta encontrada' : 'perguntas encontradas';
        countFeedback.textContent = `${visibleCount} ${label} para "${rawQuery.trim()}".`;
      }
    }

    if (noResultsBox) noResultsBox.style.display = visibleCount === 0 ? 'flex' : 'none';
  }

  searchInput?.addEventListener('input', applyFilter);

  btnClearSearch?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    applyFilter();
  });

  btnExpandAll?.addEventListener('click', () => {
    const visibleItems = indexedItems.filter(({ item }) => !item.hidden);
    visibleItems.forEach(({ item }) => item.setAttribute('open', ''));
    showToast(
      visibleItems.length
        ? `${visibleItems.length} pergunta(s) visível(is) expandida(s).`
        : 'Não há perguntas visíveis para expandir.',
      { kind: visibleItems.length ? 'success' : 'error' }
    );
  });

  btnCollapseAll?.addEventListener('click', () => {
    faqItems.forEach((item) => item.removeAttribute('open'));
    showToast('Perguntas recolhidas.');
  });

  applyFilter();
}

/* --------------------------------------------------------------------------
   MÓDULO 4: GESTÃO DE CLIPBOARD E TOAST FLUTUANTE
   -------------------------------------------------------------------------- */
function initClipboardHandlers() {
  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-copy-target');
      const target = targetId ? document.getElementById(targetId) : null;
      const text = target?.textContent?.trim() || button.getAttribute('data-copy-text')?.trim();

      if (!text) {
        showToast('Não foi possível localizar o texto para copiar.', { kind: 'error' });
        return;
      }

      copyToClipboard(text, 'Endereço de e-mail copiado.', button);
    });
  });
}

async function copyToClipboard(text, successMessage = 'Texto copiado.', triggerButton = null) {
  const value = String(text || '').trim();
  if (!value) {
    showToast('Não há texto para copiar.', { kind: 'error' });
    return false;
  }

  try {
    if (window.isSecureContext && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        if (!fallbackCopy(value)) throw new Error('Clipboard API e cópia alternativa indisponíveis.');
      }
    } else if (!fallbackCopy(value)) {
      throw new Error('Cópia alternativa indisponível neste navegador.');
    }

    showToast(successMessage);
    if (triggerButton) flashButtonSuccess(triggerButton);
    return true;
  } catch (error) {
    console.error('[InfoHub Setorial] Falha ao copiar texto.', error);
    showToast('A cópia automática falhou. Você pode selecionar e copiar o texto manualmente.', {
      kind: 'error'
    });
    return false;
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  const previouslyFocused = document.activeElement;
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.setAttribute('aria-hidden', 'true');
  textarea.tabIndex = -1;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  document.body.appendChild(textarea);

  try {
    textarea.focus();
    textarea.select();
    if (typeof document.execCommand !== 'function' || !document.execCommand('copy')) return false;
    return true;
  } catch (error) {
    console.warn('[InfoHub Setorial] A cópia alternativa não foi autorizada.', error);
    return false;
  } finally {
    textarea.remove();
    if (previouslyFocused?.isConnected) previouslyFocused.focus();
  }
}

const buttonFeedbackTimers = new WeakMap();
function flashButtonSuccess(button) {
  button.classList.add('is-copied');
  const previousTimer = buttonFeedbackTimers.get(button);
  if (previousTimer) clearTimeout(previousTimer);

  const timer = setTimeout(() => {
    button.classList.remove('is-copied');
  }, 1800);
  buttonFeedbackTimers.set(button, timer);
}

let toastTimeout = null;
function showToast(message, { kind = 'success' } = {}) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.setAttribute('aria-atomic', 'true');

    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.id = 'toast-text';
    toast.append(icon, text);
    document.body.appendChild(toast);
  }

  const icon = toast.querySelector('.material-symbols-outlined');
  const text = toast.querySelector('#toast-text');
  if (icon) icon.textContent = kind === 'error' ? 'error' : 'check_circle';
  if (text) text.textContent = String(message);
  toast.classList.toggle('is-error', kind === 'error');

  requestAnimationFrame(() => toast.classList.add('is-visible'));
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}
