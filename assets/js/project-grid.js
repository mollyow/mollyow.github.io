document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-project-grid]').forEach(function (grid) {
    const cards = Array.from(grid.querySelectorAll('.project-card'));
    const filters = Array.from(grid.querySelectorAll('.tag-filter button'));
    const chips = Array.from(grid.querySelectorAll('.tag-chip'));
    const status = grid.querySelector('.filter-status');

    function activateFilter(tag) {
      filters.concat(chips).forEach(function (button) {
        const active = button.dataset.tag === tag;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      cards.forEach(function (card) {
        card.hidden = tag !== 'all' && !card.classList.contains('tag-' + tag);
      });

      if (status) {
        const count = cards.filter(function (card) { return !card.hidden; }).length;
        const selected = filters.find(function (button) { return button.dataset.tag === tag; });
        status.textContent = 'Showing ' + count + ' of ' + cards.length +
          (tag === 'all' ? '.' : ': ' + selected.textContent + '.');
      }
    }

    filters.concat(chips).forEach(function (button) {
      button.addEventListener('click', function () {
        activateFilter(button.dataset.tag);
      });
    });

    grid.querySelectorAll('.toggle-summary-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        const summary = button.closest('.project-summary');
        const short = summary.querySelector('.summary-short');
        const full = summary.querySelector('.summary-full');
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        full.style.display = expanded ? 'none' : 'block';
        short.style.display = expanded ? 'block' : 'none';
        button.textContent = expanded ? 'Read more' : 'Show less';
      });
    });
  });
});
