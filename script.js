function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

let buttonClasses = [
    'tw-button tw-button--success tw-interactive',
    'tw-transition tw-transition--duration-long tw-transition--enter-done tw-transition__slide-over-left tw-transition__slide-over-left--enter-done'
];

function claimPoints() {
    buttonClasses.forEach(function (item, index) {
        let claimButton = getElementByXpath(`//button[@class="${item}"]`);
        if (claimButton !== null) {
            claimButton.click();
            console.log('Points claimed!');
        }
    });
}

window.addEventListener('load', function(){
    setInterval(claimPoints, 5000)
});
