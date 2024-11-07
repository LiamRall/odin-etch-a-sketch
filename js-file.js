function createGrid(gridSize) {
    const container = document.getElementById('container');
    const numberOfItems = gridSize*gridSize;

    container.innerHTML = '';

    for (let i = 0; i < numberOfItems; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.style.height = `calc(100% / ${gridSize})`;
        item.style.flex = `1 0 calc(100% / ${gridSize})`;
        item.opacityLevel = 0;
        item.style.backgroundColor = getRandomRGBColour();

        item.addEventListener('mouseenter', () => {
            if (item.opacityLevel < 1) {
                item.opacityLevel += 0.1; // Increase opacity by 0.1
                item.style.opacity = item.opacityLevel.toFixed(1); // Apply the new opacity
            }
        });
        container.appendChild(item);
    }
}

function getRandomRGBColour(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}



const gridSize = 16
createGrid(gridSize);

document.getElementById('set-btn').addEventListener('click', () => {
    const gridSize = prompt('Enter the size of the grid');
    if(gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert('Please enter a number less than or equal to 100');
    }
});

document.getElementById('reset-btn').addEventListener('click', () => {
    createGrid(16);
});
