const fragments = [
  { target: 'projects-list', source: 'content/projects.html' },
  { target: 'notes-list', source: 'content/notes.html' },
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

function switchTab(tabId, updateHash = true) {
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
  const requested = window.location.hash.replace('#', '');
  switchTab(document.getElementById(requested) ? requested : 'home', false);
});

window.addEventListener('hashchange', () => {
  const requested = window.location.hash.replace('#', '');
  if (document.getElementById(requested)) switchTab(requested, false);
});
