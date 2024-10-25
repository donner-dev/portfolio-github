/* const flagElements = document.querySelectorAll(".flags_item");
const textsToChange= document.querySelectorAll('[data-section]');

document.addEventListener("DOMContentLoaded", () => {


const changeLanguage = async (language)=>{
  const requestJson= await fetch(`${language}.json` )
  const texts= await requestJson.json()
  for (const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value= textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
  body.setAttribute('data-user-lang', language);
  console.log("Language set to: ", language );
}

flagElements.forEach(flagElement => {
  flagElement.addEventListener("click", (e) => {
    console.log("dataset language: ", e.target.dataset.language); 
    changeLanguage(e.target.dataset.language);
  });
});

// Set the language of your website based on the user's preference
const userLanguage = navigator.language;
(userLanguage.startsWith('es') ? changeLanguage('es') : changeLanguage('en') );



}); */