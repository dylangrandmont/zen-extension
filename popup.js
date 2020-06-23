document.addEventListener('DOMContentLoaded', function () {
  const filteredKeywords = chrome.extension.getBackgroundPage().filteredKeywords;
  const keywordsElement = document.getElementById('keywords')

  keywordsElement.innerHTML = Object.keys(filteredKeywords).reduce((innerHTML, keyword) => {
  const checked = filteredKeywords[keyword]
    return innerHTML.concat(`
      <input type="checkbox" id="${keyword}" name="${keyword}" value="${keyword}" ${checked ? 'checked': ''}/>
      <label for="${keyword}">${keyword}</label><br>`);
   }, '')

   Object.keys(filteredKeywords).forEach(keyword => {
     document.getElementById(keyword).addEventListener('click', function() {
      filteredKeywords[keyword] = !filteredKeywords[keyword]
     });
   });
 });
