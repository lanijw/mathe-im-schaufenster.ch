const LangSelectLabelMap = new Map([
  ["en", "Language"],
  ["de", "Sprache"]
]);

let lang = "en";

const langSelect = document.getElementById("lang-select");
const selectLabelSpan = document.getElementById("lang-label");
const calendlyWidgetEn = document.getElementById("calendly-widget-en");
const calendlyWidgetDe = document.getElementById("calendly-widget-de");

langSelect.addEventListener("change", e => {
  const selectedLang = langSelect.options[langSelect.selectedIndex].value;
  if (selectedLang !== lang) {
    lang = selectedLang;

    selectLabelSpan.innerText = LangSelectLabelMap.get(lang);
    calendlyWidgetEn.classList.toggle("hidden");
    calendlyWidgetDe.classList.toggle("hidden");
  }
});
