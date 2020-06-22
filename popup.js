const filteredKeywords = ['trump', 'covid', 'coronavirus', 'police']
const keywordsElement = document.getElementById('keywords')

keywordsElement.innerHTML = filteredKeywords.reduce((innerHTML, keyword) => {
    return innerHTML.concat(`
    <input type="checkbox" id="${keyword}" name="${keyword}" value="${keyword}" checked/>
    <label for="${keyword}">${keyword}</label><br>`);
}, '')
