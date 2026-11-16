/* =========================================================
   ACADEMIA STRONG CMG — script.js
   Interações leves. A página funciona sem JavaScript.
   ========================================================= */

/* ---------- CONFIGURAÇÃO DO WHATSAPP ----------
   ATENÇÃO: número PROVISÓRIO herdado do projeto inicial.
   Ele NÃO corresponde ao telefone do rodapé, (12) 99640-5400.
   Confirme o número correto e atualize aqui (formato: 55 + DDD + número,
   apenas dígitos) e também nos href do index.html. */
const WHATSAPP_NUMBER = '5511999999999';

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- Links de WhatsApp com mensagem do plano ---------- */
  document.querySelectorAll('.js-wa').forEach(function (link) {
    const plan = link.getAttribute('data-plan');
    const message = plan
      ? 'Olá! Tenho interesse no ' + plan + ' da Academia Strong CMG.'
      : 'Olá! Gostaria de saber mais sobre os planos da Academia Strong CMG.';
    link.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  });

  /* ---------- Revelar elementos ao rolar ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.card, .period-card, .whatsapp, .footer-card-main, .diff-card, .contact-card');

  if (reduceMotion || !('IntersectionObserver' in window)) return;

  items.forEach(function (el) { el.classList.add('reveal'); });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (el) { observer.observe(el); });
})();
