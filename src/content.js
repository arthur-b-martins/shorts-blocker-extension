function redirectShorts() {
    if (window.location.href.includes('/shorts/')) {
        const videoId = window.location.href.split('/shorts/')[1];
        window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
    }
}

redirectShorts();

const observer = new MutationObserver(() => {
    redirectShorts();
    
    const shortsShelves = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts], ytd-reel-shelf-renderer');
    shortsShelves.forEach(el => el.remove());
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});