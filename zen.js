function contains(string, matchStrings) {
    return Boolean(matchStrings.find(matchString => string.includes(matchString)))
}

function increaseZen() {
    const elements = Array.from(document.getElementsByTagName('*'))
        .filter(element => Array.from(element.children).length === 0)
        .filter(element => {
            const content = element.textContent.toLowerCase()
            return contains(content, ['trump', 'covid', 'coronavirus', 'police'])
        })
    elements.forEach(element => element.style.display = "none")
}

increaseZen()

setInterval(increaseZen, 500)
