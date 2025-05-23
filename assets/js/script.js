let storiesEl = document.querySelector('.stories');
let storiesLeftEl = document.querySelector('.story-left');
let storiesRightEl = document.querySelector('.story-right');

storiesLeftEl.addEventListener('click', () => {
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft - 150,
        behavior: 'smooth'
    });
});
storiesRightEl.addEventListener('click', () => {
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft + 150,
        behavior: 'smooth'
    });
});