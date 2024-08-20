document.addEventListener('mousemove', (e) => {
    const eyesContainer = document.querySelector('.eyes');
    const eyes = document.querySelectorAll('.eyes > div');

    if (!eyesContainer || eyes.length !== 2) return;

    const containerRect = eyesContainer.getBoundingClientRect();
    const containercenterX = containerRect.left + containerRect.width / 2;
    const containercenterY = containerRect.top + containerRect.height / 2;

    const angle = Math.atan2(e.clientY- containercenterY, e.clientX - containercenterX);
    const distance = Math.min(eyes[0].offsetWidth / 4, Math.sqrt(Math.pow(e.clientX - containercenterX, 2) + Math.pow(e.clientY - containercenterY, 2)));

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    eyes.forEach(eye => {
        const eyeBall = eye.querySelector('i');
        eyeBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});