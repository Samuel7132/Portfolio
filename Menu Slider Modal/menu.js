const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
function closeNavbar(e) {
}

// Toggle nav
toggle.addEventListener('click',() => {
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click', closeNavbar);
});

open.addEventListener('click', () => modal.classList.add('show-modal'));

close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show-modal') : false
);