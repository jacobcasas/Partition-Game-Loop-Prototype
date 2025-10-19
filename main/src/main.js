import startScreenContent from './start_screen/start_screen.js';
import instructionScreenContent from './instructions/instruction.js';

//button calls
const mainContent = document.getElementById('app');

const renderStartScreen = () => {
    mainContent.innerHTML = startScreenContent();

    const start_button = document.getElementById('start-btn');
    start_button.addEventListener('click', renderMainContent);
}
const renderMainContent = () => {
    mainContent.innerHTML = instructionScreenContent();
}



renderStartScreen();