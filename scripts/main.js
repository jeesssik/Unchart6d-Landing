// This file contains JavaScript code for the landing page. It may include functionality such as animations, event handling, and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');

    startButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Additional functionality can be added here
});