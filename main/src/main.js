import startScreenContent from './pages/start_screen/start_screen.js';
import instructionScreenContent from './pages/instructions/instruction.js';
import tutorialScreenContent from './pages/tutorial/tutorial.js';

const mainContent = document.getElementById('app');

const renderStartScreen = () => {
    mainContent.innerHTML = startScreenContent();

    const start_button = document.getElementById('start-btn');
    start_button.addEventListener('click', renderMainContent);
}
const renderMainContent = () => {
    mainContent.innerHTML = instructionScreenContent();

    const to_tutorial_button = document.getElementById('to-tutorial-btn');
    to_tutorial_button.addEventListener('click', renderTutorialScreen);
}

const renderTutorialScreen = () => {
    tutorialScreenContent(1).then((html) => {
        mainContent.innerHTML = html;
    });
}


renderStartScreen();