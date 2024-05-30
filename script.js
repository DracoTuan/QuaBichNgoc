document.getElementById('spinButton').addEventListener('click', spinWheel);

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const probability = Math.random() * 100;
    let rotation;

    if (probability <= 1) {
        rotation = 720; // Winning position (1%)
    } else {
        rotation = 360; // Losing position (99%)
    }

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${rotation + (360 * 5)}deg)`;

    setTimeout(() => {
        alert(probability <= 1 ? 'You win!' : 'You lose!');
    }, 4000);
}
