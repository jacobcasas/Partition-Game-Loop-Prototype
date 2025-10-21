const tutorialScreenContent = async (count) => {
    try {
        const response = await fetch(`../../../public/texts/tutorial${count}.txt`);
        const text = await response.text();
        
        const html = `
            <div class="tutorial-screen">
                <p>${text}</p>
                <button id="next-tutorial-btn">Next</button>
            </div>
        `;

        return html;
    } catch (error) {
        console.error('Error fetching tutorial text:', error);
        return '<p>Error loading tutorial content.</p>';
    }
};

export default tutorialScreenContent;