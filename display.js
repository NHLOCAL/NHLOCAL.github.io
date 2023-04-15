// get all the list items
const listItems = document.querySelectorAll("li");

// get the height of the viewport
const viewportHeight = window.innerHeight;

// listen for scroll events
window.addEventListener("scroll", () => {
  // get the scroll position of the page
  const scrollPosition = window.scrollY;

  // loop through all the list items
  listItems.forEach((item) => {
    // get the top and bottom position of the list item
    const itemTop = item.offsetTop;
    const itemBottom = item.offsetTop + item.offsetHeight;

    // check if the list item is in the center of the viewport
    if (itemTop < scrollPosition + viewportHeight / 2 && itemBottom > scrollPosition + viewportHeight / 2) {
      // set the CSS properties for the highlighted list item
      item.style.transform = "scale(1.1)";
      item.style.borderRadius = "10px";
      item.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
      item.style.backgroundColor = "#f2f2f2"; // Add this line to change the background color
    } else {
      // set the CSS properties for the other list items
      item.style.transform = "scale(1)";
      item.style.borderRadius = "5px";
      item.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.1)";
      item.style.backgroundColor = ""; // Reset the background color for other list items
    }
  });
});