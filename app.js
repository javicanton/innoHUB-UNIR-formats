(function () {
  const data = window.INNOHUB_DATA;

  const state = {
    query: "",
    category: "all",
    interactivity: "all",
    scalability: "all",
    selectedId: data.formats[0] ? data.formats[0].id : null
  };

  const categoryLabels = {
    social: "Social",
    hibrido: "Híbrido",
    transmedia: "Transmedia",
    interactivo: "Interactivo",
    inmersivo: "Inmersivo",
    ia: "IA generativa",
    ott: "OTT"
  };

  const elements = {
    projectTitle: document.getElementById("projectTitle"),
    projectSubtitle: document.getElementById("projectSubtitle"),
    projectSummary: document.getElementById("projectSummary"),
    projectStatus: document.getElementById("projectStatus"),
    pillarsList: document.getElementById("pillarsList"),
    taxonomyList: document.getElementById("taxonomyList"),
    decisionGrid: document.getElementById("decisionGrid"),
    governanceList: document.getElementById("governanceList"),
    templateList: document.getElementById("templateList"),
    cardsGrid: document.getElementById("cardsGrid"),
    detailPanel: document.getElementById("detailPanel"),
    matrixTableWrap: document.getElementById("matrixTableWrap"),
    chartWrap: document.getElementById("chartWrap"),
    searchInput: document.getElementById("searchInput"),
    categoryFilter: document.getElementById("categoryFilter"),
    interactivityFilter: document.getElementById("interactivityFilter"),
    scalabilityFilter: document.getElementById("scalabilityFilter"),
    resetFilters: document.getElementById("resetFilters"),
    resultsInfo: document.getElementById("resultsInfo"),
    kpiFormats: document.getElementById("kpiFormats"),
    kpiCategories: document.getElementById("kpiCategories"),
    kpiHighInteractivity: document.getElementById("kpiHighInteractivity"),
    kpiFast: document.getElementById("kpiFast")
  };

  function levelText(level) {
    if (level <= 1) return "Muy baja";
    if (level === 2) return "Baja";
    if (level === 3) return "Media";
    if (level === 4) return "Alta";
    return "Muy alta";
  }

  function levelBand(level) {
    if (level <= 2) return "low";
    if (level === 3) return "mid";
    return "high";
  }

  function uniqueCategories() {
    return [...new Set(data.formats.map((item) => item.category))];
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function renderProject() {
    elements.projectTitle.textContent = data.project.title;
    elements.projectSubtitle.textContent = data.project.subtitle;
    elements.projectSummary.textContent = data.project.summary;
    elements.projectStatus.textContent = data.project.status;
  }

  function renderFramework() {
    elements.pillarsList.innerHTML = data.pillars.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    elements.taxonomyList.innerHTML = data.taxonomy.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    elements.decisionGrid.innerHTML = data.decisionTree
      .map(
        (item) => `
        <article class="decision-card">
          <h4>${escapeHtml(item.objective)}</h4>
          <p>${escapeHtml(item.recommendation)}</p>
        </article>
      `
      )
      .join("");

    elements.governanceList.innerHTML = data.governance.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    elements.templateList.innerHTML = data.templateFields.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function renderCategoryFilter() {
    const options = uniqueCategories()
      .map((category) => `<option value="${category}">${escapeHtml(categoryLabels[category] || category)}</option>`)
      .join("");
    elements.categoryFilter.insertAdjacentHTML("beforeend", options);
  }

  function formatMatches(item) {
    if (state.category !== "all" && item.category !== state.category) return false;
    if (state.interactivity !== "all" && levelBand(item.interactivityLevel) !== state.interactivity) return false;
    if (state.scalability !== "all" && levelBand(item.scalabilityLevel) !== state.scalability) return false;

    if (!state.query) return true;
    const examplesText = item.examples
      .map((ex) => (typeof ex === "string" ? ex : ex.name))
      .join(" ");
    const haystack = [
      item.name,
      item.type,
      item.objective,
      item.definition,
      examplesText,
      item.metrics.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(state.query);
  }

  function getFilteredFormats() {
    return data.formats.filter((item) => formatMatches(item));
  }

  function updateKPIs() {
    const categories = uniqueCategories().length;
    const highInteractivity = data.formats.filter((item) => item.interactivityLevel >= 4).length;
    const fastPrototyping = data.formats.filter((item) => item.timeIndex <= 3).length;

    elements.kpiFormats.textContent = String(data.formats.length);
    elements.kpiCategories.textContent = String(categories);
    elements.kpiHighInteractivity.textContent = String(highInteractivity);
    elements.kpiFast.textContent = String(fastPrototyping);
  }

  function renderCards(filtered) {
    if (!filtered.length) {
      elements.cardsGrid.innerHTML = `<article class="empty-state">No hay formatos con esos filtros. Ajusta búsqueda o limpia filtros.</article>`;
      elements.detailPanel.innerHTML = `<p class="empty-state">Selecciona un formato para ver su ficha.</p>`;
      elements.resultsInfo.textContent = "0 resultados.";
      return;
    }

    if (!filtered.find((item) => item.id === state.selectedId)) {
      state.selectedId = filtered[0].id;
    }

    elements.cardsGrid.innerHTML = filtered
      .map(
        (item, index) => `
        <article class="format-card ${item.id === state.selectedId ? "active" : ""}" data-format-id="${item.id}" style="animation-delay:${index * 35}ms">
          <span class="card-topline">${escapeHtml(categoryLabels[item.category] || item.category)}</span>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="card-desc">${escapeHtml(item.objective)}</p>
          <div class="card-metrics">
            <span class="pill">Coste: ${escapeHtml(item.costLabel)}</span>
            <span class="pill">Tiempo: ${escapeHtml(item.timeLabel)}</span>
            <span class="pill">Interactividad: ${escapeHtml(levelText(item.interactivityLevel))}</span>
          </div>
        </article>
      `
      )
      .join("");

    elements.resultsInfo.textContent = `${filtered.length} formato(s) visibles de ${data.formats.length}.`;

    elements.cardsGrid.querySelectorAll(".format-card").forEach((card) => {
      card.addEventListener("click", () => {
        state.selectedId = card.dataset.formatId;
        render();
      });
    });
  }

  function listMarkup(items) {
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function examplesMarkup(examples) {
    return `<ul>${examples
      .map((ex) => {
        const name = typeof ex === "string" ? ex : ex.name;
        const url = typeof ex === "object" && ex.url;
        if (url) {
          return `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a></li>`;
        }
        return `<li>${escapeHtml(name)}</li>`;
      })
      .join("")}</ul>`;
  }

  function renderDetail(filtered) {
    const selected = filtered.find((item) => item.id === state.selectedId);
    if (!selected) return;

    elements.detailPanel.innerHTML = `
      <div class="detail-head">
        <div>
          <h3>${escapeHtml(selected.name)}</h3>
          <span class="detail-tag">${escapeHtml(selected.type)}</span>
        </div>
      </div>
      <p class="detail-definition">${escapeHtml(selected.definition)}</p>

      <div class="detail-grid">
        <section class="detail-block">
          <h4>Contexto de uso</h4>
          <p><strong>Publico:</strong> ${escapeHtml(selected.audience)}</p>
          <p><strong>Objetivo:</strong> ${escapeHtml(selected.objective)}</p>
          <p><strong>Producción:</strong> ${escapeHtml(selected.production)}</p>
          <p><strong>Coste:</strong> ${escapeHtml(selected.costLabel)} | <strong>Tiempo:</strong> ${escapeHtml(selected.timeLabel)}</p>
          <p><strong>Interactividad:</strong> ${escapeHtml(levelText(selected.interactivityLevel))} | <strong>Escalabilidad:</strong> ${escapeHtml(levelText(selected.scalabilityLevel))}</p>
        </section>

        <section class="detail-block">
          <h4>Requisitos técnicos</h4>
          ${listMarkup(selected.technical)}
        </section>

        <section class="detail-block">
          <h4>Ventajas</h4>
          ${listMarkup(selected.pros)}
        </section>

        <section class="detail-block">
          <h4>Riesgos</h4>
          ${listMarkup(selected.risks)}
        </section>

        <section class="detail-block">
          <h4>Métricas clave</h4>
          ${listMarkup(selected.metrics)}
        </section>

        <section class="detail-block">
          <h4>Ejemplos y referencias</h4>
          <p><strong>Ejemplos:</strong></p>
          ${examplesMarkup(selected.examples)}
          <p><strong>Base de evidencia:</strong></p>
          ${listMarkup(selected.references)}
        </section>
      </div>
    `;
  }

  function renderMatrix(filtered) {
    const rows = [...filtered].sort((a, b) => b.interactivityLevel - a.interactivityLevel || a.costIndex - b.costIndex);

    elements.matrixTableWrap.innerHTML = `
      <h3>Tabla comparativa (filtros activos)</h3>
      <table>
        <thead>
          <tr>
            <th>Formato</th>
            <th>Categoría</th>
            <th>Coste</th>
            <th>Tiempo</th>
            <th>Interactividad</th>
            <th>Escalabilidad</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item) => `
                <tr>
                  <td>${escapeHtml(item.name)}</td>
                  <td>${escapeHtml(categoryLabels[item.category] || item.category)}</td>
                  <td>${escapeHtml(item.costLabel)}</td>
                  <td>${escapeHtml(item.timeLabel)}</td>
                  <td>${escapeHtml(levelText(item.interactivityLevel))}</td>
                  <td>${escapeHtml(levelText(item.scalabilityLevel))}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;

    const compact = rows.slice(0, 8);
    elements.chartWrap.innerHTML = `
      <h3>Índice relativo coste/tiempo</h3>
      <p class="results-info">Escala 1-10 para priorizar roadmap de prototipado.</p>
      <div class="chart-stack">
        ${compact
          .map(
            (item) => `
              <div class="chart-row">
                <div class="chart-label">${escapeHtml(item.name)}</div>
                <div class="chart-bars">
                  <div class="bar-track">
                    <div class="bar-fill bar-cost" style="width:${item.costIndex * 10}%"></div>
                  </div>
                  <div class="bar-track">
                    <div class="bar-fill bar-time" style="width:${item.timeIndex * 10}%"></div>
                  </div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="bar-legend">
        <span class="legend-chip"><i style="background:linear-gradient(120deg,#ea8a41,#d45f2c)"></i>Coste relativo</span>
        <span class="legend-chip"><i style="background:linear-gradient(120deg,#1f9d98,#0b7a77)"></i>Tiempo relativo</span>
      </div>
    `;
  }

  function render() {
    const filtered = getFilteredFormats();
    renderCards(filtered);
    if (filtered.length) {
      renderDetail(filtered);
      renderMatrix(filtered);
    }
  }

  function setupEvents() {
    elements.searchInput.addEventListener("input", (event) => {
      state.query = event.target.value.trim().toLowerCase();
      render();
    });

    elements.categoryFilter.addEventListener("change", (event) => {
      state.category = event.target.value;
      render();
    });

    elements.interactivityFilter.addEventListener("change", (event) => {
      state.interactivity = event.target.value;
      render();
    });

    elements.scalabilityFilter.addEventListener("change", (event) => {
      state.scalability = event.target.value;
      render();
    });

    elements.resetFilters.addEventListener("click", () => {
      state.query = "";
      state.category = "all";
      state.interactivity = "all";
      state.scalability = "all";
      elements.searchInput.value = "";
      elements.categoryFilter.value = "all";
      elements.interactivityFilter.value = "all";
      elements.scalabilityFilter.value = "all";
      render();
    });
  }

  renderProject();
  renderFramework();
  renderCategoryFilter();
  updateKPIs();
  setupEvents();
  render();
})();
