(function () {
  const data = window.DIVULGAV_DATA;

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

  const formatsById = Object.fromEntries(data.formats.map((item) => [item.id, item]));

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
    successCasesGrid: document.getElementById("successCasesGrid"),
    cardsGrid: document.getElementById("cardsGrid"),
    detailPanel: document.getElementById("detailPanel"),
    matrixTableWrap: document.getElementById("matrixTableWrap"),
    correlationWrap: document.getElementById("correlationWrap"),
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

  function renderSuccessCases() {
    if (!elements.successCasesGrid) return;
    if (!Array.isArray(data.successCases) || !data.successCases.length) {
      elements.successCasesGrid.innerHTML = `<article class="empty-state">Aún no hay casos documentados.</article>`;
      return;
    }

    function relatedFormatsMarkup(caseItem) {
      const related = Array.isArray(caseItem.relatedFormats) ? caseItem.relatedFormats : [];
      if (!related.length) return "";
      const links = related
        .map((formatId) => {
          const linked = formatsById[formatId];
          if (!linked) return "";
          return `<a class="format-link-chip" href="format.html?id=${encodeURIComponent(linked.id)}">${escapeHtml(linked.name)}</a>`;
        })
        .filter(Boolean)
        .join("");
      if (!links) return "";
      return `
        <section class="detail-block">
          <h4>Formatos relacionados</h4>
          <div class="format-link-row">${links}</div>
        </section>
      `;
    }

    elements.successCasesGrid.innerHTML = data.successCases
      .map(
        (item) => `
          <article class="panel success-case-card">
            <p class="eyebrow">${escapeHtml(item.organization)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="case-format"><strong>Formato aplicado:</strong> ${escapeHtml(item.format)}</p>
            <div class="detail-grid">
              <section class="detail-block">
                <h4>Reto</h4>
                <p>${escapeHtml(item.challenge)}</p>
              </section>
              <section class="detail-block">
                <h4>Implementación</h4>
                <p>${escapeHtml(item.approach)}</p>
              </section>
              <section class="detail-block">
                <h4>Resultado</h4>
                <p>${escapeHtml(item.outcome)}</p>
              </section>
              <section class="detail-block">
                <h4>Lecciones transferibles</h4>
                ${listMarkup(item.transferableLearnings || [])}
              </section>
              ${relatedFormatsMarkup(item)}
              <section class="detail-block">
                <h4>Fuentes</h4>
                <ul>
                  ${(item.sources || [])
                    .map(
                      (source) => `
                        <li>
                          <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              </section>
            </div>
          </article>
        `
      )
      .join("");
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
      elements.detailPanel.innerHTML = `<p class="empty-state">Prueba otra combinación para descubrir más formatos.</p>`;
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
          <span class="card-topline">
            <i class="bi bi-diagram-3"></i>
            ${escapeHtml(categoryLabels[item.category] || item.category)}
          </span>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="card-desc">${escapeHtml(item.objective)}</p>
          <div class="card-kpis">
            <span><i class="bi bi-cash-coin"></i> ${escapeHtml(item.costLabel)}</span>
            <span><i class="bi bi-stopwatch"></i> ${escapeHtml(item.timeLabel)}</span>
            <span><i class="bi bi-hand-index-thumb"></i> ${escapeHtml(levelText(item.interactivityLevel))}</span>
            <span><i class="bi bi-arrows-angle-expand"></i> ${escapeHtml(levelText(item.scalabilityLevel))}</span>
          </div>
          <div class="card-actions">
            <span class="pill">${escapeHtml(item.type)}</span>
            <a class="btn btn-primary card-btn" href="format.html?id=${encodeURIComponent(item.id)}">Ver más</a>
          </div>
        </article>
      `
      )
      .join("");

    elements.resultsInfo.textContent = `${filtered.length} formato(s) visibles de ${data.formats.length}.`;

    elements.cardsGrid.querySelectorAll(".format-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest(".card-btn")) return;
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
    const selected = filtered.find((item) => item.id === state.selectedId) || filtered[0];
    if (!selected) return;

    elements.detailPanel.innerHTML = `
      <div class="detail-head">
        <div>
          <h3>${escapeHtml(selected.name)}</h3>
          <span class="detail-tag">${escapeHtml(selected.type)}</span>
        </div>
      </div>
      <p class="detail-definition">${escapeHtml(selected.objective)}</p>
      <section class="detail-block">
        <h4>Características básicas</h4>
        <ul>
          <li><i class="bi bi-diagram-3"></i> <strong>Categoría:</strong> ${escapeHtml(categoryLabels[selected.category] || selected.category)}</li>
          <li><i class="bi bi-cash-coin"></i> <strong>Coste:</strong> ${escapeHtml(selected.costLabel)}</li>
          <li><i class="bi bi-stopwatch"></i> <strong>Tiempo:</strong> ${escapeHtml(selected.timeLabel)}</li>
          <li><i class="bi bi-hand-index-thumb"></i> <strong>Interactividad:</strong> ${escapeHtml(levelText(selected.interactivityLevel))}</li>
          <li><i class="bi bi-arrows-angle-expand"></i> <strong>Escalabilidad:</strong> ${escapeHtml(levelText(selected.scalabilityLevel))}</li>
          <li><i class="bi bi-people"></i> <strong>Público:</strong> ${escapeHtml(selected.audience)}</li>
        </ul>
      </section>
      <section class="detail-block">
        <h4>Acción</h4>
        <p>Abre la ficha completa para ver requisitos, métricas, riesgos y ejemplos embebidos.</p>
        <p><a class="btn btn-primary card-btn" href="format.html?id=${encodeURIComponent(selected.id)}">Ver más</a></p>
      </section>
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

    renderCorrelation(rows);
  }

  function categoryColor(category) {
    const palette = {
      social: "#0b7a77",
      hibrido: "#d45f2c",
      transmedia: "#7b4ea3",
      interactivo: "#1d70b8",
      inmersivo: "#aa6f00",
      ia: "#5d48c6",
      ott: "#556370"
    };
    return palette[category] || "#4e5b66";
  }

  function scale(value, inMin, inMax, outMin, outMax) {
    if (inMax === inMin) return (outMin + outMax) / 2;
    return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
  }

  function renderCorrelation(rows) {
    if (!rows.length) {
      elements.correlationWrap.innerHTML = `<p class="empty-state">No hay datos para el gráfico.</p>`;
      return;
    }

    const width = 560;
    const height = 360;
    const margin = { top: 24, right: 20, bottom: 48, left: 54 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const minRadius = 6;
    const maxRadius = 18;

    const points = rows.map((item) => {
      const x = margin.left + scale(item.interactivityLevel, 1, 5, 0, plotWidth);
      const y = margin.top + scale(item.scalabilityLevel, 1, 5, plotHeight, 0);
      const radius = scale(item.costIndex, 1, 10, minRadius, maxRadius);
      return { item, x, y, radius, color: categoryColor(item.category) };
    });

    const legendEntries = [...new Set(rows.map((item) => item.category))]
      .map((category) => `
        <span class="legend-chip">
          <i style="background:${categoryColor(category)}"></i>${escapeHtml(categoryLabels[category] || category)}
        </span>
      `)
      .join("");

    const circles = points
      .map(
        ({ item, x, y, radius, color }) => `
          <g class="correlation-point"
             data-name="${encodeURIComponent(item.name)}"
             data-category="${encodeURIComponent(categoryLabels[item.category] || item.category)}"
             data-cost="${encodeURIComponent(item.costLabel)}"
             data-time="${encodeURIComponent(item.timeLabel)}"
             data-interactivity="${encodeURIComponent(levelText(item.interactivityLevel))}"
             data-scalability="${encodeURIComponent(levelText(item.scalabilityLevel))}">
            <a href="format.html?id=${encodeURIComponent(item.id)}">
              <circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${radius.toFixed(2)}" fill="${color}" fill-opacity="0.72" stroke="#ffffff" stroke-width="1.5"></circle>
              <text x="${(x + radius + 4).toFixed(2)}" y="${(y + 4).toFixed(2)}" class="point-label">${escapeHtml(item.name)}</text>
            </a>
            <title>${escapeHtml(item.name)} | Interactividad: ${item.interactivityLevel}, Escalabilidad: ${item.scalabilityLevel}, Coste: ${item.costIndex}</title>
          </g>
        `
      )
      .join("");

    elements.correlationWrap.innerHTML = `
      <h3>Correlación: interactividad vs escalabilidad</h3>
      <p class="results-info">Color = categoría. Tamaño del punto = coste relativo (índice 1-10).</p>
      <svg class="correlation-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Gráfico de correlación">
        <rect x="${margin.left}" y="${margin.top}" width="${plotWidth}" height="${plotHeight}" fill="#fff" stroke="#d9cdb9"></rect>
        <line x1="${margin.left}" y1="${margin.top + plotHeight}" x2="${margin.left + plotWidth}" y2="${margin.top + plotHeight}" stroke="#7f7362"></line>
        <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + plotHeight}" stroke="#7f7362"></line>
        ${[1, 2, 3, 4, 5]
          .map((tick) => {
            const x = margin.left + scale(tick, 1, 5, 0, plotWidth);
            const y = margin.top + scale(tick, 1, 5, plotHeight, 0);
            return `
              <line x1="${x}" y1="${margin.top + plotHeight}" x2="${x}" y2="${margin.top + plotHeight + 6}" stroke="#7f7362"></line>
              <text x="${x}" y="${margin.top + plotHeight + 20}" text-anchor="middle" class="axis-label">${tick}</text>
              <line x1="${margin.left - 6}" y1="${y}" x2="${margin.left}" y2="${y}" stroke="#7f7362"></line>
              <text x="${margin.left - 14}" y="${y + 4}" text-anchor="end" class="axis-label">${tick}</text>
            `;
          })
          .join("")}
        ${circles}
        <text x="${margin.left + plotWidth / 2}" y="${height - 12}" text-anchor="middle" class="axis-title">Interactividad</text>
        <text x="16" y="${margin.top + plotHeight / 2}" transform="rotate(-90 16 ${margin.top + plotHeight / 2})" text-anchor="middle" class="axis-title">Escalabilidad</text>
      </svg>
      <div id="correlationTooltip" class="correlation-tooltip" role="status" aria-live="polite"></div>
      <div class="bar-legend">${legendEntries}</div>
    `;

    const svg = elements.correlationWrap.querySelector(".correlation-svg");
    const tooltip = elements.correlationWrap.querySelector("#correlationTooltip");
    if (!svg || !tooltip) return;

    const setTooltip = (event, point) => {
      const rect = elements.correlationWrap.getBoundingClientRect();
      const left = event.clientX - rect.left + 14;
      const top = event.clientY - rect.top + 14;
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
      tooltip.innerHTML = `
        <strong>${escapeHtml(decodeURIComponent(point.dataset.name || ""))}</strong>
        <p><i class="bi bi-diagram-3"></i> ${escapeHtml(decodeURIComponent(point.dataset.category || ""))}</p>
        <p><i class="bi bi-cash-coin"></i> ${escapeHtml(decodeURIComponent(point.dataset.cost || ""))}</p>
        <p><i class="bi bi-stopwatch"></i> ${escapeHtml(decodeURIComponent(point.dataset.time || ""))}</p>
        <p><i class="bi bi-hand-index-thumb"></i> ${escapeHtml(decodeURIComponent(point.dataset.interactivity || ""))}</p>
        <p><i class="bi bi-arrows-angle-expand"></i> ${escapeHtml(decodeURIComponent(point.dataset.scalability || ""))}</p>
      `;
      tooltip.classList.add("visible");
    };

    svg.querySelectorAll(".correlation-point").forEach((point) => {
      point.addEventListener("mousemove", (event) => setTooltip(event, point));
      point.addEventListener("mouseenter", (event) => setTooltip(event, point));
      point.addEventListener("mouseleave", () => tooltip.classList.remove("visible"));
      point.addEventListener("focusin", (event) => setTooltip(event, point));
      point.addEventListener("focusout", () => tooltip.classList.remove("visible"));
    });
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
  renderSuccessCases();
  renderCategoryFilter();
  updateKPIs();
  setupEvents();
  render();
  renderServicesSummary();
  renderServicesCards();
  renderServicesDetail();
})();
