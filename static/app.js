document.addEventListener('DOMContentLoaded', () => {

  // ヘッダー スクロール検知
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ハンバーガーメニュー
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // アクティブナビ（静的HTML用: ファイル名で判定）
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hrefFile = href.split('/').pop() || 'index.html';
    if (hrefFile === filename || (filename === '' && hrefFile === 'index.html')) {
      a.classList.add('active');
    }
  });

  // スクロールリビール
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
});
