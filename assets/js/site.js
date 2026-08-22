const fragments = [
  { target: 'research-list', source: 'content/research.html' },
  { target: 'design-list', source: 'content/design.html' },
  { target: 'publications-list', source: 'content/publications.html' },
];

async function loadFragment({ target, source }) {
  const container = document.getElementById(target);
  if (!container) return;

  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    container.outerHTML = await response.text();
  } catch (error) {
    container.textContent = 'This section could not be loaded. View the site through GitHub Pages or a local web server.';
    console.error(`Failed to load ${source}:`, error);
  }
}

async function renderDesignCards() {
  const root = document.getElementById('design-grid-root');
  if (!root) return;

  try {
    const response = await fetch('assets/data/design-projects.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const yearGroups = await response.json();

    root.outerHTML = yearGroups.map((group) => {
      const cards = group.items.map((item) => {
        const inner = `${item.icon}<h3>${item.title}</h3><p>${item.description}</p><div class="card-meta">${item.meta}</div>`;
        return item.href
          ? `<a class="project-card" href="${item.href}">${inner}</a>`
          : `<article class="project-card project-card-static">${inner}</article>`;
      }).join('');
      return `<div class="project-year-label">${group.year}</div><div class="project-grid">${cards}</div>`;
    }).join('');
  } catch (error) {
    root.textContent = 'Design projects could not be loaded. View the site through GitHub Pages or a local web server.';
    console.error('Failed to load design projects:', error);
  }
}

function switchTab(tabId, updateHash = true) {
  const aliases = { work: 'research' };
  tabId = aliases[tabId] || tabId;

  const target = document.getElementById(tabId);
  if (!target) return;

  document.querySelectorAll('.tab-content').forEach((content) => {
    content.classList.remove('active');
  });

  document.querySelectorAll('nav button').forEach((button) => {
    const isActive = button.dataset.tab === tabId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  target.classList.add('active');
  if (updateHash) history.replaceState(null, '', `#${tabId}`);
}

window.switchTab = switchTab;

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all(fragments.map(loadFragment));
  await renderDesignCards();
  const requested = window.location.hash.replace('#', '');
  switchTab(requested || 'home', false);
});

window.addEventListener('hashchange', () => {
  const requested = window.location.hash.replace('#', '');
  if (requested) switchTab(requested, false);
});
