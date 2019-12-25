const headerBackground = () => {
    const header = document.querySelector('.header').classList;
    switch (document.querySelector('.navbar-collapse').offsetHeight) {
        case 0:
            header.add('show');
            header.remove('hide');
            break;
        case 299:
            header.add('hide');
            header.remove('show');
    }
}

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    headerBackground();
})

document.querySelectorAll('.mobile .nav-item').forEach(item => item.addEventListener('click', ()=> {
    headerBackground();
}))
