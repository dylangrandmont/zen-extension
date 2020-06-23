function contains(string, matchStrings) {
    return Boolean(matchStrings.find(matchString => string.includes(matchString)))
}

function increaseZen() {
    chrome.runtime.sendMessage({ request: "filters" }, function(response) {
        const { filteredKeywords } = response
        const activeFilteredKeywords = Object.keys(filteredKeywords).filter(keyword => filteredKeywords[keyword])
        const elements = Array.from(document.getElementsByTagName('*'))
            .filter(element => Array.from(element.children).length === 0)
            .filter(element => {
                const content = element.textContent.toLowerCase()
                return contains(content, activeFilteredKeywords)
            })
        elements.forEach(element => element.style.display = "none")
      });
}

increaseZen()

setInterval(increaseZen, 500)
