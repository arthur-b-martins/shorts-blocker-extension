function redirectShorts() {
    if (window.location.href.includes('/shorts/')) {
        const videoId = window.location.href.split('/shorts/')[1];
        window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
    }
}

function removeShorts(){
    const shortsShelves = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts], ytd-reel-shelf-renderer');
    shortsShelves.forEach(el => el.remove());
}

redirectShorts();
removeShorts();

const observer = new MutationObserver(() => {
    redirectShorts();
    removeShorts();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});