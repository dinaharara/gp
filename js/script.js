$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4
})

let h = document.querySelector('.h');
let a = document.querySelector('.a');
let s = document.querySelector('.s');
let p = document.querySelector('.p');
let t = document.querySelector('.t');
let c = document.querySelector('.c');

h.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

a.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 635,
        behavior: 'smooth'
    });
}

s.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 1920,
        behavior: 'smooth'
    });
}

p.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 3080,
        behavior: 'smooth'
    });
}

t.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 5612,
        behavior: 'smooth'
    });
}

c.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 6185,
        behavior: 'smooth'
    });
}

let btn = document.querySelector('.top');

window.onscroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 200) {
        // btn.style.display = 'flex';
        btn.style.bottom = '20px';
    } else {
        // btn.style.display = 'none';
        btn.style.bottom = '-120px';
    }
}

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}






