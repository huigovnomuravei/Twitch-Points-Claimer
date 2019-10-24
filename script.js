function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function claimPoints() {
    let claimButton = getElementByXpath('//button[@class="tw-button tw-button--success tw-interactive"]');
    if (claimButton !== null) {
        claimButton.click();
        console.log('Points claimed!')
    }
}

window.addEventListener('load', function(){
    setInterval(claimPoints, 5000)
});
