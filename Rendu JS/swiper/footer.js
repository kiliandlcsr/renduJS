var dark = document.querySelector('body');
var footer = document.querySelector('.switch');
footer.addEventListener('click', function () {
    dark.classList.toggle("dark");
    console.log('oui');
});