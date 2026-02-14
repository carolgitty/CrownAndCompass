function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'ru',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

function translateToRussian() {
  const select = document.querySelector('select.goog-te-combo');
  if (select) {
    select.value = 'ru';
    select.dispatchEvent(new Event('change'));
  }
}

