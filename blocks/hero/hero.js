// Minimal enhancement to prove the JS is running from /blocks
(function () {
  const el = document.querySelector('.hero');
  if (!el) return;
  const badge = document.createElement('div');
  badge.textContent = 'Block: hero (JS active)';
  Object.assign(badge.style, {
    marginTop: '12px',
    fontSize: '12px',
    color: '#2563eb',
    fontFamily: 'system-ui, Segoe UI, Roboto, Arial',
  });
  el.appendChild(badge);
})();
