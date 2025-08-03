document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupCookieBanner();
  setDynamicMailLinks();
});

function setupTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function setupCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  if (!cookieBanner || !acceptButton) return;

  if (!getCookie('cookies_accepted')) {
    setTimeout(() => {
      cookieBanner.style.display = 'flex';
      setTimeout(() => cookieBanner.classList.add('show'), 10);
    }, 1000);
  }

  acceptButton.addEventListener('click', () => {
    setCookie('cookies_accepted', 'yes', { 'max-age': 31536000 });
    cookieBanner.classList.remove('show');
    setTimeout(() => cookieBanner.style.display = 'none', 500);
  });
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, options = {}) {
  options = { path: '/', ...options };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  for (let optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }
  document.cookie = updatedCookie;
}

function getMailLink() {
  const email = 'NH.LOCAL11@gmail.com';
  // בדוק אם מערכת ההפעלה היא Windows
  const isWindows = navigator.userAgent.includes('Windows');

  // אם המשתמש ב-Windows, פתח את ממשק האינטרנט של Gmail.
  // עבור כל מערכת הפעלה אחרת (macOS, Linux, Android, iOS), 
  // השתמש ב-mailto: כדי לפתוח את תוכנת המייל המוגדרת כברירת מחדל.
  if (isWindows) {
    return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
  } else {
    return `mailto:${email}`;
  }
}

function setDynamicMailLinks() {
  const mailLink = getMailLink();
  document.querySelectorAll('.dynamic-mail-link').forEach(link => {
    if (link) link.href = mailLink;
  });
}