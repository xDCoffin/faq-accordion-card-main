const accordions = document.querySelectorAll('.accordion');

accordions.forEach(element => {
    console.log(element);
    btn = element.querySelector('.btn');
    btn.addEventListener('click', () => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
        else{
            element.classList.add('active');
        }
    });
});