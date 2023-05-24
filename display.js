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
