(function () {
  const root = document.getElementById("formatDetailRoot");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = window.INNOHUB_DATA;

  const categoryLabels = {
    social: "Social",
    hibrido: "Híbrido",
    transmedia: "Transmedia",
    interactivo: "Interactivo",
    inmersivo: "Inmersivo",
    ia: "IA generativa",
    ott: "OTT"
  };

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function levelText(level) {
    if (level <= 1) return "Muy baja";
    if (level === 2) return "Baja";
    if (level === 3) return "Media";
    if (level === 4) return "Alta";
    return "Muy alta";
  }

  function listMarkup(items) {
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function isEmbeddableUrl(url) {
    return /instagram\.com|tiktok\.com|youtube\.com|youtu\.be/i.test(url);
  }

  function embedFromUrl(url, title) {
    if (/instagram\.com/i.test(url)) {
      return `<iframe src="${escapeHtml(url)}embed" title="${escapeHtml(title)}" loading="lazy" allowfullscreen></iframe>`;
    }
    if (/tiktok\.com/i.test(url)) {
      return `<iframe src="${escapeHtml(url)}" title="${escapeHtml(title)}" loading="lazy" allowfullscreen></iframe>`;
    }
    if (/youtube\.com|youtu\.be/i.test(url)) {
      let embedUrl = url;
      if (/youtu\.be/i.test(url)) {
        const shortId = url.split("/").pop();
        embedUrl = `https://www.youtube.com/embed/${shortId}`;
      } else if (url.includes("watch?v=")) {
        const videoId = new URL(url).searchParams.get("v");
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      return `<iframe src="${escapeHtml(embedUrl)}" title="${escapeHtml(title)}" loading="lazy" allowfullscreen></iframe>`;
    }
    return "";
  }

  function exampleMarkup(example) {
    if (typeof example === "string") {
      return `<li>${escapeHtml(example)}</li>`;
    }

    const name = example.name || "Ejemplo";
    const url = example.url || "";
    const preferEmbed = example.embed === true || isEmbeddableUrl(url);
    const embed = url && preferEmbed ? embedFromUrl(url, name) : "";

    if (!url) return `<li>${escapeHtml(name)}</li>`;

    return `
      <li class="example-item">
        <p><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a></p>
        ${embed ? `<div class="embed-wrap">${embed}</div>` : ""}
      </li>
    `;
  }

  if (!id) {
    root.innerHTML = `<p class="empty-state">No se ha indicado un formato. Vuelve al catálogo y selecciona uno.</p>`;
    return;
  }

  const format = data.formats.find((item) => item.id === id);
  if (!format) {
    root.innerHTML = `<p class="empty-state">Formato no encontrado. Puede que el enlace esté desactualizado.</p>`;
    return;
  }

  root.innerHTML = `
    <div class="detail-head">
      <div>
        <p class="eyebrow">${escapeHtml(categoryLabels[format.category] || format.category)}</p>
        <h1>${escapeHtml(format.name)}</h1>
        <span class="detail-tag">${escapeHtml(format.type)}</span>
      </div>
    </div>
    <p class="detail-definition">${escapeHtml(format.definition)}</p>

    <div class="detail-grid">
      <section class="detail-block">
        <h4>Resumen operativo</h4>
        <p><strong>Publico:</strong> ${escapeHtml(format.audience)}</p>
        <p><strong>Objetivo:</strong> ${escapeHtml(format.objective)}</p>
        <p><strong>Producción:</strong> ${escapeHtml(format.production)}</p>
        <p><strong>Coste:</strong> ${escapeHtml(format.costLabel)} | <strong>Tiempo:</strong> ${escapeHtml(format.timeLabel)}</p>
        <p><strong>Interactividad:</strong> ${escapeHtml(levelText(format.interactivityLevel))} | <strong>Escalabilidad:</strong> ${escapeHtml(levelText(format.scalabilityLevel))}</p>
      </section>
      <section class="detail-block">
        <h4>Requisitos técnicos</h4>
        ${listMarkup(format.technical)}
      </section>
      <section class="detail-block">
        <h4>Ventajas</h4>
        ${listMarkup(format.pros)}
      </section>
      <section class="detail-block">
        <h4>Riesgos</h4>
        ${listMarkup(format.risks)}
      </section>
      <section class="detail-block">
        <h4>Métricas clave</h4>
        ${listMarkup(format.metrics)}
      </section>
      <section class="detail-block">
        <h4>Ejemplos y referencias</h4>
        <p><strong>Ejemplos:</strong></p>
        <ul class="examples-list">${format.examples.map(exampleMarkup).join("")}</ul>
        <p><strong>Base de evidencia:</strong></p>
        ${listMarkup(format.references)}
      </section>
    </div>
  `;
})();
