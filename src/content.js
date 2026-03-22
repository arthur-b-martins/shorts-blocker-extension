function redirectShorts() {
    if (window.location.href.includes('/shorts/')) {
        const videoId = window.location.href.split('/shorts/')[1];
        window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
    }
}

function removeShorts() {
    const simpleSelectors = [
        'ytd-rich-shelf-renderer[is-shorts]', 
        'ytd-reel-shelf-renderer',
        'grid-shelf-view-model'
    ];

    simpleSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });

    const shelves = document.querySelectorAll('ytd-shelf-renderer');
    shelves.forEach(shelf => {
        const titleSpan = shelf.querySelector('#title-text');
        if (titleSpan && titleSpan.textContent.includes('Shorts')) {
            shelf.remove();
        }
    });
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