const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let lastX = 0;
let lastY = 0;

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = getMousePos(canvas, e);
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); // Reset the path
});

// Draw on the canvas
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const [x, y] = getMousePos(canvas, e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
});

// Get mouse position relative to canvas
function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return [
        event.clientX - rect.left,
        event.clientY - rect.top
    ];
}

// Set up drawing styles
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
