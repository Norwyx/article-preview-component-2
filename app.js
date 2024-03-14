const buttonDefault = document.querySelector('.user__share-cont');
const buttonActive = document.querySelector('.user__share-active');
const sharePopup = document.querySelector('.user__share');

buttonDefault.addEventListener('click', () => {
    sharePopup.classList.toggle('hidden');
})

buttonActive.addEventListener('click', () => {
    sharePopup.classList.toggle('hidden');
})
