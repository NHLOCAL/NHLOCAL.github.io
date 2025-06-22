const listItems = document.querySelectorAll("li");
const header = document.querySelector("header");

const viewportHeight = window.innerHeight;
let isScrolling = false;

function updateItemStyles() {
  const scrollPosition = window.scrollY;

  listItems.forEach((item) => {
    const itemTop = item.offsetTop;
    const itemBottom = item.offsetTop + item.offsetHeight;

    const isItemInViewport = itemTop < scrollPosition + viewportHeight / 2 && itemBottom > scrollPosition + viewportHeight / 2;
    item.classList.toggle("highlighted", isItemInViewport);
  });
}

function handleScroll() {
  if (!isScrolling) {
    isScrolling = true;
    window.requestAnimationFrame(() => {
      updateItemStyles();
      isScrolling = false;
    });
  }
}

function toggleHeaderAnimation() {
  header.classList.add("clicked");
  setTimeout(() => {
    header.classList.remove("clicked");
  }, 3000);
}

window.addEventListener("scroll", handleScroll);
header.addEventListener("click", toggleHeaderAnimation);


  // פונקציה לקריאת ערך של עוגיה לפי שם
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  // פונקציה ליצירת עוגיה
  function setCookie(name, value, options = {}) {
    options = {
      path: '/',
      // ניתן להוסיף אפשרויות נוספות כאן
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // בדיקה אם העוגיה כבר קיימת
    if (!getCookie('cookies_accepted')) {
      // הצגת ההודעה לאחר השהייה של 1 שניה (ניתן לשנות את הערך)
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 1000);
    }

    // טיפול בלחיצה על כפתור ההסכמה
    acceptButton.addEventListener('click', function() {
      setCookie('cookies_accepted', 'yes', { 'max-age': 60 * 60 * 24 * 365 }); // עוגיה לשנה
      cookieBanner.classList.remove('show');
    });
  });

  // דינמיות לקישור מייל: Gmail ל-Windows, mailto לאחרים
  function getMailLink() {
    var email = 'NH.LOCAL11@gmail.com';
    var isWindows = navigator.userAgent.indexOf('Windows') !== -1;
    var isAndroid = /Android/i.test(navigator.userAgent);
    if (isWindows && !isAndroid) {
      return 'https://mail.google.com/mail/?view=cm&to=' + encodeURIComponent(email);
    } else {
      return 'mailto:' + email;
    }
  }
  function setDynamicMailLinks() {
    var mailLink = getMailLink();
    var el1 = document.getElementById('dynamic-mail-link');
    var el2 = document.getElementById('dynamic-mail-link-bottom');
    if (el1) el1.href = mailLink;
    if (el2) el2.href = mailLink;
  }
  document.addEventListener('DOMContentLoaded', setDynamicMailLinks);