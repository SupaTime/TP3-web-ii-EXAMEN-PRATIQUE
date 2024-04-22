let section = document.querySelector('.sliding-bg');

window.addEventListener('scroll', function() {
    let sectionYPosition = section.offsetTop;
    let scrollTop = window.scrollY - sectionYPosition;

    let distanceScrolled = scrollTop;
    //console.log(distanceScrolled);
    if (distanceScrolled >= -1500 || distanceScrolled >= 100) {
        let transformValue = 'translateY(' + distanceScrolled / 2 + 'px)';
        section.style.setProperty('--transform-value', transformValue);
    } else {
        let transformValue = 'translateY(-750px)';
        section.style.setProperty('--transform-value', transformValue);
    }
});