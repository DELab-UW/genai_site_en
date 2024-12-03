document.addEventListener("DOMContentLoaded", function () {
    // Zmień placeholder w polu wyszukiwania
    const searchInput = document.querySelector('.md-search__input');
    if (searchInput) {
        searchInput.setAttribute('placeholder', 'Search');
    }

    // Obserwator dla zmiany tekstu "Zacznij pisać, aby szukać..."
    const observerSearch = new MutationObserver(function () {
        const searchHint = document.querySelector('.md-search-result__meta');
        if (searchHint && searchHint.textContent.includes('Zacznij pisać')) {
            searchHint.textContent = 'Start typing to search...';
            observerSearch.disconnect(); // Przestań obserwować po wprowadzeniu zmiany
        }
    });

    // Obserwuj zmiany w DOM dla wyszukiwania
    const searchNode = document.querySelector('.md-search');
    if (searchNode) {
        observerSearch.observe(searchNode, { childList: true, subtree: true });
    }

    // Obserwator dla przycisku "Powrót do góry"
    const observerTopButton = new MutationObserver(function () {
    const backToTopButton = document.querySelector('.md-top.md-icon');
    if (backToTopButton) {
        // Znajdź węzeł tekstowy i zmodyfikuj tylko ten tekst
        backToTopButton.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('Powrót do góry')) {
                node.textContent = 'Back to top'; // Zmień istniejący tekst
            }
        });

        // Odłącz obserwatora po wykonaniu zmiany
        observerTopButton.disconnect();
    }
    });

    // Obserwuj zmiany w DOM dla przycisku
    const bodyNode = document.body;
    if (bodyNode) {
        observerTopButton.observe(bodyNode, { childList: true, subtree: true });
    }
});

