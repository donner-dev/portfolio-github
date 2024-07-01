/* DOM ELEMENTS */
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

/* apply cached theme on reload */
const theme = localStorage.getItem('theme');
if (theme){
    body.classList.add(theme);
}


document.addEventListener("mousemove", (event) => {
  
  let cursor = document.querySelector('#cursorglow');
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
});


/* =========== =    THEME TOGGLE HANDLER     =  ============== */

themeBtn.onclick = () => {
    /* look up how to handle states on a toggle and animate them btw */
        /* Is a TOGGLE. So 1 is on, 0 is off.  0 by default is dark */

/* TEST THESE */
/* 
    isDark && body.classList.replace('dark','light');

    !isDark && body.classList.replace('light', 'dark');
 */


     /* saving to local storage config */
    localStorage.setItem('theme','dark');
    localStorage.setItem('theme','light');
}


/* =========== =   MOUSE GLOW STUFF     =  ============== */

        /* IDEA!! I could use these event listeners to:
        when a BOX is ACTIVE, fetch the coordinates of where the cursor is 
        and make the BOX glow reflect that somehow? 
        
        -But wouldnt that take up a lot of resources?
    

        -well, yeah, but wouldnt it be COOL!?

        */


/* ANOTHER IDEA: If i end up having a grid background,
        wouldnt it be cool if the  grid distorted where the mouse moved?
        (but how the fuck could i do that, right?) (maybe learn to distort real things first, like divs. tha'd be interestiing)
        -and wouldnt it take up a lot of resources?
        -yeah, but wouldnt it be cool!???

*/















/* 
toggles

button onclick handle isactive background color change?

                            - (later) WHAT THE FDCK DID I MEAN BY THIS
*/



/* LOAD CONTENT SECTION:  MAY CHANGE */

function loadContent(section, isSubfolder = false){
    const baseUrl = "/"; 

    // Construct the file path based on isSubfolder
    let filePath;
    if (isSubfolder) {
        filePath = `${baseUrl}${section}/${section}.html`;
    } else {
        filePath = `${baseUrl}${section}.html`;
    }

   
     // Fetch the content using fetch API
    fetch(filePath)

     .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })

     .then(html => {// Update content container with fetched HTML
    const contentContainer = document.getElementById('content-container');
    if (contentContainer) {
      contentContainer.innerHTML = html;
    } else {
      console.error("Content container element with ID 'content-container' not found.");
    }
  })

     .catch(error => {
    console.error('Error fetching content:', error);
  });



}

/* loadcontent end */



/* other scripts? */




