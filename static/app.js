// 共通JavaScript
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

  // アクティブナビ
  const path = window.location.pathname;
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === path ||
        (path.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
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
