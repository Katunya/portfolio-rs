const switchButton = document.getElementsByClassName('switch')[0];
const container = document.getElementsByClassName('wrapper')[0];
let switched = true;
const forMobile = `<span class="sw-text">Go mobile</span>`;
const forDesktop = `<span class="sw-text">Go desktop</span>`;
const back = document.getElementById('back');

back.addEventListener('click', () => {
    history.back();
});

switchButton.addEventListener('click', () => {
    if (switched) {
        switchButton.innerHTML = forDesktop;
        container.style.width = '375px';
    } else {
        switchButton.innerHTML = forMobile;
        container.style.width = '100%';
    }
    switched = !switched;
});