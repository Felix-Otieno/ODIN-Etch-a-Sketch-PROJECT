// Reference to the grid container and the button
const gridContainer = document.getElementById('grid-container');
const resizeButton = document.getElementById('resizeButton');

// Function to create the grid dynamically
function createGrid(squaresPerSide) {
    gridContainer.innerHTML = ''; // Clear the grid before creating a new one
    const totalSquares = squaresPerSide * squaresPerSide;
    
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseenter', changeColor); // Add event listener for hovering
        gridContainer.appendChild(div);
    }

    // Adjust grid styling for the new size
    const squareSize = 960 / squaresPerSide;
    const gridDivs = gridContainer.querySelectorAll('div');
    gridDivs.forEach(div => {
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
    });
}

// Function to handle the hover effect (color change)
function changeColor(event) {
    event.target.style.backgroundColor = 'black'; // Set color to black when hovered
}

// Function to resize the grid when the button is clicked
resizeButton.addEventListener('click', function() {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Initialize the grid with 16 squares per side
createGrid(16);

function changeColor(event) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    event.target.style.backgroundColor = randomColor;
}

function changeColor(event) {
    let currentColor = window.getComputedStyle(event.target).backgroundColor;
    const rgb = currentColor.match(/\d+/g);
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    // Darken the square by 10%
    r = Math.max(0, r - 25);
    g = Math.max(0, g - 25);
    b = Math.max(0, b - 25);

    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
