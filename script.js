document.addEventListener('DOMContentLoaded', () => {
    const match = document.getElementById('match');
    const candle = document.getElementById('candle');

    match.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'match');
    });

    candle.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    candle.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.getData('text/plain') === 'match') {
            candle.style.backgroundImage = 'url("candle-lit.png")'; // Add your lit candle image here
            candle.style.backgroundSize = 'cover';  // Ensure it covers the entire element
            candle.style.backgroundPosition = 'center';  // Center the image
            match.style.display = 'none';  // Hide the match element
        }
    });
});
