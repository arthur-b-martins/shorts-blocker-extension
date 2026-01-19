function redirectShorts() {
    if (window.location.href.includes('/shorts/')) {
        const videoId = window.location.href.split('/shorts/')[1];
        window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
    }
}

function removeShorts() {
    // Lista de seletores atualizada com o novo container da busca
    const selectors = [
        'ytd-rich-shelf-renderer[is-shorts]', 
        'ytd-reel-shelf-renderer',
        'grid-shelf-view-model', 
        'ytd-shelf-renderer:has(span#title-text:contains("Shorts"))'
    ];

    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
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