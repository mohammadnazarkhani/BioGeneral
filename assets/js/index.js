document.querySelectorAll("article.bio-card")
    .forEach(x => x.addEventListener('click', function() {
        openTheBioPage(this);
    }));


const openTheBioPage = (artElem) => {
    openUrl(findViewOfArticle(artElem));
}

const findViewOfArticle = (artElem) => {
    const titleElem = artElem.querySelector(".bio-title");
    let title = titleElem.innerText;
    title = title.toLowerCase();
    title = title.replace(/ /g, '-');
    const viewUrl = `/assets/views/${title}.html`;
    return viewUrl;
}

const openUrl = (url) => {
    window.open(url, "_self");
}