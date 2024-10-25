/* DOM ELEMENTS */

const body = document.body;
/* NAV BTN */
let nav = document.querySelector("#nav");
let navbtn = document.querySelector(".nav-btn");



const topButton = document.querySelector('.top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Adjust the scroll position as needed
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});






/* =========== =    THEME TOGGLE HANDLER     =  ============== */


const storedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
let theme;
if (storedTheme){ /* check for saved theme in localStorage*/
    theme = storedTheme;
    console.log("Theme found in localStorage: ",theme);
} else if (prefersDarkMode.matches) { /* check if user prefers dark */
  console.log("User prefers dark mode");  theme = "dark";
} else {
  console.log("User prefers light mode");   theme = "light";
}

document.body.setAttribute("data-theme", theme);   /* apply initial theme */

/*MANUAL LIGHT SWITCHER */
/* const lightswitcher = document.getElementById('switcher');
lightswitcher.checked = theme === "dark";

lightswitcher.addEventListener("change", (ev) => {
    const newTheme = ev.target.checked ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);

    console.log(`Theme set to ${newTheme.toUpperCase()}`);
});                                         


 */




/* =========== =     MOUSE STUFF     =  ============== */



        /* IDEA!! I could use these event listeners to:
        when a BOX is ACTIVE, fetch the coordinates of where the cursor is 
        and make the BOX glow reflect that somehow? 
        
        -But wouldnt that take up a lot of resources?
    

        -well, yeah, but wouldnt it be COOL!?

                  (later) https://codepen.io/jh3y/pen/QWYPaax turns out it exists and it found you, blessed by the universe
        */

