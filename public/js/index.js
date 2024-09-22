document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to all bio cards
    document.querySelectorAll("article.bio-card")
        .forEach(bioCard => bioCard.addEventListener('click', function () {
            navigateToBioPage(this);
        }));

    /**
     * Navigates to the bio page associated with the clicked bio card.
     * @param {HTMLElement} bioCardElem - The clicked bio card element.
     */
    const navigateToBioPage = (bioCardElem) => {
        const bioPageUrl = constructBioPageUrl(bioCardElem);
        fetchPage(bioPageUrl);
    }

    /**
     * Constructs the URL for the bio page based on the title of the bio card.
     * @param {HTMLElement} bioCardElem - The bio card element.
     * @returns {string} The constructed URL for the bio page.
     */
    const constructBioPageUrl = (bioCardElem) => {
        const titleElement = bioCardElem.querySelector(".bio-title");
        let titleText = titleElement.innerText;
        titleText = titleText.toLowerCase().replace(/ /g, '-');
        const bioPageUrl = `biography/${titleText}`;
        return bioPageUrl;
    }


    /**
     * Opens the specified URL in the same window.
     * @param {string} url - The URL to open.
     */
    const fetchPage = (url) => {
        window.location.href = url;
    }

    /**
     * Applies scrolling text animation to bio card titles if they overflow their container.
     */
    function applyScrollingTextAnimation() {
        const bioCards = document.querySelectorAll(".bio-card");

        bioCards.forEach(card => {
            const cardWidth = card.clientWidth; // Get the width of the card container
            const titleElement = card.querySelector("h1.bio-title");
            const titleWidth = titleElement.scrollWidth; // Get the full width of the title text

            if (titleWidth > cardWidth) {
                // Set the title width and apply animation if it overflows
                titleElement.style.width = `${titleWidth}px`;
                const animationDuration = (titleWidth / 50) + 's'; // Adjust the speed of the scrolling animation

                titleElement.style.animation = `scroll-text ${animationDuration} linear infinite`;
            } else if (hasAnimation(titleElement, 'scroll-text')) {
                removeAnimation(titleElement, 'scroll-text');
            }
        });
    }

    function hasAnimation(elemnet, animationName) {
        const style = window.getComputedStyle(elemnet);

        const animations = style.animation || style.webkitAnimation || style.mozAnimation || style.oAnimation;

        const regex = new RegExp(`(^|\\s)${animationName}(\\s|$)`);
        return regex.test(animations);
    }

    function removeAnimation(element, animationName) {
        const style = window.getComputedStyle(element);

        const currentAnimations = style.animation.split(/\s+/);

        const updatedAnimations = currentAnimations.filter(name => name !== animationName);

        element.style.animation = updatedAnimations.join(' ');
    }
    // Check if bio cards titles overflow when the UA is resized
    window.addEventListener('resize', applyScrollingTextAnimation);

    // Initialize scrolling text animation for all bio cards
    applyScrollingTextAnimation();
});
