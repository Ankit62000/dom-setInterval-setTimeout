var btn = document.querySelector('button')
var percent = document.querySelector('#percent')
var growth = document.querySelector('#growth')

var grow =0 


btn.addEventListener('click', function () {
    let int = setInterval(function () {
        if (grow >= 100) {
            clearInterval(int);
            setTimeout(() => {
                btn.innerHTML = 'Downloaded';
                btn.style.opacity = 0.5;
            }, 1000);
        } else {
            grow++;
            percent.innerHTML = grow + '%';
            growth.style.width = grow + '%';
        }
    }, 10);
});
