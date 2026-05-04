(function () {
  const data = window.DIVULGAV_DATA;

  /* ─── Utilities ─────────────────────────────────────────────── */
  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  /* ─── Services catalog ──────────────────────────────────────── */
  const serviceElements = {
    summaryPanel: document.getElementById("servicesSummary"),
    cardsGrid: document.getElementById("servicesCardsGrid"),
    detailPanel: document.getElementById("servicesDetailPanel"),
    resultsInfo: document.getElementById("servicesResultsInfo")
  };

  const servicesState = {
    selectedId: data.services[0] ? data.services[0].id : null
  };

  function renderServicesSummary() {
    serviceElements.summaryPanel.innerHTML = `
      <div class="services-summary-head">
        <p class="services-summary-note">Dra. Inmaculada Berlanga · Dr. Javier Cantón — Universidad Internacional de La Rioja · UNIR TV</p>
      </div>
      <div class="services-summary-grid">
        ${data.services.map((s) => `
          <button class="service-summary-chip" data-service-id="${s.id}">
            <span class="service-chip-num">${escapeHtml(s.number)}</span>
            <span class="service-chip-name">${escapeHtml(s.name)}</span>
            <span class="service-chip-price">${escapeHtml(s.clientPrice)}</span>
          </button>
        `).join("")}
      </div>
      <p class="services-summary-legal">El acceso al servicio se canaliza a través de la Oficina de Transferencia de Conocimiento (OTC) de UNIR. Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto.</p>
    `;

    serviceElements.summaryPanel.querySelectorAll(".service-summary-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        servicesState.selectedId = chip.dataset.serviceId;
        renderServicesCards();
        renderServicesDetail();
        document.getElementById("servicesCardsGrid").scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  function renderServicesCards() {
    serviceElements.resultsInfo.textContent = `${data.services.length} servicios disponibles.`;

    serviceElements.cardsGrid.innerHTML = data.services
      .map((s, index) => `
        <article class="format-card service-card ${s.id === servicesState.selectedId ? "active" : ""}" data-service-id="${s.id}" style="animation-delay:${index * 35}ms">
          <div class="service-card-header">
            <span class="service-num-badge">${escapeHtml(s.number)}</span>
            <span class="card-topline">${s.tags.map((t) => escapeHtml(t)).join(" · ")}</span>
          </div>
          <h3>${escapeHtml(s.name)}</h3>
          <p class="card-desc">${escapeHtml(s.subtitle)}</p>
          <div class="card-metrics">
            <span class="pill pill-price">${escapeHtml(s.clientPrice)}</span>
            <span class="pill">${escapeHtml(s.trl)}</span>
            <span class="pill pill-viability">Viabilidad: ${escapeHtml(s.viability)}</span>
          </div>
        </article>
      `)
      .join("");

    serviceElements.cardsGrid.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("click", () => {
        servicesState.selectedId = card.dataset.serviceId;
        renderServicesCards();
        renderServicesDetail();
      });
    });
  }

  function renderServicesDetail() {
    const selected = data.services.find((s) => s.id === servicesState.selectedId);
    if (!selected) return;

    serviceElements.detailPanel.innerHTML = `
      <div class="detail-head">
        <div>
          <span class="service-detail-num">${escapeHtml(selected.number)}</span>
          <h3 style="margin-top:6px">${escapeHtml(selected.name)}</h3>
          <span class="detail-tag">${escapeHtml(selected.subtitle)}</span>
        </div>
      </div>

      <div class="service-tags-row">
        ${selected.tags.map((t) => `<span class="service-tag">${escapeHtml(t)}</span>`).join("")}
        <span class="service-tag service-tag-trl">${escapeHtml(selected.trl)}</span>
        <span class="service-tag service-tag-viability">Viabilidad: ${escapeHtml(selected.viability)}</span>
      </div>

      <p class="detail-definition">${escapeHtml(selected.description)}</p>

      <div class="detail-grid">
        <section class="detail-block">
          <h4>Qué incluye</h4>
          <ul>${selected.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>

        <section class="detail-block service-pricing-block">
          <h4>Precios</h4>
          <div class="service-price-row">
            <div class="service-price-cell">
              <p class="service-price-label">Coste estimado de producción</p>
              <p class="service-price-value">${escapeHtml(selected.costEstimate)}</p>
              <p class="service-price-detail">${escapeHtml(selected.costDetail)}</p>
            </div>
            <div class="service-price-cell service-price-cell--client">
              <p class="service-price-label">Precio orientativo al cliente</p>
              <p class="service-price-value">${escapeHtml(selected.clientPrice)}</p>
              ${selected.clientPriceDetail ? `<p class="service-price-detail">${escapeHtml(selected.clientPriceDetail)}</p>` : ""}
            </div>
          </div>
          <p class="service-price-note">${escapeHtml(selected.priceNote)}</p>
        </section>
      </div>
    `;
  }

  /* ─── Diagnostic questionnaire ──────────────────────────────── */

  const QUESTIONS = [
    {
      id: "organizacion",
      label: "Tu organización",
      question: "¿Qué tipo de organización describes?",
      icon: "bi-building",
      options: [
        { value: "universidad-investigacion", label: "Universidad o centro de investigación", icon: "🎓" },
        { value: "edtech-empresa",            label: "Empresa EdTech o startup tecnológica", icon: "💡" },
        { value: "fundacion-museo",           label: "Fundación, museo o institución cultural", icon: "🏛️" },
        { value: "medio-divulgacion",         label: "Medio de comunicación científica", icon: "📡" },
        { value: "otro",                      label: "Otro tipo de organización", icon: "🌐" }
      ]
    },
    {
      id: "objetivo",
      label: "Tu objetivo",
      question: "¿Cuál es tu objetivo principal de comunicación científica?",
      icon: "bi-bullseye",
      options: [
        { value: "divulgar-resultados", label: "Divulgar resultados de investigación al gran público", icon: "📢" },
        { value: "formar-capacitar",    label: "Formar o capacitar equipos y audiencias", icon: "📚" },
        { value: "mejorar-imagen",      label: "Mejorar imagen institucional y captación", icon: "⭐" },
        { value: "cubrir-evento",       label: "Cubrir un congreso, jornada o evento científico", icon: "🎤" },
        { value: "crear-audiencia",     label: "Crear una audiencia fiel alrededor de mi institución", icon: "👥" }
      ]
    },
    {
      id: "audiencia",
      label: "Tu audiencia",
      question: "¿A quién va dirigido principalmente tu contenido?",
      icon: "bi-people",
      options: [
        { value: "comunidad-cientifica", label: "Comunidad científica y académica", icon: "🔬" },
        { value: "publico-general",      label: "Público general adulto", icon: "🌍" },
        { value: "jovenes",              label: "Jóvenes y estudiantes", icon: "🧑‍🎓" },
        { value: "profesionales",        label: "Profesionales e industria", icon: "💼" },
        { value: "instituciones",        label: "Medios de comunicación e instituciones", icon: "📰" }
      ]
    },
    {
      id: "presupuesto",
      label: "Tu presupuesto",
      question: "¿Cuál es tu presupuesto orientativo para el proyecto?",
      icon: "bi-cash-coin",
      options: [
        { value: "bajo",        label: "Hasta 2.000 €", icon: "💰" },
        { value: "medio",       label: "Entre 2.000 y 8.000 €", icon: "💰💰" },
        { value: "alto",        label: "Entre 8.000 y 20.000 €", icon: "💰💰💰" },
        { value: "premium",     label: "Más de 20.000 €", icon: "💎" },
        { value: "desconocido", label: "Aún no lo tengo definido", icon: "❓" }
      ]
    },
    {
      id: "plazo",
      label: "Tu plazo",
      question: "¿En qué plazo necesitas los primeros resultados?",
      icon: "bi-stopwatch",
      options: [
        { value: "urgente", label: "Menos de 2 semanas (urgente)", icon: "⚡" },
        { value: "corto",   label: "1 a 2 meses", icon: "📅" },
        { value: "medio",   label: "3 a 6 meses", icon: "🗓️" },
        { value: "largo",   label: "Más de 6 meses", icon: "🔭" }
      ]
    },
    {
      id: "equipo",
      label: "Tu equipo",
      question: "¿Dispones de equipo interno de comunicación audiovisual?",
      icon: "bi-person-workspace",
      options: [
        { value: "ninguno",       label: "No, empezamos desde cero", icon: "🆕" },
        { value: "basico",        label: "Tenemos alguna persona de comunicación", icon: "🙋" },
        { value: "especializado", label: "Sí, equipo técnico especializado", icon: "🛠️" }
      ]
    },
    {
      id: "resultado",
      label: "Tu resultado",
      question: "¿Qué tipo de resultado buscas?",
      icon: "bi-box-seam",
      options: [
        { value: "piezas-sueltas",          label: "Piezas individuales (video, podcast, infografía...)", icon: "🎬" },
        { value: "serie-campana",           label: "Una serie o campaña continuada", icon: "📺" },
        { value: "ecosistema-multiplataforma", label: "Un ecosistema multiplataforma (web + RRSS + podcast)", icon: "🌐" },
        { value: "experiencia-inmersiva",   label: "Una experiencia inmersiva o interactiva (VR, gamificación)", icon: "🥽" },
        { value: "orientacion",             label: "Primero necesito orientación estratégica", icon: "🧭" }
      ]
    }
  ];

  /* Scoring: answer key → { serviceId: points } */
  const SCORING = {
    /* Organización */
    "organizacion:universidad-investigacion": { "video-abstract": 3, "auditoria": 1, "eventos": 1, "podcast": 1, "visualizacion": 1 },
    "organizacion:edtech-empresa":            { "video-ia": 2, "gamificado": 2, "transmedia": 1, "taller": 1 },
    "organizacion:fundacion-museo":           { "gamificado": 2, "documental": 2, "xr": 1, "eventos": 1 },
    "organizacion:medio-divulgacion":         { "podcast": 2, "transmedia": 2, "video-ia": 1 },
    "organizacion:otro":                      { "auditoria": 2, "taller": 1 },

    /* Objetivo */
    "objetivo:divulgar-resultados": { "video-abstract": 3, "podcast": 2, "video-ia": 2, "visualizacion": 1 },
    "objetivo:formar-capacitar":    { "manual": 3, "taller": 3, "gamificado": 2, "video-ia": 1 },
    "objetivo:mejorar-imagen":      { "auditoria": 3, "transmedia": 2, "podcast": 1, "video-ia": 1 },
    "objetivo:cubrir-evento":       { "eventos": 4, "auditoria": 1 },
    "objetivo:crear-audiencia":     { "transmedia": 3, "podcast": 2, "video-ia": 1, "video-abstract": 1 },

    /* Audiencia */
    "audiencia:comunidad-cientifica": { "video-abstract": 3, "visualizacion": 2, "podcast": 1 },
    "audiencia:publico-general":      { "podcast": 2, "video-ia": 2, "transmedia": 1, "video-abstract": 1 },
    "audiencia:jovenes":              { "gamificado": 3, "video-ia": 2, "transmedia": 1, "xr": 1 },
    "audiencia:profesionales":        { "visualizacion": 2, "documental": 2, "taller": 1, "auditoria": 1 },
    "audiencia:instituciones":        { "auditoria": 2, "eventos": 2, "transmedia": 1, "manual": 1 },

    /* Presupuesto */
    "presupuesto:bajo":        { "video-abstract": 3, "auditoria": 2, "podcast": 1, "manual": 1, "video-ia": 1 },
    "presupuesto:medio":       { "taller": 2, "podcast": 2, "video-ia": 2, "visualizacion": 1, "video-abstract": 1 },
    "presupuesto:alto":        { "transmedia": 2, "gamificado": 2, "documental": 2, "eventos": 2 },
    "presupuesto:premium":     { "xr": 3, "documental": 2, "gamificado": 2, "eventos": 2, "transmedia": 1 },
    "presupuesto:desconocido": { "auditoria": 3, "taller": 2 },

    /* Plazo */
    "plazo:urgente": { "video-abstract": 3, "auditoria": 2, "video-ia": 1 },
    "plazo:corto":   { "podcast": 2, "video-ia": 2, "taller": 2, "visualizacion": 1, "video-abstract": 1 },
    "plazo:medio":   { "transmedia": 2, "documental": 2, "gamificado": 2, "eventos": 2, "podcast": 1 },
    "plazo:largo":   { "xr": 3, "documental": 2, "transmedia": 2, "gamificado": 1 },

    /* Equipo */
    "equipo:ninguno":       { "auditoria": 3, "taller": 2, "video-abstract": 1 },
    "equipo:basico":        { "manual": 3, "podcast": 2, "video-ia": 2, "video-abstract": 1 },
    "equipo:especializado": { "transmedia": 2, "gamificado": 2, "documental": 2, "xr": 2, "eventos": 1 },

    /* Resultado */
    "resultado:piezas-sueltas":             { "video-abstract": 3, "video-ia": 2, "podcast": 1, "visualizacion": 1 },
    "resultado:serie-campana":              { "podcast": 3, "video-ia": 2, "transmedia": 2, "video-abstract": 1 },
    "resultado:ecosistema-multiplataforma": { "transmedia": 4, "eventos": 2, "podcast": 1 },
    "resultado:experiencia-inmersiva":      { "xr": 4, "gamificado": 3, "documental": 2 },
    "resultado:orientacion":                { "auditoria": 4, "taller": 3 }
  };

  /* ─── Questionnaire state ───────────────────────────────────── */
  const qState = {
    currentStep: 0,
    answers: {}   /* { questionId: optionValue } */
  };

  function computeScores() {
    const scores = {};
    data.services.forEach((s) => { scores[s.id] = 0; });

    Object.entries(qState.answers).forEach(([qId, value]) => {
      const key = `${qId}:${value}`;
      const weights = SCORING[key] || {};
      Object.entries(weights).forEach(([serviceId, pts]) => {
        if (scores[serviceId] !== undefined) scores[serviceId] += pts;
      });
    });

    return scores;
  }

  function topServices(n = 3) {
    const scores = computeScores();
    return data.services
      .map((s) => ({ service: s, score: scores[s.id] || 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, n);
  }

  /* ─── Questionnaire rendering ───────────────────────────────── */
  function renderQuestionnaire() {
    const wrap = document.getElementById("diagnostico-wrap");
    if (!wrap) return;

    const totalSteps = QUESTIONS.length;
    const isFinished = qState.currentStep >= totalSteps;

    if (isFinished) {
      renderResults(wrap);
      return;
    }

    const q = QUESTIONS[qState.currentStep];
    const progress = Math.round((qState.currentStep / totalSteps) * 100);

    wrap.innerHTML = `
      <div class="quiz-progress-bar" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
        <div class="quiz-progress-fill" style="width:${progress}%"></div>
      </div>
      <p class="quiz-step-label">Paso ${qState.currentStep + 1} de ${totalSteps} · ${escapeHtml(q.label)}</p>

      <div class="quiz-question-wrap" id="quiz-question">
        <i class="bi ${escapeHtml(q.icon)} quiz-q-icon"></i>
        <h3 class="quiz-question-text">${escapeHtml(q.question)}</h3>
        <div class="quiz-options" role="radiogroup" aria-label="${escapeHtml(q.question)}">
          ${q.options.map((opt) => `
            <button
              class="quiz-option ${qState.answers[q.id] === opt.value ? "selected" : ""}"
              data-question="${escapeHtml(q.id)}"
              data-value="${escapeHtml(opt.value)}"
              role="radio"
              aria-checked="${qState.answers[q.id] === opt.value ? "true" : "false"}"
            >
              <span class="quiz-option-icon">${opt.icon}</span>
              <span class="quiz-option-label">${escapeHtml(opt.label)}</span>
            </button>
          `).join("")}
        </div>

        <div class="quiz-nav">
          ${qState.currentStep > 0 ? `<button class="btn btn-ghost" id="quiz-prev">← Anterior</button>` : `<span></span>`}
          <button class="btn btn-primary" id="quiz-next" ${qState.answers[q.id] ? "" : "disabled"}>
            ${qState.currentStep < totalSteps - 1 ? "Siguiente →" : "Ver mis recomendaciones →"}
          </button>
        </div>
      </div>
    `;

    /* Option click */
    wrap.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qId = btn.dataset.question;
        const val = btn.dataset.value;
        qState.answers[qId] = val;

        wrap.querySelectorAll(".quiz-option").forEach((b) => {
          b.classList.toggle("selected", b.dataset.value === val);
          b.setAttribute("aria-checked", b.dataset.value === val ? "true" : "false");
        });

        const nextBtn = wrap.querySelector("#quiz-next");
        if (nextBtn) nextBtn.removeAttribute("disabled");
      });
    });

    /* Navigation */
    const nextBtn = wrap.querySelector("#quiz-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (!qState.answers[q.id]) return;
        qState.currentStep += 1;
        renderQuestionnaire();
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    const prevBtn = wrap.querySelector("#quiz-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        qState.currentStep = Math.max(0, qState.currentStep - 1);
        renderQuestionnaire();
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function renderResults(wrap) {
    const recommendations = topServices(3);
    const maxScore = recommendations[0]?.score || 1;

    wrap.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-results-header">
          <span class="quiz-results-icon">👨‍🍳</span>
          <div>
            <h3 class="quiz-results-title">Las sugerencias del chef</h3>
            <p class="quiz-results-subtitle">Basado en tus respuestas, estos son los servicios DivulgAV más adecuados para ti:</p>
          </div>
        </div>

        <div class="quiz-recommendations">
          ${recommendations.map((rec, i) => {
            const s = rec.service;
            const pct = maxScore > 0 ? Math.round((rec.score / maxScore) * 100) : 0;
            const medal = ["🥇", "🥈", "🥉"][i] || "";
            return `
              <article class="quiz-rec-card ${i === 0 ? "quiz-rec-card--top" : ""}">
                <div class="quiz-rec-header">
                  <span class="quiz-rec-medal">${medal}</span>
                  <span class="service-num-badge">${escapeHtml(s.number)}</span>
                  <div class="quiz-rec-title-wrap">
                    <h4>${escapeHtml(s.name)}</h4>
                    <p class="quiz-rec-subtitle">${escapeHtml(s.subtitle)}</p>
                  </div>
                  <span class="pill pill-price quiz-rec-price">${escapeHtml(s.clientPrice)}</span>
                </div>
                <div class="quiz-rec-match">
                  <div class="quiz-rec-bar-wrap">
                    <div class="quiz-rec-bar" style="width:${pct}%"></div>
                  </div>
                  <span class="quiz-rec-pct">${pct}% compatibilidad</span>
                </div>
                <p class="quiz-rec-desc">${escapeHtml(s.description.slice(0, 200))}…</p>
                <div class="quiz-rec-tags">
                  ${s.tags.map((t) => `<span class="service-tag">${escapeHtml(t)}</span>`).join("")}
                  <span class="service-tag service-tag-trl">${escapeHtml(s.trl)}</span>
                </div>
                <button class="btn btn-primary quiz-rec-cta" data-service-id="${escapeHtml(s.id)}">
                  Ver ficha completa →
                </button>
              </article>
            `;
          }).join("")}
        </div>

        <div class="quiz-restart-wrap">
          <p class="quiz-restart-note">¿Quieres ajustar tus respuestas?</p>
          <button class="btn btn-ghost" id="quiz-restart">Reiniciar diagnóstico</button>
        </div>
      </div>
    `;

    /* Jump to service card on click */
    wrap.querySelectorAll(".quiz-rec-cta").forEach((btn) => {
      btn.addEventListener("click", () => {
        const serviceId = btn.dataset.serviceId;
        servicesState.selectedId = serviceId;
        renderServicesCards();
        renderServicesDetail();
        document.getElementById("servicios").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* Restart */
    const restartBtn = wrap.querySelector("#quiz-restart");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        qState.currentStep = 0;
        qState.answers = {};
        renderQuestionnaire();
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* ─── Init ──────────────────────────────────────────────────── */
  renderServicesSummary();
  renderServicesCards();
  renderServicesDetail();
  renderQuestionnaire();
})();
