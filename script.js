function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    document.body.appendChild(shootingStar);

    shootingStar.style.left = Math.random() * window.innerWidth + 'px';
    shootingStar.style.animationDuration = Math.random() * 2 + 2 + 's';

    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}

setInterval(createShootingStar, 1000);
