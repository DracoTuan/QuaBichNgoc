const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const segment1Input = document.getElementById('segment1');
const segment2Input = document.getElementById('segment2');

const colors = ['#FF5733', '#33FF57'];
const segmentLabels = ['Segment 1', 'Segment 2'];

function drawWheel() {
    const totalProbability = parseInt(segment1Input.value) + parseInt(segment2Input.value);
    if (totalProbability !== 100) {
        alert('Total probability must equal 100%');
        return;
    }

    const probabilities = [parseInt(segment1Input.value), parseInt(segment2Input.value)];
    const angles = probabilities.map(p => (p / 100) * 360);
    let startAngle = 0;

    for (let i = 0; i < angles.length; i++) {
        const endAngle = startAngle + (angles[i] * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, startAngle, endAngle);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate((startAngle + endAngle) / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial';
        ctx.fillText(segmentLabels[i], 230, 10);
        ctx.restore();

        startAngle = endAngle;
    }
}

function spinWheel() {
    const totalProbability = parseInt(segment1Input.value) + parseInt(segment2Input.value);
    if (totalProbability !== 100) {
        alert('Total probability must equal 100%');
        return;
    }

    const random = Math.random() * 100;
    let cumulativeProbability = 0;
    let chosenSegment = -1;

    const probabilities = [parseInt(segment1Input.value), parseInt(segment2Input.value)];
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random <= cumulativeProbability) {
            chosenSegment = i;
            break;
        }
    }

    const rotation = 360 * 5 + 180 + (chosenSegment === 0 ? 0 : 180); // 180 to land on chosen segment
    canvas.style.transition = 'transform 4s ease-out';
    canvas.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        alert(`You landed on ${segmentLabels[chosenSegment]}!`);
    }, 4000);
}

spinButton.addEventListener('click', spinWheel);
segment1Input.addEventListener('input', drawWheel);
segment2Input.addEventListener('input', drawWheel);

drawWheel();
