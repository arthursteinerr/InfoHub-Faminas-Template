/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Tema: Formatura e Colação de Grau (Grupo 14)
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
    pledge: '“Prometo que no exercício profissional como Tecnólogo em Análise e Desenvolvimento de Sistemas serei fiel aos preceitos da honra e da ciência, promovendo o uso e o desenvolvimento da informática em benefício do cidadão e da sociedade. ASSIM PROMETO.”'
  },
  administracao: {
    name: 'Administração',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Simone Monteiro',
    coordBH: 'Profª. Lousanne Cavalcanti Barros Resende',
    pledge: '“Prometo dignificar minha profissão, consciente de minhas responsabilidades legais, observar o código de ética, objetivando o aperfeiçoamento da Ciência da Administração, o desenvolvimento das instituições e a grandeza do homem e da pátria. ASSIM PROMETO.”'
  },
  arquitetura: {
    name: 'Arquitetura e Urbanismo',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Gabriela Cruz Rodrigues',
    coordBH: '—',
    pledge: '“Juro, no exercício da atividade inerente à prática da Arquitetura e Urbanismo, observar as leis do País e respeitar os princípios éticos que presidem a conduta profissional, a fim de projetar espaços para o bem-estar individual e coletivo, buscando a universalização do acesso aos mesmos por meio de soluções compatíveis com a natureza e com a demanda socioeconômica, contribuindo com meu trabalho para uma sociedade mais justa e humana. ASSIM JURO.”'
  },
  biomedicina: {
    name: 'Biomedicina',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Mariana de Almeida Azevedo',
    coordBH: 'Prof. Gustavo Oliveira Gonçalves',
    pledge: '“Juro cumprir com zelo e probidade todas as atividades inerentes à profissão de biomédico que me forem confiadas. Juro, diante de Deus e dos homens, não medir esforços para exercer, com dignidade e ética, a Biomedicina. Juro estar atento à evolução científica para empregá-la em prol da humanidade. ASSIM, JURO.”'
  },
  contabeis: {
    name: 'Ciências Contábeis',
    degree: 'Bacharelado',
    sashColor: 'Rosa',
    sashClass: 'swatch-rosa',
    coordMuriae: 'Profª. Simone Monteiro',
    coordBH: 'Profª. Lousanne Cavalcanti Barros Resende',
    pledge: '“Ao receber o grau de Bacharel em Ciências Contábeis, juro, perante a sociedade, exercer a minha profissão com dedicação, responsabilidade e competência, respeitando as normas profissionais e éticas. Comprometo-me, ainda, a lutar pela permanente união da classe contábil, o aprimoramento da ciência contábil e a evolução da profissão. ASSIM, JURO.”'
  },
  direito: {
    name: 'Direito',
    degree: 'Bacharelado',
    sashColor: 'Vermelho',
    sashClass: 'swatch-vermelho',
    coordMuriae: 'Profª. Margarida Maria Espósito Dos Santos',
    coordBH: 'Profª. Cintia Moreira Gonçalves',
    pledge: '“Juro, no exercício das funções de meu grau, acreditar no Direito como a melhor forma para a convivência humana, fazendo da justiça o meio de combater a violência e de socorrer os que dela precisarem, servindo a todo ser humano, sem distinção de classe social ou poder aquisitivo, buscando a paz como resultado final. E, acima de tudo, juro defender a liberdade. ASSIM, JURO.”'
  },
  edfisica: {
    name: 'Educação Física',
    degree: 'Bacharelado / Licenciatura',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Prof. Felippe da Silva Leite Cardoso',
    coordBH: '—',
    pledge: '“Juro, pela minha fé e minha honra e de acordo com os princípios éticos do Profissional de Educação Física, exercer com dignidade, zelo e competência as minhas atividades profissionais em prol da saúde e educação de toda a população, destacando meu papel de educador. ASSIM, JURO.”'
  },
  enfermagem: {
    name: 'Enfermagem',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Soraya Lucia do Carmo da Silva Loures',
    coordBH: 'Profª. Katiucia Martins Barros',
    pledge: '“Solenemente, na presença de Deus e desta assembleia, juro dedicar minha vida profissional a serviço da humanidade, respeitando a dignidade e os direitos da pessoa humana, exercendo a Enfermagem com consciência e fidelidade, guardando os segredos a mim confiados. ASSIM, JURO.”'
  },
  engcivil: {
    name: 'Engenharia Civil',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Lorena Andrade Nunes Pedrosa',
    coordBH: '—',
    pledge: '“Juro que, no cumprimento do meu dever de engenheiro civil, não me deixarei cegar pelo brilho excessivo da tecnologia, de forma a não me esquecer de que trabalho para o bem do homem e não da máquina. Respeitarei a natureza e colocarei todo meu conhecimento científico a serviço da humanidade. ASSIM, JURO.”'
  },
  farmacia: {
    name: 'Farmácia',
    degree: 'Bacharelado',
    sashColor: 'Amarelo',
    sashClass: 'swatch-amarelo',
    coordMuriae: 'Prof. Emilio Santana Abreu',
    coordBH: 'Profª. Karine Silvestre Ferreira',
    pledge: '“Juro, em minhas funções de Farmacêutico, auxiliar no que for possível, não pensando em gratificações e agradecimentos. Juro não oferecer drogas que conscientemente saiba serem nocivas à saúde e evitar qualquer ato que favoreça o crime. Prometo ser um amigo leal que mereça a confiança das pessoas. ASSIM JURO.”'
  },
  fisioterapia: {
    name: 'Fisioterapia',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Prof. Rodrigo Antonio Montezano Valintin Lacerda',
    coordBH: '—',
    pledge: '“Prometo, perante Deus e minha pátria, que no exercício da profissão de fisioterapeuta, empregarei meus talentos com inteligência, honestidade e dedicação, sem jamais faltar com a ética. ASSIM PROMETO.”'
  },
  medicina: {
    name: 'Medicina',
    degree: 'Graduação Médica',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Fernanda Magalhães Bastos Ribeiro',
    coordBH: 'Prof. Ricardo Luiz Fontes Moreira',
    pledge: '“Eu, solenemente, juro consagrar minha vida a serviço da Humanidade. A saúde dos meus pacientes será a minha primeira preocupação. Respeitarei os segredos a mim confiados e manterei, a todo custo, no máximo possível, a honra e a tradição da profissão médica. ASSIM, JURO.”'
  },
  veterinaria: {
    name: 'Medicina Veterinária',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Lorena Chaves Monteiro',
    coordBH: '—',
    pledge: '“Juro que, no exercício da Medicina Veterinária, cumprirei os dispositivos legais e normativos, respeitando o Código de Ética profissional, buscando harmonia entre ciência e arte para o desenvolvimento científico em benefício da saúde única e bem-estar dos animais. ASSIM JURO.”'
  },
  nutricao: {
    name: 'Nutrição',
    degree: 'Bacharelado',
    sashColor: 'Verde',
    sashClass: 'swatch-verde',
    coordMuriae: 'Profª. Vanessa Rosse de Souza',
    coordBH: 'Profª. Cristiane de Oliveira Lopes',
    pledge: '“Juro que, ao exercer a profissão de nutricionista, o farei com dignidade e eficiência, valendo-me da ciência da nutrição em benefício da saúde da pessoa, sem discriminação de qualquer natureza. ASSIM, JURO.”'
  },
  odontologia: {
    name: 'Odontologia',
    degree: 'Bacharelado',
    sashColor: 'Bordô',
    sashClass: 'swatch-bordo',
    coordMuriae: 'Profª. Neliana Salomão Rodrigues',
    coordBH: 'Profª. Caroline Christine Santa Rosa',
    pledge: '“Prometo, no exercício da profissão de cirurgião-dentista, exercê-la com dignidade e consciência e ser sempre fiel aos deveres da honra, da lei, da ética e da ciência. Tudo farei pela saúde e pela vida daqueles que me forem confiados. ASSIM, PROMETO.”'
  },
  psicologia: {
    name: 'Psicologia',
    degree: 'Bacharelado',
    sashColor: 'Azul',
    sashClass: 'swatch-azul',
    coordMuriae: 'Profª. Larissa Bouzada Furlani',
    coordBH: 'Profª. Henriqueta Regina Pereira Couto',
    pledge: '“Como psicólogo, eu me comprometo a colocar minha profissão a serviço da sociedade brasileira, pautando meu trabalho nos princípios da qualidade técnica e do rigor ético, promovendo a saúde e a qualidade de vida de cada sujeito e de todos os cidadãos. ASSIM, PROMETO.”'
  }
};

/* ==========================================================================
   INICIALIZAÇÃO DOS COMPONENTES APÓS O DOM CARREGADO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa o controlador dos modais institucionais (Sobre, Termos, Privacidade)
  initModalController();

  // 2. Inicializa o Simulador de Aptidão Acadêmica
  initSimulator();

  // 3. Inicializa o Seletor de Cursos, Faixas e Juramentos
  initCourseExplorer();

  // 4. Inicializa o Sistema de Busca e Ações em Tempo Real no FAQ
  initFaqSearch();

  // 5. Inicializa os Gatilhos de Cópia (Área de Transferência e Toast)
  initClipboardHandlers();

  console.log('[InfoHub Setorial] Formatura e Colação de Grau inicializado com excelência.');
});

/* --------------------------------------------------------------------------
   MÓDULO 1: SIMULADOR DE APTIDÃO ACADÊMICA
   -------------------------------------------------------------------------- */
function initSimulator() {
  const checkboxes = document.querySelectorAll('.checklist-checkbox');
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
    let checkedCount = 0;

    checkboxes.forEach((cb) => {
      const parentLabel = cb.closest('.checklist-label');
      if (cb.checked) {
        checkedCount++;
        parentLabel?.classList.add('is-checked');
      } else {
        parentLabel?.classList.remove('is-checked');
      }
    });

    const percent = Math.round((checkedCount / total) * 100);
    progressBar.style.width = `${percent}%`;
    if (progressTrack) {
      progressTrack.setAttribute('aria-valuenow', String(percent));
    }
    if (percentLabel) {
      percentLabel.textContent = `${percent}%`;
    }

    if (checkedCount === total) {
      verdictBox?.classList.add('is-complete');
      if (verdictIcon) verdictIcon.textContent = 'verified';
      if (verdictTitle) verdictTitle.textContent = 'Parabéns! Você cumpre todos os requisitos acadêmicos!';
      if (verdictDesc) verdictDesc.textContent = 'Sua matriz está integralizada. Acompanhe a publicação do edital e a data da outorga na Ata Oficial de Colação.';
    } else {
      verdictBox?.classList.remove('is-complete');
      if (verdictIcon) verdictIcon.textContent = 'pending_actions';
      if (verdictTitle) verdictTitle.textContent = `${checkedCount} de ${total} requisitos assinalados (${percent}%)`;
      if (verdictDesc) verdictDesc.textContent = 'Atenção: pendências curriculares, documentais ou ENADE impedem a inclusão do seu nome na lista da Ata Oficial.';
    }
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener('change', updateStatus);
  });

  // Botão Marcar Todos
  btnSelectAll?.addEventListener('click', () => {
    checkboxes.forEach((cb) => {
      cb.checked = true;
    });
    updateStatus();
    showToast('Todos os 6 requisitos foram marcados como concluídos.');
  });

  // Botão Limpar / Reiniciar
  btnReset?.addEventListener('click', () => {
    checkboxes.forEach((cb) => {
      cb.checked = false;
    });
    updateStatus();
    showToast('Simulador reiniciado. Selecione seus requisitos.');
  });

  // Atualização inicial
  updateStatus();
}

/* --------------------------------------------------------------------------
   MÓDULO 2: EXPLORADOR DE CURSOS, FAIXAS E JURAMENTOS
   -------------------------------------------------------------------------- */
function initCourseExplorer() {
  const selectElement = document.getElementById('course-selector-input');
  const titleEl = document.getElementById('course-res-title');
  const degreeEl = document.getElementById('course-res-degree');
  const swatchEl = document.getElementById('course-res-swatch');
  const sashNameEl = document.getElementById('course-res-sash-name');
  const coordMreEl = document.getElementById('course-res-coord-mre');
  const coordBhEl = document.getElementById('course-res-coord-bh');
  const pledgeTextEl = document.getElementById('course-res-pledge-text');
  const btnCopyPledge = document.getElementById('btn-copy-pledge');

  if (!selectElement) return;

  function renderCourse(courseKey) {
    const data = COURSES_DATA[courseKey];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.name;
    if (degreeEl) degreeEl.textContent = data.degree || 'Graduação';
    if (sashNameEl) sashNameEl.textContent = `Faixa ${data.sashColor}`;
    if (swatchEl) {
      swatchEl.className = `sash-color-swatch ${data.sashClass}`;
    }
    if (coordMreEl) coordMreEl.textContent = data.coordMuriae;
    if (coordBhEl) coordBhEl.textContent = data.coordBH;
    if (pledgeTextEl) pledgeTextEl.textContent = data.pledge;

    if (btnCopyPledge) {
      btnCopyPledge.setAttribute('aria-label', `Copiar juramento oficial do curso de ${data.name}`);
    }
  }

  selectElement.addEventListener('change', (e) => {
    renderCourse(e.target.value);
  });

  btnCopyPledge?.addEventListener('click', () => {
    const text = pledgeTextEl?.textContent || '';
    copyToClipboard(text, 'Juramento oficial copiado com sucesso!', btnCopyPledge);
  });

  // Inicializa com ADS
  renderCourse('ads');
}

/* --------------------------------------------------------------------------
   MÓDULO 3: BUSCA EM TEMPO REAL E CONTROLES NO FAQ
   -------------------------------------------------------------------------- */
function initFaqSearch() {
  const searchInput = document.getElementById('faq-search-input');
  const faqItems = document.querySelectorAll('.faq-item');
  const countFeedback = document.getElementById('faq-count-feedback');
  const btnClearSearch = document.getElementById('btn-clear-faq-search');
  const btnExpandAll = document.getElementById('btn-faq-expand-all');
  const btnCollapseAll = document.getElementById('btn-faq-collapse-all');
  const noResultsBox = document.getElementById('faq-no-results');

  if (!faqItems.length) return;

  function applyFilter() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    let visibleCount = 0;

    if (btnClearSearch) {
      btnClearSearch.style.display = query.length > 0 ? 'inline-flex' : 'none';
    }

    faqItems.forEach((item) => {
      const summaryText = item.querySelector('.faq-summary')?.textContent.toLowerCase() || '';
      const contentText = item.querySelector('.faq-content')?.textContent.toLowerCase() || '';
      const matches = summaryText.includes(query) || contentText.includes(query);

      if (matches) {
        item.classList.remove('is-hidden');
        visibleCount++;
        // Abre automaticamente se estiver buscando termo com 3 ou mais letras
        if (query.length >= 3) {
          item.setAttribute('open', '');
        }
      } else {
        item.classList.add('is-hidden');
      }
    });

    if (countFeedback) {
      if (query === '') {
        countFeedback.textContent = `Exibindo todas as ${faqItems.length} perguntas mais frequentes.`;
      } else {
        countFeedback.textContent = `${visibleCount} pergunta(s) encontrada(s) para "${query}".`;
      }
    }

    if (noResultsBox) {
      noResultsBox.style.display = visibleCount === 0 ? 'flex' : 'none';
    }
  }

  searchInput?.addEventListener('input', applyFilter);

  // Botão Limpar Busca
  btnClearSearch?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    applyFilter();
    showToast('Filtro de busca limpo.');
  });

  // Botão Expandir Todas
  btnExpandAll?.addEventListener('click', () => {
    faqItems.forEach((item) => {
      if (!item.classList.contains('is-hidden')) {
        item.setAttribute('open', '');
      }
    });
    showToast('Todas as perguntas foram expandidas.');
  });

  // Botão Recolher Todas
  btnCollapseAll?.addEventListener('click', () => {
    faqItems.forEach((item) => {
      item.removeAttribute('open');
    });
    showToast('Todas as perguntas foram recolhidas.');
  });
}

/* --------------------------------------------------------------------------
   MÓDULO 4: GESTÃO DE CLIPBOARD E TOAST FLUTUANTE
   -------------------------------------------------------------------------- */
function initClipboardHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      const textToCopy = targetEl ? targetEl.textContent.trim() : btn.getAttribute('data-copy-text');

      if (textToCopy) {
        copyToClipboard(textToCopy, `E-mail copiado: ${textToCopy}`, btn);
      }
    });
  });
}

function copyToClipboard(text, successMessage = 'Copiado com sucesso!', triggerButton = null) {
  const onDone = () => {
    showToast(successMessage);
    if (triggerButton) {
      flashButtonSuccess(triggerButton);
    }
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onDone).catch(() => {
      fallbackCopy(text, successMessage, triggerButton);
    });
  } else {
    fallbackCopy(text, successMessage, triggerButton);
  }
}

function fallbackCopy(text, successMessage, triggerButton) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
    if (triggerButton) {
      flashButtonSuccess(triggerButton);
    }
  } catch (err) {
    console.error('Falha ao copiar:', err);
    showToast('Não foi possível copiar automaticamente.');
  }
  document.body.removeChild(textArea);
}

function flashButtonSuccess(button) {
  const originalHtml = button.innerHTML;
  button.classList.add('is-copied');
  button.innerHTML = `
    <span class="material-symbols-outlined" aria-hidden="true">check</span>
    <span>Copiado!</span>
  `;

  setTimeout(() => {
    button.classList.remove('is-copied');
    button.innerHTML = originalHtml;
  }, 1800);
}

let toastTimeout = null;
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
      <span id="toast-text">${message}</span>
    `;
    document.body.appendChild(toast);
  } else {
    const textSpan = document.getElementById('toast-text');
    if (textSpan) textSpan.textContent = message;
  }

  // Anima entrada
  requestAnimationFrame(() => {
    toast.classList.add('is-visible');
  });

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3200);
}

