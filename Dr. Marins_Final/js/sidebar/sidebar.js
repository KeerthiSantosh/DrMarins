
function myFunction() {
    var x = document.getElementsByClassName("aut-nav__list")[0];
    console.log('hi', x);
    if (x.classList.contains('aut--flex')) {
        x.classList.remove('aut--flex')
    } else {
        x.classList.add('aut--flex')

    }
}
