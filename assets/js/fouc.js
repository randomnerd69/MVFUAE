let domReady = (cb) => {
    console.log('domReady function called');
    document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
    // Display body when DOM is loaded
    console.log('DOM is loaded');
    setTimeout(() => {

document.querySelector(".main").style.visibility = 'visible';
    }, 3000);

    
});

