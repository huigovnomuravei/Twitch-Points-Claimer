function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

let buttonClasses = [
    'tw-button tw-button--success tw-interactive',
    'tw-transition tw-transition--duration-long tw-transition--enter-done tw-transition__slide-over-left tw-transition__slide-over-left--enter-done',
    'tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--destructive tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative'
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
